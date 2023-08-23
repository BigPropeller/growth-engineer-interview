import { useState, useEffect } from "react";
import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container, Divider, Text } from "@/components";

import gainLogo from "@/assets/gain-logo.svg";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setHasScrolled(window.scrollY >= 1);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-50 transition-[box-shadow,_background] ${
        hasScrolled ? "bg-white shadow-md" : "bg-transparent shadow-[none]"
      }`}
    >
      <AnnouncementBanner />
      <Container>
        <menu className="m-0 flex h-[65px] items-center justify-between px-0">
          <div className=" flex h-full items-center">
            <Link href="/">
              <Image
                src={gainLogo}
                alt="Gain Logo"
                width={76}
                height={30}
                priority
              />
            </Link>
            <div className="h-full items-center sm:ml-2 sm:hidden  md:ml-2 md:flex lg:ml-5">
              <Item>
                <NavLink href="/">Product</NavLink>
              </Item>
              <Item>
                <NavLink href="/">Product Tour</NavLink>
              </Item>
              <Item>
                <NavLink href="/">Customer Stories</NavLink>
              </Item>
              <Item>
                <NavLink href="/">Pricing</NavLink>
              </Item>
              <Item>
                <NavLink href="/">Resources</NavLink>
              </Item>
            </div>
          </div>
          <div className="py-[15px] sm:block md:hidden">
            <button
              aria-label="menu"
              className="text-3 cursor-pointer border-0 bg-[transparent] p-1  outline-none"
            >
              <FaBars />
            </button>
          </div>
          <div className="h-full items-center sm:hidden md:flex">
            <Item>
              <a
                href="https://manage.gainapp.com"
                className="inline-block h-full font-bold leading-[65px] text-magenta"
              >
                Log in
              </a>
            </Item>
            <Item className="flex items-center">
              <a
                href="https://manage.gainapp.com/signup/"
                className="sm:text-2 md:text-2 lg:text-3 block cursor-pointer rounded-3xl bg-magenta px-3 py-1 font-bold text-white"
              >
                Try It Free
              </a>
            </Item>
          </div>
        </menu>
        <Divider />
      </Container>
    </header>
  );
}

function AnnouncementBanner() {
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  if (hasBeenSeen) return null;

  return (
    <div className="relative bg-greenLight py-[12px] text-center">
      <Container>
        <Text>
          ✨ <strong>New!</strong> Publish to Google Business Profile and plan
          your Instagram grid. 📸
        </Text>
      </Container>
      <button
        aria-label="close announcement banner"
        onClick={() => setHasBeenSeen(true)}
        className="absolute right-2 top-2 cursor-pointer border-0 bg-transparent text-lg text-purpleDark outline-none"
      >
        <FaTimes />
      </button>
    </div>
  );
}

function Item(
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
) {
  return (
    <div
      className="h-full last-of-type:mr-0 sm:mr-2 sm:text-sm md:mr-2 md:text-sm lg:mr-3 lg:text-base"
      {...props}
    />
  );
}

function NavLink(props: React.PropsWithChildren<LinkProps>) {
  return (
    <Link
      className="inline-block h-full leading-[65px] text-purpleDark hover:text-magenta"
      {...props}
    />
  );
}
