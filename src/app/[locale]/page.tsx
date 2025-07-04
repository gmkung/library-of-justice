"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getLangDir } from "rtl-detect";

import { useRouter } from "@/i18n/routing";

const Home: React.FC = () => {
  const t = useTranslations("landing");
  const locale = useLocale();
  const langDir = getLangDir(locale);

  const router = useRouter();

  return (
    <div className="mx-auto my-auto text-center">
      <div className="animate-float mb-8">
        <h1 className="text-primary-text text-xl font-bold text-center font-gothic text-glow-strong">
          {t("title")}
        </h1>
        <h2 className="text-secondary-text text-md text-center font-sci-fi mt-2">
          {t("subtitle")}
        </h2>
      </div>
      <form
        className="my-8 flex justify-center items-center"
        action={(formData) => {
          const disputeId = formData.get("dispute")?.toString();
          if (!disputeId) return;
          router.push(`/case/${disputeId}`);
        }}
      >
        <div className="relative">
          <input
            name="dispute"
            className={clsx(
              "w-40 h-12 bg-castle-stone border-2 border-stroke border-glow",
              "focus:outline-none focus:border-neon-purple focus:shadow-purple-glow",
              {
                "rounded-l pl-8": langDir === "ltr",
                "rounded-r pr-8": langDir === "rtl",
              },
              "text-md font-semibold text-primary-text p-2 font-sci-fi",
              "placeholder-tertiary-text transition-all duration-300",
            )}
            type="number"
            step={1}
            min={0}
            max={1000000}
            placeholder="Case ID"
          />
          <span
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 text-lg",
              {
                "left-3": langDir === "ltr",
                "right-3": langDir === "rtl",
              },
              "font-semibold text-neon-purple text-glow",
            )}
          >
            #
          </span>
        </div>
        <button
          type="submit"
          className={clsx(
            "bg-royal-gradient h-12 shadow-purple-glow",
            {
              "rounded-r": langDir === "ltr",
              "rounded-l": langDir === "rtl",
            },
            "text-base text-primary-text font-semibold font-sci-fi",
            "px-6 flex gap-2 justify-center items-center",
            "hover:shadow-purple-glow-lg hover:bg-neon-gradient transition-all duration-300",
            "border border-neon-purple",
          )}
        >
          <Image src="/search.svg" alt="Search" width="16" height="16" className="filter invert" />
          {t("button")}
        </button>
      </form>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-purple rounded-full animate-pulse-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-pink rounded-full animate-pulse-glow [animation-delay:1s]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent-purple rounded-full animate-pulse-glow [animation-delay:2s]"></div>
      </div>
    </div>
  );
};

export default Home;
