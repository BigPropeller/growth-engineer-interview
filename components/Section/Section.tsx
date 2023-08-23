import { Container, type ContainerProps, Divider } from "@/components";

type SectionProps = {
  hasDivider?: boolean;
  hasSpacer?: boolean;
  backgroundColor?: string;
} & ContainerProps;

export function Section({
  hasDivider = false,
  hasSpacer = false,
  backgroundColor = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section>
      <Container>
        <div className={`-mx-4 rounded-md ${backgroundColor}`}>
          <Container className="sm:py-6 md:py-6 lg:py-7" {...rest}>
            {children}
          </Container>
          {hasDivider && <Divider />}
        </div>
        {hasSpacer && <div className="sm:py-2 md:py-3 lg:py-4" />}
      </Container>
    </section>
  );
}
