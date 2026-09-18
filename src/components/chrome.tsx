"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { ui, type Locale } from "@/lib/i18n";

type ChromeValue = {
  pageName: string;
  locale: Locale;
};

const ChromeContext = createContext<ChromeValue | null>(null);

function defaultName(pathname: string, locale: Locale) {
  const text = ui[locale];
  const rest = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
  if (rest === "/") return text.home;
  if (rest === "/blog") return text.blog;
  if (rest === "/about") return text.about;
  return null;
}

function canvasFor(pathname: string, locale: Locale) {
  const rest = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
  return rest.startsWith("/services/") || rest.startsWith("/work/")
    ? "black"
    : "white";
}

export function ChromeProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const pathname = usePathname();
  const [pageName, setPageName] = useState(
    defaultName(pathname, locale) ?? "Task Force",
  );

  useLayoutEffect(() => {
    const named = defaultName(pathname, locale);
    if (named) {
      setPageName(named);
    } else {
      const heading = document.querySelector("main h1");
      if (heading?.textContent) setPageName(heading.textContent.trim());
    }
    document.documentElement.dataset.theme = canvasFor(pathname, locale);
  }, [pathname, locale]);

  const value = useMemo(
    () => ({ pageName, locale }),
    [pageName, locale],
  );

  return (
    <ChromeContext.Provider value={value}>{children}</ChromeContext.Provider>
  );
}

export function useChrome() {
  const value = useContext(ChromeContext);
  if (!value) {
    throw new Error("useChrome must be used under ChromeProvider");
  }
  return value;
}

