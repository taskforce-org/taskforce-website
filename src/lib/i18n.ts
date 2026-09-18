export const locales = ["fa", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export function isLocale(value: string | undefined): value is Locale {
  return value === "fa" || value === "en";
}

export function localized(locale: Locale, path = "/"): string {
  if (path === "/" || path === "") return `/${locale}`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return isLocale(first) ? first : defaultLocale;
}

export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) {
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  }
  return localized(next, pathname);
}

export const ui = {
  fa: {
    home: "خانه",
    blog: "وبلاگ",
    about: "درباره ما",
    contact: "تماس با ما",
    send: "ارسال",
    sending: "در حال ارسال…",
    close: "بستن",
    sentTitle: "ارسال شد",
    sentBody: "پیام رسید. برمی‌گردیم سراغتان.",
    name: "نام",
    phone: "تلفن",
    reason: "موضوع",
    services: "خدمات",
    work: "نمونه‌کارها",
    testimonials: "نظرها",
    aboutUs: "دربارهٔ ما",
    allPosts: "همهٔ نوشته‌ها",
    stories: "روایت‌ها",
    profile: "پروفایل",
    serviceKicker: "خدمت",
    footerLine: "استودیو نرم‌افزار — وب‌سایت، سیستم سفارشی، اتوماسیون.",
    heroTitle: "نرم‌افزاری که دوام می‌آورد.",
    heroBody:
      "استودیو مهندسی ارشد. وب‌سایت، سیستم سفارشی و اتوماسیون — ساخته برای بعد از هفتهٔ لانچ.",
    switchTo: "EN",
    switchLabel: "English",
    errors: {
      name: "نام لازم است.",
      phone: "تلفن حداقل ۷ رقم باشد.",
      reason: "موضوع لازم است.",
      slow: "کمی صبر کنید، بعد دوباره بفرستید.",
      rate: "از این شبکه زیاد پیام آمده.",
      store: "ذخیره نشد. اتصال پایگاه داده را چک کنید.",
    },
  },
  en: {
    home: "Home",
    blog: "Blog",
    about: "About",
    contact: "Contact us",
    send: "Send",
    sending: "Sending…",
    close: "Close",
    sentTitle: "Sent",
    sentBody: "We have the note. We will come back.",
    name: "Name",
    phone: "Phone",
    reason: "Reason",
    services: "Services",
    work: "Work",
    testimonials: "Testimonials",
    aboutUs: "About us",
    allPosts: "All posts",
    stories: "Stories",
    profile: "Profile",
    serviceKicker: "Service",
    footerLine: "Software studio — websites, custom systems, automation.",
    heroTitle: "Software that holds up.",
    heroBody:
      "A senior engineering studio. Websites, custom systems, and automation — built to last past launch week.",
    switchTo: "فا",
    switchLabel: "فارسی",
    errors: {
      name: "Name is required.",
      phone: "Phone needs at least 7 digits.",
      reason: "Reason is required.",
      slow: "Take a moment, then send again.",
      rate: "Too many notes from this network.",
      store: "Could not store the note. Check the database connection.",
    },
  },
} as const;
