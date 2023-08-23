import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { Text } from "@/components";

type BaseItem = {
  title: string;
  text: string;
  isNew?: boolean;
  details?: string;
};

type ImageItem = BaseItem & {
  type: "image";
  alt: string;
  image: StaticImageData | string;
};

type GridItem = ImageItem;

export type FeaturesGridProps = {
  items: GridItem[];
} & React.HTMLAttributes<HTMLDivElement>;

export function FeaturesGrid({ items, className, ...rest }: FeaturesGridProps) {
  return (
    <div
      className={twMerge(
        "mx-auto grid justify-center sm:max-w-[576px] sm:grid-cols-1 sm:gap-[32px_0px] md:max-w-[934px] md:grid-cols-3 md:gap-[64px_39px] lg:max-w-[1170px] lg:grid-cols-3 lg:gap-[96px_34px] xl:max-w-[1395px] xl:grid-cols-[repeat(3,_355px)] xl:gap-[96px_72px]",
        className,
      )}
      {...rest}
    >
      {items.map((item) => (
        <div key={item.title} className="text-left">
          <div role="button" className="relative">
            <Image
              src={item.image}
              alt={item.alt}
              width={600}
              height={497}
              className="h-auto w-full sm:mb-2 md:mb-3"
            />
            <div className="absolute bottom-[35px] right-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray91 opacity-0 transition-opacity"></div>
          </div>
          <Text>
            <strong>{item.title}</strong>
          </Text>
          <Text
            className="mt-2 sm:text-sm md:text-sm lg:text-base"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
          {item.details && (
            <Text className="mt-2 text-grayDark sm:text-sm md:text-sm lg:text-base">
              {item.details}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
}
