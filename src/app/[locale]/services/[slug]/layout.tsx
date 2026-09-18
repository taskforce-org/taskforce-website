export default function DarkCanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.dataset.theme="black"`,
        }}
      />
      {children}
    </>
  );
}
