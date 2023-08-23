import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  Container,
  Divider,
  ReviewBadge,
  Text,
  type TextProps,
} from "@/components";

import gainPurpleLogoImage from "@/assets/gain-purple-logo.svg";

export function Footer() {
  return <FooterDesktop />;
}

function FooterDesktop() {
  return (
    <footer className="sm:hidden md:block">
      <Container className="pb-0 sm:px-0 sm:pt-6 md:px-0 md:pt-6 lg:px-3 lg:pt-7">
        <div className="flex items-center justify-between">
          <ReviewBadge
            badge="capterra-short-list-2022"
            className="sm:w-[89px] md:w-[89px] lg:w-[113px] xl:w-[133px]"
          />
          <ReviewBadge
            badge="capterra-best-value"
            className="sm:w-[89px] md:w-[89px] lg:w-[113px] xl:w-[133px]"
          />
          <ReviewBadge
            badge="capterra-ease-of-use"
            className="sm:w-[89px] md:w-[89px] lg:w-[113px] xl:w-[133px]"
          />
          <ReviewBadge
            badge="getapp-category-leaders"
            className="sm:w-[89px] md:w-[89px] lg:w-[113px] xl:w-[133px]"
          />
          <ReviewBadge
            badge="software-advice-best-support"
            className="sm:w-[89px] md:w-[89px] lg:w-[113px] xl:w-[133px]"
          />
          <ReviewBadge
            badge="software-advice-most-recommended"
            className="sm:w-[89px] md:w-[89px] lg:w-[113px] xl:w-[133px]"
          />
          <ReviewBadge
            badge="software-advice-front-runners"
            className="sm:w-[89px] md:w-[89px] lg:w-[113px] xl:w-[133px]"
          />
        </div>
      </Container>
      <Container className="pb-5 sm:px-0 sm:pt-6 md:px-0 md:pt-6 lg:px-3 lg:pt-6">
        <nav className="relative items-start justify-around text-sm sm:block md:flex">
          <FooterList className="mx-0 sm:w-[237px] md:w-[152px] lg:w-[192px] xl:w-[213px]">
            <FooterLogo />
          </FooterList>
          <FooterContent />
        </nav>
      </Container>
      <Divider />
      <Container className="flex items-center justify-between pb-6 sm:pt-4 md:pt-5">
        <div className="text-center text-grayDark sm:text-sm md:text-sm">
          © {new Date().getFullYear()}. Gain is a product of Big Propeller,
          LLC.
        </div>
        <SocialNetworks />
      </Container>
    </footer>
  );
}

function FooterMobile() {
  return (
    <footer className="py-6 sm:block md:hidden">
      <Container>
        <div className="grid grid-cols-[repeat(3,_76px)] justify-center gap-1">
          <ReviewBadge
            badge="capterra-short-list-2022"
            className="max-w-full"
          />
          <ReviewBadge badge="getapp-category-leaders" className="max-w-full" />
          <ReviewBadge
            badge="software-advice-front-runners"
            className="max-w-full"
          />
        </div>
        <div className="grid grid-cols-[repeat(4,_76px)] justify-center gap-1">
          <ReviewBadge badge="capterra-best-value" className="max-w-full" />
          <ReviewBadge badge="capterra-ease-of-use" className="max-w-full" />
          <ReviewBadge
            badge="software-advice-best-support"
            className="max-w-full"
          />
          <ReviewBadge
            badge="software-advice-most-recommended"
            className="max-w-full"
          />
        </div>
      </Container>
      <Container className="pt-6">
        <nav className="flex justify-between">
          <FooterLogo />
          <div>
            <FooterContent />
          </div>
        </nav>
        <SocialNetworks className="mx-auto" />
      </Container>
      <Divider />
      <div className="mt-4 text-center text-sm text-grayDark">
        © {new Date().getFullYear()}. Gain is a product of Big Propeller, LLC.
      </div>
    </footer>
  );
}

function FooterList({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge("mx-auto sm:mb-4 md:mb-0", className)} {...rest} />
  );
}

function FooterLogo() {
  return (
    <Image
      src={gainPurpleLogoImage}
      alt="Gain Logo"
      width={54}
      height={54}
      className="sm:h-[40px] sm:w-[40px] md:h-[54px] md:w-[54px]"
    />
  );
}

function FooterContent() {
  return (
    <>
      <FooterList className="sm:w-[237px] md:w-[152px] lg:w-[192px] xl:w-[213px]">
        <Title>Product</Title>
        <Item href="/features/creating-uploading-importing/">
          Creating, Uploading and Importing
        </Item>
        <Item href="/features/managing/">Managing</Item>
        <Item href="/features/collaborating/">Collaborating</Item>
        <Item href="/features/approving/">Approving</Item>
        <Item href="/product-tour/">Product Tour</Item>
        <Item href="/pricing/">Pricing</Item>
        <Item href="/security/">Security</Item>
        <Item href="/about-us/">About Us</Item>
      </FooterList>
      <FooterList className="sm:w-[237px] md:w-[125px] lg:w-[158px] xl:w-[165px]">
        <Title>Integrations</Title>
        <Item href="/facebook/">Facebook</Item>
        <Item href="/instagram/">Instagram</Item>
        <Item href="/twitter/">Twitter</Item>
        <Item href="/linkedin/">LinkedIn</Item>
        <Item href="/tiktok/">TikTok</Item>
        <Item href="/google-business-profile/">Google Business Profile</Item>
      </FooterList>
      <FooterList className="sm:w-[237px] md:w-[152px] lg:w-[163px] xl:w-[219px]">
        <Title>Resources</Title>
        <Item href="/agency-partners/">Agency Partners</Item>
        <Item href="/integrations/canva/">Gain + Canva</Item>
        <Item href="/download/">Desktop App</Item>
        <Item href="/customers/">Customer Stories</Item>
        <Item href="/ebook-guide/">
          E-book: Streamlining Your Team&apos;s Workflow
        </Item>
        <Item href="/ebook-client-onboarding/">
          E-book: How To Onboard New Marketing Clients
        </Item>
        <Item href="https://blog.gainapp.com/?utm_source=www&utm_medium=referral&utm_content=footer">
          Blog
        </Item>
      </FooterList>
      <FooterList className="sm:w-[237px] md:w-[152px] lg:w-[192px] xl:w-[219px]">
        <Title>Fine Print</Title>
        <Item href="/terms/">Terms of Service</Item>
        <Item href="/privacy/">Privacy Policy</Item>

        <Title className="mt-4">Support</Title>
        <Item href="https://help.gainapp.com/?utm_source=www&utm_medium=referral&utm_content=footer">
          Help Center
        </Item>
        <Item href="https://status.gainapp.com">Status</Item>
        <Item href="mailto:support@gainapp.com">support@gainapp.com</Item>
      </FooterList>
    </>
  );
}

function Title({ className, ...rest }: TextProps) {
  return (
    <Text
      className={twMerge("md:text-md mb-1 font-bold sm:text-sm", className)}
      {...rest}
    />
  );
}

function Item(props: React.PropsWithChildren<LinkProps>) {
  return (
    <Link
      className="mb-1 block text-grayDark last-of-type:mb-0 hover:text-magenta sm:text-sm md:text-sm"
      {...props}
    />
  );
}

function SocialNetworks({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "flex w-[230px] items-center justify-around",
        className,
      )}
      {...rest}
    >
      <SocialItem href="https://twitter.com/gainapp" aria-label="Twitter">
        <FaTwitter />
      </SocialItem>
      <SocialItem href="https://www.facebook.com/gainapp" aria-label="Facebook">
        <FaFacebook />
      </SocialItem>
      <SocialItem
        href="https://www.instagram.com/gainapp/"
        aria-label="Instagram"
      >
        <FaInstagram />
      </SocialItem>
      <SocialItem
        href="https://www.linkedin.com/company/gain-app/"
        aria-label="Linkedin"
      >
        <FaLinkedinIn />
      </SocialItem>
      <SocialItem href="https://www.youtube.com/gainapp/" aria-label="Youtube">
        <FaYoutube />
      </SocialItem>
    </div>
  );
}

function SocialItem(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href=""
      className="mb-3 block text-[20px]"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
