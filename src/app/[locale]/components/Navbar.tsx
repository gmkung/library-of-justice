"use client";

import React, { useMemo } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales } from "@/i18n/routing";

interface INavbar {
  locale: (typeof locales)[number];
}

const Navbar: React.FC<INavbar> = ({ locale }) => {
  const pathname = usePathname();

  const pathWithoutLocale = useMemo(
    () => pathname.split("/").slice(2).join("/"),
    [pathname],
  );

  return (
    <header className="w-full grid grid-cols-3 mb-8">
      <Image
        className="col-start-2 place-self-center animate-float"
        src="/castle-logo.svg"
        priority={true}
        alt="Library of Justice"
        width="185"
        height="48"
      />
      <div
        className={clsx(
          "justify-self-end place-self-center",
          "border-glow rounded-lg",
          "transition hover:scale-110 hover:shadow-purple-glow",
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger
            className={clsx(
              "focus:outline-none transition-all duration-300",
              "rounded-lg bg-castle-stone border border-stroke",
              "py-2 px-4 font-sci-fi text-glow",
              "hover:bg-dark-purple hover:border-neon-purple",
            )}
          >
            <span className="text-primary-text">{locale.toUpperCase()}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-min bg-castle-stone border-stroke border-glow">
            {locales.map((innerLocale) =>
              innerLocale !== locale ? (
                <DropdownMenuItem
                  key={innerLocale}
                  className={clsx(
                    "hover:cursor-pointer hover:bg-dark-purple",
                    "py-2 px-4 font-sci-fi",
                    "transition-all duration-300",
                  )}
                >
                  <Link href={`/${innerLocale}/${pathWithoutLocale}`}>
                    <span className="text-primary-text text-center hover:text-glow">
                      {innerLocale.toUpperCase()}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ) : null,
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
