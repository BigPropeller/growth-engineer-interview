import { twMerge } from "tailwind-merge";

export type TextProps = React.HTMLAttributes<HTMLDivElement>;

export function Text({ className, children, ...rest }: TextProps) {
  return (
    <div
      className={twMerge("sm:text-sm md:text-sm lg:text-base", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
