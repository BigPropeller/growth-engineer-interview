import Image from "next/image";
import { twMerge } from "tailwind-merge";

import capterraScore from "@/assets/components/ReviewBadge/capterra-score.svg";
import capterraBestValue from "@/assets/components/ReviewBadge/capterra-bestValue.svg";
import capterraEaseOfUse from "@/assets/components/ReviewBadge/capterra-easeOfUse.svg";
import capterraShortList from "@/assets/components/ReviewBadge/capterra-shortList.svg";
import getAppScore from "@/assets/components/ReviewBadge/getApp-score.svg";
import getAppCategoryLeaders from "@/assets/components/ReviewBadge/getApp-categoryLeaders.svg";
import softwareAdviceScore from "@/assets/components/ReviewBadge/softwareAdvice-score.svg";
import softwareAdviceBestSupport from "@/assets/components/ReviewBadge/softwareAdvice-bestSupport.svg";
import softwareAdviceMostRecommended from "@/assets/components/ReviewBadge/softwareAdvice-mostRecommended.svg";
import softwareFrontRunners from "@/assets/components/ReviewBadge/softwareAdvice-frontRunners.svg";

const badges = {
  "capterra-score": {
    image: capterraScore,
    link: "https://www.capterra.com/reviews/164788/GAIN?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge",
    altText: "Capterra 4.7 stars Badge",
  },
  "capterra-best-value": {
    image: capterraBestValue,
    link: "https://www.capterra.com/p/164754/Gain/",
    altText: "Capterra Best Value 2022 Badge",
  },
  "capterra-ease-of-use": {
    image: capterraEaseOfUse,
    link: "https://www.capterra.com/p/164754/Gain/",
    altText: "Capterra Best Ease of Use 2022 Badge",
  },
  "capterra-short-list-2022": {
    image: capterraShortList,
    link: "https://www.capterra.com/p/164754/GAIN/",
    altText: "Capterra Shortlist 2022 Badge",
  },
  "getapp-score": {
    image: getAppScore,
    link: "https://www.getapp.com/marketing-software/a/gain/reviews/",
    altText: "GetApp 4.5 stars Badge",
  },
  "getapp-category-leaders": {
    image: getAppCategoryLeaders,
    link: "https://www.getapp.com/marketing-software/a/gain/",
    altText: "GetApp Category Leaders 2022 Badge",
  },
  "software-advice-score": {
    image: softwareAdviceScore,
    link: "https://softwareadvice.com/marketing/gain-profile/reviews/",
    altText: "SoftwareAdvice 4.7 Stars Badge",
  },
  "software-advice-best-support": {
    image: softwareAdviceBestSupport,
    link: "https://softwareadvice.com/marketing/gain-profile",
    altText: "SoftwareAdvice Best Customer Support 2022 Badge",
  },
  "software-advice-most-recommended": {
    image: softwareAdviceMostRecommended,
    link: "https://softwareadvice.com/marketing/gain-profile",
    altText: "SoftwareAdvice Most Recommended 2022 Badge",
  },
  "software-advice-front-runners": {
    image: softwareFrontRunners,
    link: "https://www.softwareadvice.com/marketing/gain-profile/",
    altText: "SoftwareAdvice Front Runners  Badge",
  },
} as const;

type ReviewBadgeProps = {
  badge: keyof typeof badges;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function ReviewBadge({ badge, className }: ReviewBadgeProps) {
  const currentBadge = badges[badge];

  return (
    <a
      href={currentBadge.link}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge("sm:w-[95px] md:w-[127px] lg:w-[160px]", className)}
    >
      <Image
        src={currentBadge.image}
        alt={currentBadge.altText}
        width={160}
        height={94}
        className="h-auto w-full"
      />
    </a>
  );
}
