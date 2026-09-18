export default function DarkCanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-full bg-canvas text-copy">{children}</div>;
}
