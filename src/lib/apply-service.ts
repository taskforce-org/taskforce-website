export const APPLY_SERVICE_EVENT = "taskforce:apply-service";

export function applyServiceToInquiry(slug: string) {
  const params = new URLSearchParams(window.location.search);
  params.set("service", slug);
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${params.toString()}#inquire`,
  );
  window.dispatchEvent(new CustomEvent(APPLY_SERVICE_EVENT, { detail: { slug } }));
  document.getElementById("inquire")?.scrollIntoView({ behavior: "smooth" });
}
