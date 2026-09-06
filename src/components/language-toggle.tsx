"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(
        "relative flex items-center justify-center font-semibold text-xs tracking-tight",
        className
      )}
      onClick={toggleLanguage}
      aria-label={`Switch to ${t.switchTo}`}
    >
      <div className="flex items-center justify-center gap-1 size-full">
        <Languages className="size-4 shrink-0" />
      </div>
    </Button>
  );
}
