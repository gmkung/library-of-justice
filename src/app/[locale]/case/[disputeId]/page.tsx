import React from "react";

import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

import { type StatusResponseType } from "@/app/api/dispute/[id]/status/query";
import { Separator } from "@/components/ui/separator";

import Evidence from "./components/Evidence";
import Period from "./components/Period";
import Question from "./components/Question";
import Votes from "./components/Votes";

import { Periods } from "@/app/utils";

interface ICaseDetails {
  params: Promise<{ disputeId: `${number}` }>;
}

const CaseDetails: React.FC<ICaseDetails> = async (props) => {
  const params = await props.params;

  const { disputeId } = params;

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const data: StatusResponseType["dispute"] = await fetch(
    `${protocol}://${host}/api/dispute/${disputeId}/status`,
  ).then((result) => result.json());

  const t = await getTranslations("case");

  return (
    <div className="flex flex-col items-center my-32 px-0 md:px-10 max-w-[1300px] w-full">
      <div className="bg-castle-stone border border-stroke border-glow rounded-lg p-8 shadow-castle-depth castle-texture w-full">
        <h2 className="text-primary-text text-xl font-bold font-gothic text-glow-strong text-center">
          {t("title")}
          <span className="inline text-neon-purple font-sci-fi text-glow"> #{disputeId} </span>
        </h2>
        <Separator className="bg-neon-gradient w-3/4 my-8 mx-auto h-0.5 shadow-purple-glow" />
        <Question {...{ disputeId }} />
        <Separator className="bg-neon-gradient w-3/4 my-8 mx-auto h-0.5 shadow-purple-glow" />
        <Period
          currentPeriod={Periods[data.period]}
          currentRound={parseInt(data.currentRoundIndex)}
        />
        <Separator className="bg-neon-gradient w-3/4 my-8 mx-auto h-0.5 shadow-purple-glow" />
        <Evidence evidenceGroupId={data.externalDisputeId} />
        <Separator className="bg-neon-gradient w-3/4 my-8 mx-auto h-0.5 shadow-purple-glow" />
        <Votes {...{ disputeId }} />
      </div>
    </div>
  );
};

export default CaseDetails;
