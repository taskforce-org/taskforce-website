"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";

const HOME_ITEMS = [
  { id: "services", label: "Services", href: "/#services" },
  { id: "work", label: "Work", href: "/#work" },
  { id: "process", label: "Process", href: "/#process" },
  { id: "studio", label: "Studio", href: "/#studio" },
] as const;

const MID_ITEMS = [
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "faq", label: "FAQ", href: "/faq" },
] as const;

const CONTACT = { id: "contact", label: "Contact", href: "/contact" } as const;

const HOME_IDS = HOME_ITEMS.map((item) => item.id);

type HomeId = (typeof HOME_ITEMS)[number]["id"];
type SelectedId = HomeId | (typeof MID_ITEMS)[number]["id"] | "contact" | null;

function selectedFromPath(pathname: string): SelectedId {
  if (pathname === "/careers") return "careers";
  if (pathname === "/faq") return "faq";
  if (pathname === "/contact") return "contact";
  return null;
}

function isHomeId(value: string): value is HomeId {
  return HOME_IDS.includes(value as HomeId);
}

function NavItem({
  href,
  label,
  selected,
  onSelect,
}: {
  href: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onSelect}
      className="relative z-10 whitespace-nowrap rounded-full px-3 py-1.5 text-[15px] text-ink-black"
    >
      {selected ? (
        <motion.span
          layoutId="nav-selected"
          className="absolute inset-0 -z-10 rounded-full bg-ink-black/10"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      ) : null}
      {label}
    </Link>
  );
}

function Divider() {
  return (
    <span
      aria-hidden="true"
      className="mx-1 hidden h-4 w-px shrink-0 bg-ink-black/20 lg:block"
    />
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const pathSelected = selectedFromPath(pathname);
  const [spySelected, setSpySelected] = useState<HomeId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const lockedRef = useRef(false);

  const selected: SelectedId =
    pathSelected ?? (pathname === "/" ? spySelected : null);

  const lockSelect = useCallback((id: SelectedId) => {
    if (id && isHomeId(id)) {
      setSpySelected(id);
    }
    lockedRef.current = true;
    setMenuOpen(false);
    window.setTimeout(() => {
      lockedRef.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (isHomeId(hash)) {
        setSpySelected(hash);
      }
    };
    onHash();
    window.addEventListener("hashchange", onHash);

    const elements = HOME_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) {
      return () => window.removeEventListener("hashchange", onHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target.id && isHomeId(top.target.id)) {
          setSpySelected(top.target.id);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.15, 0.35, 0.55] },
    );

    for (const el of elements) observer.observe(el);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHash);
    };
  }, [pathname]);

  const allItems = [...HOME_ITEMS, ...MID_ITEMS, CONTACT];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-3"
      >
        <div className="flex min-w-0 flex-1 items-center rounded-full border border-ink-black/10 bg-paper-white/70 px-2 py-1.5 shadow-subtle backdrop-blur-xl">
          <Link
            href="/"
            className="shrink-0 px-3 py-1.5 text-[15px] font-medium text-ink-black"
            onClick={() => {
              setSpySelected(null);
              setMenuOpen(false);
            }}
          >
            Task Force
          </Link>

          <Divider />

          <ul className="hidden min-w-0 flex-1 items-center lg:flex">
            {HOME_ITEMS.map((item) => (
              <li key={item.id}>
                <NavItem
                  href={item.href}
                  label={item.label}
                  selected={selected === item.id}
                  onSelect={() => lockSelect(item.id)}
                />
              </li>
            ))}

            <li className="flex items-center">
              <Divider />
            </li>

            {MID_ITEMS.map((item) => (
              <li key={item.id}>
                <NavItem
                  href={item.href}
                  label={item.label}
                  selected={selected === item.id}
                  onSelect={() => lockSelect(item.id)}
                />
              </li>
            ))}

            <li className="ml-auto flex items-center">
              <Divider />
              <NavItem
                href={CONTACT.href}
                label={CONTACT.label}
                selected={selected === CONTACT.id}
                onSelect={() => lockSelect(CONTACT.id)}
              />
            </li>
          </ul>

          <button
            type="button"
            className="ml-auto rounded-full px-3 py-1.5 text-[15px] text-ink-black lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-[1200px] rounded-3xl border border-ink-black/10 bg-paper-white/90 p-3 shadow-subtle backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {allItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-[16px] ${
                    selected === item.id
                      ? "bg-ink-black/10 text-ink-black"
                      : "text-ink-black"
                  }`}
                  onClick={() => lockSelect(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
