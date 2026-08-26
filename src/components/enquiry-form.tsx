"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { LoaderCircle, Send, ShieldCheck } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";

const initialValues: EnquiryInput = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  city: "",
  message: "",
  website: "",
};

const eventTypes = ["Wedding event", "Social celebration", "Corporate event", "Production & stage", "Decoration", "Event rentals", "Other"];

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryInput>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update(name: keyof EnquiryInput, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");
    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => { nextErrors[String(issue.path[0])] = issue.message; });
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "We could not send your enquiry right now.");
      setStatus("success");
      setFeedback("Thank you — your enquiry has been sent. Our team will be in touch soon.");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your enquiry right now.");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <Field label="Name" error={errors.name}><input value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" placeholder="Your name" /></Field>
        <Field label="Phone" error={errors.phone}><input value={values.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" inputMode="tel" placeholder="Your phone number" /></Field>
      </div>
      <div className="form-row">
        <Field label="Email" error={errors.email}><input type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" placeholder="you@example.com" /></Field>
        <Field label="Event type" error={errors.eventType}>
          <select value={values.eventType} onChange={(event) => update("eventType", event.target.value)}>
            <option value="">Select an event type</option>
            {eventTypes.map((type) => <option value={type} key={type}>{type}</option>)}
          </select>
        </Field>
      </div>
      <div className="form-row">
        <Field label="Event date" error={errors.eventDate}><input type="date" value={values.eventDate} onChange={(event) => update("eventDate", event.target.value)} /></Field>
        <Field label="City" error={errors.city}><input value={values.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" placeholder="Your city" /></Field>
      </div>
      <Field label="Tell us about the event" error={errors.message}><textarea rows={5} value={values.message} onChange={(event) => update("message", event.target.value)} placeholder="Occasion, guest count, style and anything else we should know…" /></Field>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} />
      </div>
      <div className="form-submit-row">
        <button className="button button-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <LoaderCircle className="spin" size={17} /> : <Send size={16} />}
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </button>
        <span><ShieldCheck size={16} /> This is an enquiry, not a booking.</span>
      </div>
      {feedback ? <p className={`form-feedback form-feedback-${status}`} role="status">{feedback}</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return <label className="field"><span>{label}</span>{children}{error ? <em>{error}</em> : null}</label>;
}
