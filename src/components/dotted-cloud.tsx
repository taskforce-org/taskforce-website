export function DottedCloud() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-[8%] top-[12%] h-[42vmin] w-[56vmin] rounded-[50%] border-2 border-dotted border-edge/80" />
      <div className="absolute -left-[6%] bottom-[10%] h-[34vmin] w-[48vmin] rounded-[45%] border-2 border-dotted border-edge/60" />
      <div className="absolute left-[28%] top-[38%] h-[18vmin] w-[22vmin] rounded-full border border-dotted border-edge/50" />
    </div>
  );
}
