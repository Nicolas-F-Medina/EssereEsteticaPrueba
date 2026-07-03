import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Essere Estética | Estética corporal y depilación definitiva",
  description:
    "Centro de estética familiar con depilación definitiva, estética corporal, electrodos y entrenamiento personalizado."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
