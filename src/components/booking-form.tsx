"use client";

import { FormEvent, useState } from "react";

const ESSERE_WHATSAPP_NUMBER = "5491126545255";
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

    const message = [
      "Hola Essere Estética, quiero solicitar un turno.",
      "",
      `Nombre y apellido: ${fullName}`,
      `Mail: ${email}`,
      `WhatsApp: ${whatsapp}`,
      `Horario preferido: ${preference}`
    ].join("\n");
    const whatsappUrl = `https://wa.me/${ESSERE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("Te abrimos WhatsApp con la solicitud lista para enviar.");
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
        Enviar por WhatsApp
      </button>

      <p className={`form-status ${isError ? "is-error" : ""}`} role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
