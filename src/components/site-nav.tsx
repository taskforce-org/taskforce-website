import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "/process" },
  { label: "Studio", href: "/studio" },
  { label: "Careers", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
        <Link href="/" className="text-[16px] font-medium text-ink-black">
          Task Force
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="py-0.5 text-[16px] text-ink-black hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild size="sm">
          <Link href="/contact">Start a Project</Link>
        </Button>
      </nav>
    </header>
  );
}
