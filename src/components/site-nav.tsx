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

const SATELLITE_ITEMS = [
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

const HOME_IDS = HOME_ITEMS.map((item) => item.id);

type HomeId = (typeof HOME_ITEMS)[number]["id"];
type SelectedId = HomeId | (typeof SATELLITE_ITEMS)[number]["id"] | null;

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
      className="relative z-10 whitespace-nowrap rounded-full px-3 py-1.5 text-[15px] text-copy"
    >
      {selected ? (
        <motion.span
          layoutId="nav-selected"
          className="absolute inset-0 -z-10 rounded-full bg-accent/15 shadow-soft-in"
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
      className="mx-1 hidden h-4 w-px shrink-0 bg-edge lg:block"
    />
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const pathSelected = selectedFromPath(pathname);
  const [spySelected, setSpySelected] = useState<HomeId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lockedRef = useRef(false);
  const isHome = pathname === "/";

  const selected: SelectedId =
    pathSelected ?? (isHome ? spySelected : null);

  const lockSelect = useCallback((id: SelectedId) => {
    if (id && isHomeId(id)) {
      setSpySelected(id);
    }
    lockedRef.current = true;
    setMenuOpen(false);
    setDropdownOpen(false);
    window.setTimeout(() => {
      lockedRef.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    if (!isHome) {
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
  }, [isHome]);

  const desktopItems = isHome ? HOME_ITEMS : SATELLITE_ITEMS;
  const mobileItems = [...HOME_ITEMS, ...SATELLITE_ITEMS];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <nav aria-label="Primary" className="relative mx-auto flex justify-center">
        <div className="flex items-center rounded-full bg-canvas px-2 py-1.5 shadow-soft-out">
          <Link
            href="/"
            className="shrink-0 px-3 py-1.5 text-[15px] font-medium text-copy"
            onClick={() => {
              setSpySelected(null);
              setMenuOpen(false);
              setDropdownOpen(false);
            }}
          >
            Task Force
          </Link>

          <Divider />

          <ul className="hidden items-center lg:flex">
            {desktopItems.map((item) => (
              <li key={item.id}>
                <NavItem
                  href={item.href}
                  label={item.label}
                  selected={selected === item.id}
                  onSelect={() => lockSelect(item.id)}
                />
              </li>
            ))}

            {isHome ? (
              <li className="relative flex items-center">
                <Divider />
                <button
                  type="button"
                  className="rounded-full px-2 py-1.5 text-copy"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="menu"
                  aria-label="More pages"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <span aria-hidden="true" className="text-[12px]">
                    ▾
                  </span>
                </button>
                {dropdownOpen ? (
                  <ul
                    role="menu"
                    className="absolute right-0 top-full z-20 mt-2 min-w-[10rem] rounded-3xl bg-canvas p-2 shadow-soft-out"
                  >
                    {SATELLITE_ITEMS.map((item) => (
                      <li key={item.id} role="none">
                        <Link
                          role="menuitem"
                          href={item.href}
                          className="block rounded-2xl px-4 py-2 text-[15px] text-copy hover:shadow-soft-in"
                          onClick={() => lockSelect(item.id)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : null}
          </ul>

          <button
            type="button"
            className="ml-1 rounded-full px-3 py-1.5 text-[15px] text-copy lg:hidden"
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
          className="mx-auto mt-2 max-w-sm rounded-3xl bg-canvas p-3 shadow-soft-out lg:hidden"
        >
          <ul className="flex flex-col">
            {mobileItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-[16px] ${
                    selected === item.id
                      ? "bg-accent/15 text-copy shadow-soft-in"
                      : "text-copy"
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
