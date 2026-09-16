import Link from "next/link";

import { Button } from "@/components/ui/button";

const HOME_SECTIONS = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#studio", label: "Studio" },
] as const;

export function HomeSectionLinks() {
  return (
    <nav aria-label="Home sections" className="mt-10">
      <ul className="flex flex-wrap gap-3">
        {HOME_SECTIONS.map((item) => (
          <li key={item.href}>
            <Button asChild variant="soft">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
