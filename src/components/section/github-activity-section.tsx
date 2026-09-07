"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Icons } from "@/components/icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/context/language-context";
import { getResumeData } from "@/data/resume";
import { ArrowUpRight, CalendarDays, Flame, GitCommit, Trophy, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContributionData, ContributionDay } from "@/app/api/github-contributions/route";

const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-muted/40 hover:bg-muted/70 border border-border/20",
  1: "bg-emerald-200 dark:bg-[#0e4429] border border-emerald-300/60 dark:border-[#0e4429]",
  2: "bg-emerald-400 dark:bg-[#006d32] border border-emerald-500/60 dark:border-[#006d32]",
  3: "bg-emerald-600 dark:bg-[#26a641] border border-emerald-700/60 dark:border-[#26a641]",
  4: "bg-emerald-800 dark:bg-[#39d353] border border-emerald-900/60 dark:border-[#39d353]",
};

export default function GithubActivitySection() {
  const { language, t, isRtl } = useLanguage();
  const resumeData = getResumeData(language);
  const username = ("githubUsername" in resumeData && resumeData.githubUsername) ? resumeData.githubUsername : "z3i0";

  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchContributions = React.useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`/api/github-contributions?username=${encodeURIComponent(username)}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const json: ContributionData = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  // Split contributions into weeks (columns)
  const { weeks, monthLabels } = useMemo(() => {
    if (!data?.contributions || data.contributions.length === 0) {
      return { weeks: [], monthLabels: [] };
    }

    const contributions = data.contributions;
    const weeksList: (ContributionDay | null)[][] = [];
    let currentWeek: (ContributionDay | null)[] = [];

    contributions.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === contributions.length - 1) {
        while (currentWeek.length < 7) {
          currentWeek.push(null);
        }
        weeksList.push(currentWeek);
        currentWeek = [];
      }
    });

    // Determine month labels aligned with week columns
    const months: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeksList.forEach((week, weekIndex) => {
      const firstDay = week[0];
      if (!firstDay) return;
      const date = new Date(firstDay.date + "T00:00:00Z");
      const month = date.getUTCMonth();

      if (month !== lastMonth) {
        lastMonth = month;
        const formatter = new Intl.DateTimeFormat(language === "ar" ? "ar" : "en", {
          month: "short",
        });
        months.push({
          label: formatter.format(date),
          weekIndex,
        });
      }
    });

    return { weeks: weeksList, monthLabels: months };
  }, [data, language]);

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr + "T00:00:00Z");
      return new Intl.DateTimeFormat(language === "ar" ? "ar" : "en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date);
    } catch {
      return dateStr;
    }
  };

  // Weekday indicators (Mon, Wed, Fri)
  const weekdays = language === "ar" 
    ? ["", "إثنين", "", "أربعاء", "", "جمعة", ""]
    : ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <section id="github-activity" className="w-full">
      <div className="flex min-h-0 flex-col gap-y-8">
        {/* Section Header matching Projects and Certificates */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1 flex items-center gap-1.5 shadow-xs">
              <Icons.github className="size-3.5 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">
                {t.githubActivityBadge}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t.githubActivityTitle}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance max-w-[680px]">
              {t.githubActivitySubtitle}
            </p>
          </div>
        </div>

        {/* Highlight Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {/* Card 1: Total Contributions */}
          <div className="flex flex-col gap-1.5 p-4 rounded-xl border bg-card/60 backdrop-blur-xs shadow-xs hover:border-border/80 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {t.totalContributions}
              </span>
              <div className="size-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <GitCommit className="size-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              {loading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded" />
              ) : (
                (data?.stats.totalContributions ?? 0).toLocaleString(language === "ar" ? "ar-EG" : "en-US")
              )}
            </div>
          </div>

          {/* Card 2: Current Streak */}
          <div className="flex flex-col gap-1.5 p-4 rounded-xl border bg-card/60 backdrop-blur-xs shadow-xs hover:border-border/80 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {t.currentStreak}
              </span>
              <div className="size-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Flame className="size-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight flex items-baseline gap-1">
              {loading ? (
                <div className="h-8 w-14 bg-muted animate-pulse rounded" />
              ) : (
                <>
                  <span>{(data?.stats.currentStreak ?? 0).toLocaleString(language === "ar" ? "ar-EG" : "en-US")}</span>
                  <span className="text-xs font-normal text-muted-foreground">{t.days}</span>
                </>
              )}
            </div>
          </div>

          {/* Card 3: Longest Streak */}
          <div className="flex flex-col gap-1.5 p-4 rounded-xl border bg-card/60 backdrop-blur-xs shadow-xs hover:border-border/80 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {t.longestStreak}
              </span>
              <div className="size-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Trophy className="size-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight flex items-baseline gap-1">
              {loading ? (
                <div className="h-8 w-14 bg-muted animate-pulse rounded" />
              ) : (
                <>
                  <span>{(data?.stats.longestStreak ?? 0).toLocaleString(language === "ar" ? "ar-EG" : "en-US")}</span>
                  <span className="text-xs font-normal text-muted-foreground">{t.days}</span>
                </>
              )}
            </div>
          </div>

          {/* Card 4: Active Days */}
          <div className="flex flex-col gap-1.5 p-4 rounded-xl border bg-card/60 backdrop-blur-xs shadow-xs hover:border-border/80 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {t.activeDays}
              </span>
              <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <CalendarDays className="size-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight flex items-baseline gap-1">
              {loading ? (
                <div className="h-8 w-14 bg-muted animate-pulse rounded" />
              ) : (
                <>
                  <span>{(data?.stats.activeDays ?? 0).toLocaleString(language === "ar" ? "ar-EG" : "en-US")}</span>
                  <span className="text-xs font-normal text-muted-foreground">{t.days}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Contribution Heatmap Calendar - Full Width without horizontal scroll */}
        <div className="rounded-2xl border bg-card/50 backdrop-blur-xs p-3.5 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4 overflow-hidden">
          <TooltipProvider delayDuration={50}>
            {loading ? (
              <div className="flex flex-col gap-3 py-4 animate-pulse">
                <div className="h-4 w-48 bg-muted rounded" />
                <div className="h-28 sm:h-32 w-full bg-muted/40 rounded-xl" />
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-8 gap-3 text-center">
                <p className="text-sm text-muted-foreground">{t.errorLoadingContributions}</p>
                <button
                  onClick={fetchContributions}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border bg-background hover:bg-muted transition-colors cursor-pointer"
                >
                  <RefreshCw className="size-3" />
                  <span>Retry</span>
                </button>
              </div>
            ) : (
              <div className="w-full select-none flex flex-col gap-1">
                {/* Month labels row */}
                <div className="flex items-center w-full">
                  {/* Spacer matching weekday column on sm+ screens */}
                  <div className="w-5 sm:w-7 shrink-0 hidden sm:block" />
                  <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[1.5px] sm:gap-[2px] w-full text-[9px] sm:text-[10px] text-muted-foreground font-medium h-4 relative">
                    {weeks.map((_, weekIndex) => {
                      const month = monthLabels.find((m) => m.weekIndex === weekIndex);
                      return (
                        <div key={weekIndex} className="relative">
                          {month && (
                            <span className="absolute start-0 -top-0.5 whitespace-nowrap">
                              {month.label}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Heatmap Grid + Weekday labels */}
                <div className="flex items-stretch w-full">
                  {/* Weekday indicators column */}
                  <div className="w-5 sm:w-7 shrink-0 hidden sm:grid grid-rows-7 gap-[1.5px] sm:gap-[2px] text-[8px] sm:text-[9px] text-muted-foreground font-medium select-none">
                    {weekdays.map((day, idx) => (
                      <div key={idx} className="flex items-center leading-none">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Columns of weeks */}
                  <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[1.5px] sm:gap-[2px] w-full">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-rows-7 gap-[1.5px] sm:gap-[2px]">
                        {week.map((day, dayIdx) => {
                          if (!day || !day.date) {
                            return (
                              <div
                                key={`empty-${dayIdx}`}
                                className="aspect-square w-full opacity-0 pointer-events-none"
                              />
                            );
                          }
                          const count = day.count;
                          const formattedDate = formatDate(day.date);
                          const tooltipText =
                            count > 0
                              ? `${count.toLocaleString(language === "ar" ? "ar-EG" : "en-US")} ${t.contributionsOnDate} ${formattedDate}`
                              : `${t.noContributionsOnDate} ${formattedDate}`;

                          return (
                            <Tooltip key={day.date}>
                              <TooltipTrigger asChild>
                                <div
                                  className={cn(
                                    "aspect-square w-full rounded-[1px] sm:rounded-[2px] cursor-pointer transition-transform duration-100 hover:scale-125 hover:z-20 hover:ring-1 sm:hover:ring-2 hover:ring-ring",
                                    LEVEL_CLASSES[day.level] || LEVEL_CLASSES[0]
                                  )}
                                />
                              </TooltipTrigger>
                              <TooltipContent side="top" className="text-xs py-1 px-2.5 shadow-md">
                                {tooltipText}
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </TooltipProvider>

          {/* Footer: GitHub profile link + Legend */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-border/40">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Icons.github className="size-3.5" />
              <span>@{username}</span>
              <ArrowUpRight
                className={cn(
                  "size-3 text-muted-foreground group-hover:text-foreground transition-transform",
                  isRtl
                    ? "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
                    : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                )}
              />
            </a>

            {/* Scale Legend */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{t.less}</span>
              <div className="flex items-center gap-1">
                <div className="size-[11px] rounded-[2px] bg-muted/40 border border-border/20" />
                <div className="size-[11px] rounded-[2px] bg-emerald-200 dark:bg-[#0e4429]" />
                <div className="size-[11px] rounded-[2px] bg-emerald-400 dark:bg-[#006d32]" />
                <div className="size-[11px] rounded-[2px] bg-emerald-600 dark:bg-[#26a641]" />
                <div className="size-[11px] rounded-[2px] bg-emerald-800 dark:bg-[#39d353]" />
              </div>
              <span>{t.more}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
