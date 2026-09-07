"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { getResumeData } from "@/data/resume";
import { useLanguage } from "@/context/language-context";

export default function ContactSection() {
  const { language, t } = useLanguage();
  const data = getResumeData(language);

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{t.contactBadge}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.contactTitle}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {language === "ar" ? (
            <>
              هل ترغب في التواصل أو مناقشة فكرة مشروع جديد؟ أرسل لي رسالة مباشرة عبر{" "}
              {data.contact.social && "LinkedIn" in data.contact.social && data.contact.social.LinkedIn ? (
                <Link
                  href={data.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  لينكد إن (LinkedIn)
                </Link>
              ) : (
                <Link
                  href={`mailto:${data.contact.email}`}
                  className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  البريد الإلكتروني
                </Link>
              )}{" "}
              وسأجيبك في أقرب وقت.
            </>
          ) : (
            <>
              Want to chat? Just shoot me a message via{" "}
              {data.contact.social && "LinkedIn" in data.contact.social && data.contact.social.LinkedIn ? (
                <Link
                  href={data.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  LinkedIn
                </Link>
              ) : (
                <Link
                  href={`mailto:${data.contact.email}`}
                  className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  email
                </Link>
              )}{" "}
              and I&apos;ll respond whenever I can.
            </>
          )}
        </p>
      </div>
    </div>
  );
}


