import { twMerge } from "tailwind-merge";

export type ContainerProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div
      className={twMerge(
        "mx-auto px-3 sm:max-w-[326px] sm:px-0 md:max-w-[817px] lg:max-w-[1122px] xl:max-w-[1440px]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
