"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n, { resources } from "@/i18n/config";

export type Language = "en" | "ar";

export const translations = {
  en: resources.en.translation,
  ar: resources.ar.translation,
};

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationType;
  i18n: typeof i18n;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LANGUAGE_STORAGE_KEY = "portfolio_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (saved === "ar" || saved === "en") return saved;
    }
    return (i18n.language as Language) || "en";
  });

  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    const initialLang: Language = saved === "ar" || saved === "en" ? saved : "en";
    if (i18n.language !== initialLang) {
      i18n.changeLanguage(initialLang);
    }
    document.documentElement.lang = initialLang;
    document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";

    const handleLanguageChanged = (lng: string) => {
      const validLang = lng === "ar" ? "ar" : "en";
      setLanguageState(validLang);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, validLang);
      document.documentElement.lang = validLang;
      document.documentElement.dir = validLang === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  const toggleLanguage = () => {
    const next: Language = language === "en" ? "ar" : "en";
    setLanguage(next);
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const isRtl = language === "ar";
  const currentTranslations = translations[language] || translations.en;

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider
        value={{
          language,
          dir,
          isRtl,
          setLanguage,
          toggleLanguage,
          t: currentTranslations,
          i18n,
        }}
      >
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export { useTranslation };
