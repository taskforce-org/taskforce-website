"use client";

import { useEffect, useState } from "react";

import { submitInquiry } from "@/app/actions/submit-inquiry";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/surface";
import { APPLY_SERVICE_EVENT } from "@/lib/apply-service";
import { contactContent } from "@/lib/contact";
import {
  MAX_LINKS,
  MAX_PHONES,
  NEED_MAX_CHARS,
  TIMELINE_OPTIONS,
} from "@/lib/inquiry";
import { getServiceBySlug, isKnownServiceSlug } from "@/lib/services";

const fieldClass =
  "mt-2 w-full rounded-2xl bg-canvas px-4 py-3 text-[16px] text-copy shadow-soft-in outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function InquiryForm({
  initialServiceSlug,
}: {
  initialServiceSlug?: string;
}) {
  const copy = contactContent.form;
  const [links, setLinks] = useState<string[]>([""]);
  const [phones, setPhones] = useState<string[]>([""]);
  const [needLength, setNeedLength] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [thanksOpen, setThanksOpen] = useState(false);
  const [serviceSlug, setServiceSlug] = useState(
    initialServiceSlug && isKnownServiceSlug(initialServiceSlug)
      ? initialServiceSlug
      : "",
  );
  const serviceLabel = serviceSlug
    ? getServiceBySlug(serviceSlug)?.label
    : undefined;

  useEffect(() => {
    function onApply(event: Event) {
      const slug = (event as CustomEvent<{ slug?: string }>).detail?.slug;
      if (slug && isKnownServiceSlug(slug)) {
        setServiceSlug(slug);
      }
    }

    window.addEventListener(APPLY_SERVICE_EVENT, onApply);
    return () => window.removeEventListener(APPLY_SERVICE_EVENT, onApply);
  }, []);

  useEffect(() => {
    if (initialServiceSlug && isKnownServiceSlug(initialServiceSlug)) {
      document.getElementById("inquire")?.scrollIntoView();
    }
  }, [initialServiceSlug]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setErrors({});
    const form = event.currentTarget;
    const result = await submitInquiry(new FormData(form));
    setPending(false);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    form.reset();
    setLinks([""]);
    setPhones([""]);
    setNeedLength(0);
    setServiceSlug("");
    setThanksOpen(true);
  }

  function closeThanks() {
    setThanksOpen(false);
    window.location.assign("/contact");
  }

  return (
    <>
      <form
        id="inquire"
        onSubmit={onSubmit}
        className="flex flex-col gap-6"
        noValidate
      >
        {errors.form ? (
          <p className="text-[16px] text-copy" role="alert">
            {errors.form}
          </p>
        ) : null}

        {serviceSlug && serviceLabel ? (
          <div>
            <p className="text-[16px] text-copy">
              <span className="inline-flex rounded-full bg-canvas px-4 py-2 shadow-soft-out">
                {copy.serviceTag}: {serviceLabel}
              </span>
            </p>
            <input type="hidden" name="serviceSlug" value={serviceSlug} />
          </div>
        ) : null}

        <div>
          <label htmlFor="companyName" className="text-[16px] text-copy">
            {copy.companyName}
          </label>
          <input
            id="companyName"
            name="companyName"
            required
            className={fieldClass}
            autoComplete="organization"
          />
          {errors.companyName ? (
            <p className="mt-2 text-[15px] text-copy" role="alert">
              {errors.companyName}
            </p>
          ) : null}
        </div>

        <fieldset>
          <legend className="text-[16px] text-copy">{copy.links}</legend>
          <ul className="mt-2 flex flex-col gap-3">
            {links.map((link, index) => (
              <li key={index}>
                <input
                  name="links"
                  type="url"
                  value={link}
                  placeholder={index === 0 ? copy.websitePlaceholder : copy.linkPlaceholder}
                  className={fieldClass}
                  onChange={(event) => {
                    const next = [...links];
                    next[index] = event.target.value;
                    setLinks(next);
                  }}
                />
              </li>
            ))}
          </ul>
          {links.length < MAX_LINKS ? (
            <Button
              type="button"
              variant="soft"
              size="sm"
              className="mt-3"
              onClick={() => setLinks([...links, ""])}
            >
              {copy.addLink}
            </Button>
          ) : null}
          {errors.links ? (
            <p className="mt-2 text-[15px] text-copy" role="alert">
              {errors.links}
            </p>
          ) : null}
        </fieldset>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="personFullName" className="text-[16px] text-copy">
              {copy.personFullName}
            </label>
            <input
              id="personFullName"
              name="personFullName"
              required
              className={fieldClass}
              autoComplete="name"
            />
            {errors.personFullName ? (
              <p className="mt-2 text-[15px] text-copy" role="alert">
                {errors.personFullName}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="personRole" className="text-[16px] text-copy">
              {copy.personRole}
            </label>
            <input
              id="personRole"
              name="personRole"
              required
              className={fieldClass}
              autoComplete="organization-title"
            />
            {errors.personRole ? (
              <p className="mt-2 text-[15px] text-copy" role="alert">
                {errors.personRole}
              </p>
            ) : null}
          </div>
        </div>

        <fieldset>
          <legend className="text-[16px] text-copy">{copy.phones}</legend>
          <ul className="mt-2 flex flex-col gap-3">
            {phones.map((phone, index) => (
              <li key={index}>
                <input
                  name="phones"
                  type="tel"
                  value={phone}
                  className={fieldClass}
                  autoComplete="tel"
                  onChange={(event) => {
                    const next = [...phones];
                    next[index] = event.target.value;
                    setPhones(next);
                  }}
                />
              </li>
            ))}
          </ul>
          {phones.length < MAX_PHONES ? (
            <Button
              type="button"
              variant="soft"
              size="sm"
              className="mt-3"
              onClick={() => setPhones([...phones, ""])}
            >
              {copy.addPhone}
            </Button>
          ) : null}
          {errors.phones ? (
            <p className="mt-2 text-[15px] text-copy" role="alert">
              {errors.phones}
            </p>
          ) : null}
        </fieldset>

        <div>
          <label htmlFor="subject" className="text-[16px] text-copy">
            {copy.subject}
          </label>
          <input
            id="subject"
            name="subject"
            required
            maxLength={200}
            className={fieldClass}
          />
          {errors.subject ? (
            <p className="mt-2 text-[15px] text-copy" role="alert">
              {errors.subject}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="need" className="text-[16px] text-copy">
            {copy.need}
          </label>
          <textarea
            id="need"
            name="need"
            required
            maxLength={NEED_MAX_CHARS}
            rows={10}
            className={`${fieldClass} min-h-[12rem] resize-y`}
            onChange={(event) => setNeedLength(event.target.value.length)}
          />
          <p className="mt-2 text-[15px] text-copy">
            {needLength}/{NEED_MAX_CHARS}
          </p>
          {errors.need ? (
            <p className="mt-2 text-[15px] text-copy" role="alert">
              {errors.need}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="budgetMinUsd" className="text-[16px] text-copy">
              {copy.budgetMin}
            </label>
            <input
              id="budgetMinUsd"
              name="budgetMinUsd"
              required
              inputMode="decimal"
              className={fieldClass}
            />
            {errors.budgetMinUsd ? (
              <p className="mt-2 text-[15px] text-copy" role="alert">
                {errors.budgetMinUsd}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="timeline" className="text-[16px] text-copy">
              {copy.timeline}
            </label>
            <select id="timeline" name="timeline" required className={fieldClass}>
              <option value="">{copy.timelinePlaceholder}</option>
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.timeline ? (
              <p className="mt-2 text-[15px] text-copy" role="alert">
                {errors.timeline}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <Button type="submit" disabled={pending}>
            {pending ? copy.submitting : copy.submit}
          </Button>
        </div>
      </form>

      {thanksOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-copy/20 px-6">
          <Surface className="max-w-md p-10">
            <h2 className="text-[26px] leading-[1.18] text-copy">
              {copy.thanksHeading}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.5] text-copy">
              {copy.thanksBody}
            </p>
            <div className="mt-8">
              <Button type="button" onClick={closeThanks}>
                {copy.thanksClose}
              </Button>
            </div>
          </Surface>
        </div>
      ) : null}
    </>
  );
}
