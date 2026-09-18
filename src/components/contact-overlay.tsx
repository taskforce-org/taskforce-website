"use client";

import { useState } from "react";

import { submitContact } from "@/app/actions/submit-contact";
import { ui, type Locale } from "@/lib/i18n";

export function ContactOverlay({ locale }: { locale: Locale }) {
  const text = ui[locale];
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [thanks, setThanks] = useState(false);
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setErrors({});
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("startedAt", String(startedAt));
    data.set("locale", locale);
    const result = await submitContact(data);
    setPending(false);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    form.reset();
    setThanks(true);
  }

  return (
    <div
      id="contact-pop"
      popover="auto"
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl bg-canvas p-8 text-copy shadow-2xl"
    >
      {thanks ? (
        <>
          <h2 id="contact-title" className="text-[28px] tracking-tight">
            {text.sentTitle}
          </h2>
          <p className="mt-3 text-[16px] opacity-80">{text.sentBody}</p>
          <button
            type="button"
            className="mt-8 rounded-full bg-copy px-5 py-2.5 text-[15px] text-canvas"
            popoverTarget="contact-pop"
            popoverTargetAction="hide"
          >
            {text.close}
          </button>
        </>
      ) : (
        <>
          <h2 id="contact-title" className="text-[28px] tracking-tight">
            {text.contact}
          </h2>
          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" noValidate>
            {errors.form ? (
              <p role="alert" className="text-[15px]">
                {errors.form}
              </p>
            ) : null}
            <label className="text-[14px]">
              {text.name}
              <input
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-current/15 bg-transparent px-4 py-3 text-[16px] outline-none"
              />
              {errors.name ? <span className="mt-1 block">{errors.name}</span> : null}
            </label>
            <label className="text-[14px]">
              {text.phone}
              <input
                name="phone"
                required
                className="mt-2 w-full rounded-2xl border border-current/15 bg-transparent px-4 py-3 text-[16px] outline-none"
              />
              {errors.phone ? (
                <span className="mt-1 block">{errors.phone}</span>
              ) : null}
            </label>
            <label className="text-[14px]">
              {text.reason}
              <textarea
                name="reason"
                required
                rows={4}
                className="mt-2 w-full rounded-2xl border border-current/15 bg-transparent px-4 py-3 text-[16px] outline-none"
              />
              {errors.reason ? (
                <span className="mt-1 block">{errors.reason}</span>
              ) : null}
            </label>
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            >
              <input name="company_website" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="mt-2 flex gap-3">
              <button
                type="submit"
                disabled={pending}
                className="rounded-full bg-copy px-5 py-2.5 text-[15px] text-canvas disabled:opacity-50"
              >
                {pending ? text.sending : text.send}
              </button>
              <button
                type="button"
                className="rounded-full px-5 py-2.5 text-[15px]"
                popoverTarget="contact-pop"
                popoverTargetAction="hide"
              >
                {text.close}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
