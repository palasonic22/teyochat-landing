"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const inputClass =
  "flex h-11 w-full rounded-sm border border-black/10 bg-[#fafafa] px-4 py-2.5 text-[14px] font-medium text-foreground transition-all placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:bg-white focus-visible:border-black/20";
const labelClass = "mb-1.5 block text-[13px] font-bold text-foreground";

export function ContactForm() {
  const [result, setResult] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(
      "Preview complete. Your message has not been sent; this form is a local prototype.",
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
      onChange={() => setResult("")}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Lorem Ipsum"
            required
            minLength={2}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="hello@example.com"
            required
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>
          Company (Optional)
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Lorem Inc."
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Lorem ipsum dolor sit amet..."
          required
          minLength={10}
          className={`${inputClass} h-auto min-h-[120px] resize-y rounded-xl py-3`}
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-foreground px-8 font-bold text-background shadow-md transition-all hover:scale-[1.02] hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 active:scale-[0.98] sm:w-auto"
        >
          Send <Send aria-hidden="true" className="ml-2 h-4 w-4" />
        </button>
      </div>
      {result && (
        <p
          role="status"
          className="text-[13px] leading-relaxed text-foreground/60"
        >
          {result}
        </p>
      )}
    </form>
  );
}
