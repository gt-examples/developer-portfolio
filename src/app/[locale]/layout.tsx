import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { T } from "gt-next";
import { getGT } from "gt-next/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();

  const title = gt("Developer Portfolio | General Translation");
  const description = gt(
    "A multilingual developer portfolio with projects, about page, and contact form."
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: "https://developer-portfolio.generaltranslation.dev",
      languages: {
        en: "/en",
        es: "/es",
        ja: "/ja",
        zh: "/zh",
        fr: "/fr",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <GTProvider>
          <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2 text-center text-xs text-neutral-400">
            <T>
              This is a demo application built with{" "}
              <a href="https://generaltranslation.com" className="underline hover:text-neutral-200" target="_blank" rel="noopener noreferrer">General Translation</a>
              {" "}to showcase multilingual support. Not a real portfolio.
            </T>
          </div>
          {children}
        </GTProvider>
      </body>
    </html>
  );
}
