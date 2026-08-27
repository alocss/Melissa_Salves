import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Dra. Mel Salves | Harmonização Facial & Estética Avançada",
  description:
    "Atendimento em harmonização facial e estética avançada com protocolos personalizados em Salvador, Lauro de Freitas, Praia do Forte e Barra do Pojuca.",
  openGraph: {
    title: "Dra. Mel Salves",
    description:
      "Harmonização facial & estética avançada com olhar individualizado.",
    type: "website",
    locale: "pt_BR",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        {/* THESIS: Ateliê de Proporções recusa o template clínico e transforma avaliação em leitura editorial. OWN-WORLD: marfim, espresso, bronze seco, retratos reais, linhas finas e composição de prova de moda. STORY: reconhecer a profissional, entender seu método e iniciar uma conversa segura. FIRST VIEWPORT: manifesto tipográfico à esquerda, retrato arquitetônico à direita, marca MS em sobreposição e ação textual no rodapé. FORM: direção quatro, código guiado, seed dcc18d7e. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
        {children}
      </body>
    </html>
  );
}
