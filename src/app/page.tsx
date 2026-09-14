/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AuroraText } from "@/components/ui/aurora-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { getResumeData } from "@/data/resume";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import CertificatesSection from "@/components/section/certificates-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import GithubActivitySection from "@/components/section/github-activity-section";
import { ArrowUpRight, GraduationCap } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { language, t, isRtl } = useLanguage();
  const data = getResumeData(language);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 suppressHydrationWarning className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                  {t.greeting}{" "}
                  <AuroraText key={`aurora-${language}`}>
                    {data.name.split(" ")[0]}
                  </AuroraText>
                </h1>
              </BlurFade>
              <BlurFadeText
                key={`desc-${language}`}
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted overflow-hidden">
                <Image
                  src={data.avatarUrl}
                  alt={data.name}
                  width={128}
                  height={128}
                  priority
                  fetchPriority="high"
                  loading="eager"
                  unoptimized
                  className="aspect-square h-full w-full object-cover"
                />
                <AvatarFallback>{data.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{t.about}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {data.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t.workExperience}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t.education}</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {data.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center text-muted-foreground">
                        <GraduationCap className="size-4" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className={`h-3.5 w-3.5 text-muted-foreground opacity-0 ${isRtl
                              ? "translate-x-2 rtl:-scale-x-100 group-hover:opacity-100 group-hover:translate-x-0"
                              : "-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                            } transition-all duration-200`}
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-end flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t.skills}</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-4">
            {Object.entries(
              data.skills.reduce((acc, skill) => {
                const category = "category" in skill && skill.category ? (skill.category as string) : "Other";
                if (!acc[category]) acc[category] = [];
                acc[category].push(skill);
                return acc;
              }, {} as Record<string, (typeof data.skills)[number][]>)
            ).map(([category, skills], catIndex) => (
              <div key={category} className="flex flex-col gap-y-2">
                {category !== "Other" && (
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {(t.skillsCategories as Record<string, string>)[category] || category}
                  </h3>
                )}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, id) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + (catIndex * 4 + id) * 0.02}>
                      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                        {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="github-activity">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <GithubActivitySection />
        </BlurFade>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="certificates">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <CertificatesSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
