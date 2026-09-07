import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionData {
  total: {
    lastYear: number;
  };
  contributions: ContributionDay[];
  stats: {
    totalContributions: number;
    activeDays: number;
    longestStreak: number;
    currentStreak: number;
    mostActiveDay: {
      date: string;
      count: number;
    } | null;
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "z3i0";

  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      {
        next: { revalidate: 3600 },
        headers: {
          "User-Agent": "Portfolio-App",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`External API responded with status ${response.status}`);
    }

    const data = await response.json();
    const contributions: ContributionDay[] = data.contributions || [];

    // Calculate statistics
    let totalCount = data.total?.lastYear ?? 0;
    if (!totalCount && contributions.length > 0) {
      totalCount = contributions.reduce((acc: number, cur: ContributionDay) => acc + cur.count, 0);
    }

    let activeDays = 0;
    let longestStreak = 0;
    let currentRun = 0;
    let mostActiveDay: { date: string; count: number } | null = null;

    for (const item of contributions) {
      if (item.count > 0) {
        activeDays++;
        currentRun++;
        if (currentRun > longestStreak) {
          longestStreak = currentRun;
        }
        if (!mostActiveDay || item.count > mostActiveDay.count) {
          mostActiveDay = { date: item.date, count: item.count };
        }
      } else {
        currentRun = 0;
      }
    }

    // Current streak (counting backwards from end)
    let currentStreak = 0;
    const reversed = [...contributions].reverse();
    // If today hasn't had any commits yet, don't break streak if yesterday had commits
    const startIndex = reversed.length > 0 && reversed[0].count === 0 ? 1 : 0;
    for (let i = startIndex; i < reversed.length; i++) {
      if (reversed[i].count > 0) {
        currentStreak++;
      } else {
        break;
      }
    }

    const result: ContributionData = {
      total: {
        lastYear: totalCount,
      },
      contributions,
      stats: {
        totalContributions: totalCount,
        activeDays,
        longestStreak,
        currentStreak,
        mostActiveDay,
      },
    };

    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
}
