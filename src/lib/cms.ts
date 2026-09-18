import type { Locale } from "@/lib/i18n";

export type CmsService = {
  slug: string;
  title: string;
  blurb: string;
  body: string;
  image: string;
  cardSize: "small" | "medium" | "large";
};

export type CmsWork = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  body: string;
  image: string;
};

export type CmsPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
};

export type CmsTestimonial = {
  quote: string;
  person: string;
  role: string;
};

export type CmsMember = {
  slug: string;
  name: string;
  speciality: string;
  link: string;
  story: string;
  timeline: { year: string; event: string }[];
};

export type CmsPayload = {
  testimonialsOn: boolean;
  services: CmsService[];
  work: CmsWork[];
  posts: CmsPost[];
  testimonials: CmsTestimonial[];
  team: CmsMember[];
};

const seedEn: CmsPayload = {
  testimonialsOn: true,
  services: [
    {
      slug: "websites-ecommerce",
      title: "Websites & E-commerce",
      blurb: "Marketing sites and storefronts that load fast and convert.",
      body: "Marketing sites, storefronts, and content-led pages built to load fast and convert. We lock positioning and information architecture first, then ship a production surface you can keep.",
      image: "/images/tf-websites.jpg",
      cardSize: "large",
    },
    {
      slug: "custom-systems-dashboards",
      title: "Custom Systems & Dashboards",
      blurb: "Internal tools, admin panels, and reporting built around real work.",
      body: "Internal tools, admin panels, and reporting that match how the work actually happens. We map the real workflow with operators, then build the smallest system that removes the wait.",
      image: "/images/tf-systems.jpg",
      cardSize: "medium",
    },
    {
      slug: "desktop-software-automation",
      title: "Desktop Software & Automation",
      blurb: "Native utilities and scripted pipelines that remove manual steps.",
      body: "Native utilities and scripted pipelines that take repetitive work off people. We isolate the manual path, automate the reliable parts, and leave a clear operator override.",
      image: "/images/tf-automation.jpg",
      cardSize: "small",
    },
    {
      slug: "integrations-redesign-support",
      title: "Integrations, Redesign & Support",
      blurb: "Connect the stack, modernise the surface, keep it running.",
      body: "Connecting existing systems, modernising a tired surface, and keeping the result running.",
      image: "/images/tf-integrations.jpg",
      cardSize: "medium",
    },
    {
      slug: "3d-interactive-experiences",
      title: "3D & Interactive Experiences",
      blurb: "Web-based product viewers and motion-led storytelling.",
      body: "Web-based product viewers and motion-led storytelling that still perform on a phone.",
      image: "/images/tf-3d.jpg",
      cardSize: "small",
    },
  ],
  work: [
    {
      slug: "field-operations-dashboard",
      title: "Field operations dashboard",
      kind: "Custom system",
      summary: "Dispatch time cut from hours to minutes.",
      body: "A field operations dashboard built around how dispatchers actually work, not a generic admin template.",
      image: "/images/tf-work-field.jpg",
    },
    {
      slug: "direct-to-consumer-storefront",
      title: "Direct-to-consumer storefront",
      kind: "E-commerce",
      summary: "Checkout rebuilt around a single-page flow.",
      body: "A storefront rebuilt so the buy path is one page, with imagery and motion that stay fast on a phone.",
      image: "/images/tf-work-store.jpg",
    },
    {
      slug: "warehouse-automation-suite",
      title: "Warehouse automation suite",
      kind: "Desktop & automation",
      summary: "Nightly reconciliation runs without an operator.",
      body: "Desktop automation that takes nightly reconciliation off the floor and leaves a clear override.",
      image: "/images/tf-work-warehouse.jpg",
    },
  ],
  posts: [
    {
      slug: "shipping-software-that-holds-up",
      title: "Shipping software that holds up",
      excerpt: "How we keep a surface maintainable after the launch week.",
      body: "Launch week is easy to romanticise. The work that matters is the year after: the operator path, the boring edge cases, and the images that still load. We write that into the first cut, not a later rewrite.",
      image: "/images/tf-blog.jpg",
    },
    {
      slug: "why-we-prototype-the-interaction-first",
      title: "Why we prototype the interaction first",
      excerpt: "A product viewer that does not sink the rest of the site.",
      body: "3D and motion are easy to overbuild. We prototype the interaction, then constrain the scene so the rest of the site stays fast. That is the only way the work survives a phone on a bad network.",
      image: "/images/tf-hero.jpg",
    },
  ],
  testimonials: [
    {
      quote: "They cut the dispatch wait without turning the floor into a science project.",
      person: "Operations lead",
      role: "Field logistics",
    },
    {
      quote: "Checkout stopped leaking. The store still looks like us.",
      person: "Founder",
      role: "Direct-to-consumer",
    },
  ],
  team: [
    {
      slug: "sina",
      name: "Sina",
      speciality: "Product engineering",
      link: "https://taskforce.studio",
      story:
        "Builds and ships the Task Force website and the systems under it. Scope on this page is only what we have stored.",
      timeline: [
        { year: "Now", event: "Task Force website and CMS." },
        { year: "Prior", event: "Senior product engineering on client systems." },
      ],
    },
  ],
};

const seedFa: CmsPayload = {
  testimonialsOn: true,
  services: [
    {
      slug: "websites-ecommerce",
      title: "وب‌سایت و فروشگاه",
      blurb: "سایت بازاریابی و فروشگاه با بارگذاری سریع و تبدیل واقعی.",
      body: "سایت بازاریابی، فروشگاه و صفحات محتوایی که سریع بار می‌شوند و می‌فروشند. اول جایگاه و معماری اطلاعات را قفل می‌کنیم، بعد سطح تولید را می‌سازیم که بماند.",
      image: "/images/tf-websites.jpg",
      cardSize: "large",
    },
    {
      slug: "custom-systems-dashboards",
      title: "سیستم سفارشی و داشبورد",
      blurb: "ابزار داخلی، پنل و گزارش حول کار واقعی.",
      body: "ابزار داخلی، پنل ادمین و گزارش که با کار واقعی جور است. مسیر اپراتور را می‌کشیم، بعد کوچک‌ترین سیستمی را می‌سازیم که انتظار را حذف کند.",
      image: "/images/tf-systems.jpg",
      cardSize: "medium",
    },
    {
      slug: "desktop-software-automation",
      title: "نرم‌افزار دسکتاپ و اتوماسیون",
      blurb: "ابزار native و خط لولهٔ اسکریپت که کار دستی را برمی‌دارد.",
      body: "ابزار native و خط لوله که کار تکراری را از آدم‌ها می‌گیرد. مسیر دستی را جدا می‌کنیم، بخش پایدار را خودکار می‌کنیم، و override روشن می‌گذاریم.",
      image: "/images/tf-automation.jpg",
      cardSize: "small",
    },
    {
      slug: "integrations-redesign-support",
      title: "یکپارچه‌سازی، بازطراحی و پشتیبانی",
      blurb: "اتصال پشته، نوسازی سطح، نگه داشتن نتیجه.",
      body: "سیستم‌های موجود را وصل می‌کنیم، سطح خسته را نو می‌کنیم، و نتیجه را زنده نگه می‌داریم.",
      image: "/images/tf-integrations.jpg",
      cardSize: "medium",
    },
    {
      slug: "3d-interactive-experiences",
      title: "تجربه سه‌بعدی و تعاملی",
      blurb: "نمایش محصول روی وب و روایت با حرکت.",
      body: "نمایشگر محصول و روایت حرکتی روی وب که روی گوشی هم سرپا می‌ماند.",
      image: "/images/tf-3d.jpg",
      cardSize: "small",
    },
  ],
  work: [
    {
      slug: "field-operations-dashboard",
      title: "داشبورد عملیات میدانی",
      kind: "سیستم سفارشی",
      summary: "زمان دیسپچ از ساعت به دقیقه.",
      body: "داشبورد عملیات میدانی حول کار واقعی دیسپچر، نه قالب ادمین عمومی.",
      image: "/images/tf-work-field.jpg",
    },
    {
      slug: "direct-to-consumer-storefront",
      title: "فروشگاه مستقیم به مشتری",
      kind: "فروشگاه",
      summary: "چک‌اوت در یک صفحه.",
      body: "فروشگاه طوری بازسازی شد که خرید یک صفحه باشد و تصویر و حرکت روی گوشی سریع بماند.",
      image: "/images/tf-work-store.jpg",
    },
    {
      slug: "warehouse-automation-suite",
      title: "اتوماسیون انبار",
      kind: "دسکتاپ و اتوماسیون",
      summary: "تراز شبانه بدون اپراتور.",
      body: "اتوماسیون دسکتاپ که تراز شبانه را از کف سالن برمی‌دارد و override روشن می‌گذارد.",
      image: "/images/tf-work-warehouse.jpg",
    },
  ],
  posts: [
    {
      slug: "shipping-software-that-holds-up",
      title: "نرم‌افزاری که بعد از لانچ می‌ماند",
      excerpt: "سطح را بعد از هفتهٔ لانچ قابل نگهداری نگه می‌داریم.",
      body: "هفتهٔ لانچ رمانتیک است. کار واقعی سال بعد است: مسیر اپراتور، لبه‌های خسته‌کننده، تصویری که هنوز بار می‌شود. این را در برش اول می‌نویسیم، نه در بازنویسی بعدی.",
      image: "/images/tf-blog.jpg",
    },
    {
      slug: "why-we-prototype-the-interaction-first",
      title: "اول تعامل را پروتوتایپ می‌کنیم",
      excerpt: "نمایشگری که بقیهٔ سایت را غرق نکند.",
      body: "سه‌بعدی و حرکت را راحت می‌شود بیش‌ازحد ساخت. اول تعامل را پروتوتایپ می‌کنیم، بعد صحنه را محدود می‌کنیم تا بقیهٔ سایت سریع بماند. تنها راه زنده ماندن روی گوشی با نت بد همین است.",
      image: "/images/tf-hero.jpg",
    },
  ],
  testimonials: [
    {
      quote: "انتظار دیسپچ را کم کردند، بدون اینکه سالن را آزمایشگاه کنند.",
      person: "سرپرست عملیات",
      role: "لجستیک میدانی",
    },
    {
      quote: "چک‌اوت دیگر نشت ندارد. فروشگاه هنوز شبیه خود ماست.",
      person: "بنیان‌گذار",
      role: "فروش مستقیم",
    },
  ],
  team: [
    {
      slug: "sina",
      name: "سینا",
      speciality: "مهندسی محصول",
      link: "https://taskforce.studio",
      story:
        "وب‌سایت تسک‌فورس و سیستم زیر آن را می‌سازد و منتشر می‌کند. محدودهٔ این صفحه فقط چیزی است که ذخیره داریم.",
      timeline: [
        { year: "الان", event: "وب‌سایت تسک‌فورس و مدیریت محتوا." },
        { year: "قبل", event: "مهندسی محصول ارشد روی سیستم مشتری." },
      ],
    },
  ],
};

const seed: Record<Locale, CmsPayload> = { fa: seedFa, en: seedEn };

export async function getCms(locale: Locale = "fa"): Promise<CmsPayload> {
  return seed[locale];
}

export async function getService(slug: string, locale: Locale = "fa") {
  const cms = await getCms(locale);
  return cms.services.find((item) => item.slug === slug);
}

export async function getWork(slug: string, locale: Locale = "fa") {
  const cms = await getCms(locale);
  return cms.work.find((item) => item.slug === slug);
}

export async function getPost(slug: string, locale: Locale = "fa") {
  const cms = await getCms(locale);
  return cms.posts.find((item) => item.slug === slug);
}
