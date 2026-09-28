import type { Metadata } from "next";
import "./globals.css";

const WHATSAPP_DISPLAY = "(21) 97279-6543";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucialafayete.com.br"),
  title: {
    default: "Dra. Lúcia Lafayete — Fisioterapia e Osteopatia | Leblon, Rio de Janeiro",
    template: "%s | Dra. Lúcia Lafayete",
  },
  description:
    "Fisioterapia, Osteopatia, Pilates e Reabilitação com a Dra. Lúcia Lafayete. Atendimento personalizado no Leblon, RJ. Agende pelo WhatsApp.",
  applicationName: "Dra. Lúcia Lafayete",
  keywords: [
    "fisioterapia Leblon",
    "osteopatia Leblon",
    "pilates Leblon",
    "fisioterapeuta Leblon RJ",
    "Dra. Lúcia Lafayete fisioterapia",
    "reabilitação Leblon",
  ],
  authors: [{ name: "Dra. Lúcia Lafayete" }],
  creator: "Dra. Lúcia Lafayete",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lucialafayete.com.br",
    siteName: "Dra. Lúcia Lafayete",
    title: "Dra. Lúcia Lafayete — Fisioterapia e Osteopatia | Leblon, RJ",
    description:
      "Fisioterapia, Osteopatia e Pilates com a Dra. Lúcia Lafayete. Atendimento personalizado no Leblon. Agende pelo WhatsApp.",
    images: [
      {
        url: "/images/lucia-fundo-2.jpg",
        width: 1080,
        height: 1350,
        alt: "Dra. Lúcia Lafayete — Fisioterapeuta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Lúcia Lafayete — Fisioterapia e Osteopatia | Leblon, RJ",
    description:
      "Fisioterapia, Osteopatia e Pilates com a Dra. Lúcia Lafayete. Atendimento personalizado no Leblon.",
    images: ["/images/lucia-fundo-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.svg",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dra. Lúcia Lafayete Fisioterapia",
  image: "/images/lucia-fundo-2.jpg",
  url: "https://lucialafayete.com.br",
  telephone: WHATSAPP_DISPLAY,
  email: "contato@lucialafayete.com.br",
  medicalSpecialty: "Physiotherapy",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ataulfo de Paiva, 1175 - Sala 205",
    addressLocality: "Leblon",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -22.9843,
    longitude: -43.2269,
  },
  areaServed: "Rio de Janeiro, RJ",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  founder: {
    "@type": "Person",
    name: "Dra. Lúcia Lafayete",
    description: "Fisioterapeuta e osteopata em formação pela Escola de Osteopatia de Madrid (EOM).",
  },
  knowsAbout: ["Osteopatia", "Fisioterapia", "Pilates", "Ondas de Choque"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
