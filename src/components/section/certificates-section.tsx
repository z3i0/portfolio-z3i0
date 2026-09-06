/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getResumeData } from "@/data/resume";
import { useLanguage } from "@/context/language-context";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Icons } from "@/components/icons";

export default function CertificatesSection() {
  const { language, t, isRtl } = useLanguage();
  const data = getResumeData(language);

  const certificates = "certificates" in data ? data.certificates : [];

  return (
    <section id="certificates" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1 flex items-center gap-1.5 shadow-xs">
              <Award className="size-3.5 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">
                {t.certificatesBadge}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t.certificatesTitle}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance max-w-[680px]">
              {t.certificatesSubtitle}
            </p>
          </div>
        </div>

        {/* Timeline Layout */}
        <Timeline className="p-0 sm:p-2">
          {certificates.map((cert) => (
            <TimelineItem
              key={cert.title + cert.dates}
              className="w-full flex items-start justify-between gap-4 sm:gap-7"
            >
              {/* Timeline Connector & Circular University Logo */}
              <TimelineConnectItem className="flex items-start justify-center">
                <div className="size-10 sm:size-11 bg-card z-10 shrink-0 overflow-hidden p-1.5 border rounded-full shadow-sm ring-2 ring-border flex items-center justify-center flex-none">
                  {"image" in cert && cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.issuer}
                      className="size-full object-contain"
                    />
                  ) : (
                    <Award className="size-5 text-primary" />
                  )}
                </div>
              </TimelineConnectItem>

              {/* Certificate Details */}
              <div className="flex flex-1 flex-col justify-start gap-1.5 min-w-0">
                {/* Issuer & Date */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 shrink-0" />
                    <span>{cert.issuer}</span>
                  </span>
                  {cert.dates && (
                    <time className="text-xs font-mono text-muted-foreground bg-muted/60 px-2.5 py-0.5 rounded-full border border-border/50 shrink-0">
                      {cert.dates}
                    </time>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="font-semibold text-base sm:text-lg leading-snug tracking-tight text-foreground hover:text-primary transition-colors"
                  dir="auto"
                >
                  {cert.title}
                </h3>

                {/* Credential ID */}
                {"credentialId" in cert && cert.credentialId && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80" dir="ltr">
                    <span className="text-[11px] bg-muted/60 px-2 py-0.5 rounded-md border border-border/50">
                      Credential ID: {cert.credentialId}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p
                  className="text-sm text-muted-foreground leading-relaxed mt-0.5"
                  dir="auto"
                >
                  {cert.description}
                </p>

                {/* Skills & Action Link */}
                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3 pt-1">
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-normal px-2.5 py-0.5 bg-muted/80 text-foreground/80 hover:bg-muted"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {cert.link && (
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-3 py-1 cursor-pointer shadow-xs">
                        <Icons.coursera className="size-3.5 shrink-0 fill-current" />
                        <span>{t.viewCredential}</span>
                        <ExternalLink
                          className={`size-3 ${isRtl ? "rtl:-scale-x-100" : ""}`}
                        />
                      </Badge>
                    </Link>
                  )}
                </div>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
