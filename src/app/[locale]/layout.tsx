import clsx from "clsx";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Open_Sans } from "next/font/google";
import { getLangDir } from "rtl-detect";

import Navbar from "./components/Navbar";

import "../globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kleros: Library of Justice",
  description: "Kleros archival UI",
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }>,
) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages({ locale });
  const langDir = getLangDir(locale);

  return (
    <html lang={locale}>
      <body
        className={clsx(openSans.className, "antialiased bg-castle-dark font-sci-fi")}
        dir={langDir}
      >
        <NextIntlClientProvider {...{ messages }}>
          <div
            className={clsx(
              "bg-castle-gradient castle-texture min-h-screen",
              "p-4 flex flex-col",
            )}
          >
            <div
              className={clsx(
                "bg-neon-gradient shadow-purple-glow-lg rounded-lg",
                "flex-grow p-1.5 flex flex-col",
              )}
            >
              <div className="bg-castle-dark shadow-castle-depth rounded-lg flex-grow p-6 flex flex-col items-center border border-stroke">
                <Navbar {...{ locale }} />
                <main className="flex-grow flex flex-col w-full">{children}</main>
              </div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
