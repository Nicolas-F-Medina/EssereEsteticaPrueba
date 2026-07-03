"use client";

import { FormEvent, useState } from "react";

const preferences = ["Mañana", "Mediodía", "Tarde"];

export default function BookingForm() {
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const preference = String(formData.get("preference") || "").trim();

    setIsError(false);

    if (!fullName || !email || !whatsapp || !preference) {
      setStatus("Completá todos los campos para enviar la solicitud.");
      setIsError(true);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Revisá el mail ingresado.");
      setIsError(true);
      return;
    }

    setStatus(
      `Gracias, ${fullName}. Registramos tu preferencia para ${preference.toLowerCase()} y te contactaremos por WhatsApp.`
    );
    form.reset();
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label className="field">
        <span>Nombre y apellido</span>
        <input name="fullName" type="text" autoComplete="name" required />
      </label>

      <label className="field">
        <span>Mail</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label className="field">
        <span>Número de WhatsApp</span>
        <input name="whatsapp" type="tel" autoComplete="tel" required />
      </label>

      <fieldset className="preference-group">
        <legend>Horario de preferencia</legend>
        {preferences.map((preference) => (
          <label key={preference}>
            <input name="preference" type="radio" value={preference} required />
            <span>{preference}</span>
          </label>
        ))}
      </fieldset>

      <button className="button button-primary w-full" type="submit">
        Enviar solicitud
      </button>

      <p className={`form-status ${isError ? "is-error" : ""}`} role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
