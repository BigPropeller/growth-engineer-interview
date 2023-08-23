import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaGoogle,
} from "react-icons/fa";
import {
  Layout,
  Section,
  Text,
  FeaturesGrid,
  type FeaturesGridProps,
} from "@/components";
import { getRandomClients } from "@/utils";

import box from "@/assets/box.svg";
import canva from "@/assets/canva.svg";
import dropbox from "@/assets/dropbox.svg";
import gdrive from "@/assets/gdrive.svg";
import onedrive from "@/assets/onedrive.svg";

import formats from "@/assets/formats.png";
import imageEditor from "@/assets/imageEditor.png";
import autoPublish from "@/assets/autoPublish.png";
import mentions from "@/assets/mentions.png";
import targeting from "@/assets/targeting.png";
import adMockups from "@/assets/adMockups.png";
import altText from "@/assets/altText.png";

const importSources = [
  { image: canva, altText: "Canva logo" },
  { image: box, altText: "Box logo" },
  { image: onedrive, altText: "OneDrive logo" },
  { image: dropbox, altText: "Dropbox logo" },
  { image: gdrive, altText: "Google Drive logo" },
];

const gridItems: FeaturesGridProps["items"] = [
  {
    type: "image",
    title: "Create and preview Facebook posts",
    text: "A dynamic editor shows you exactly how your <strong>Facebook photo, video, status, carousel posts,</strong> and <strong>Stories</strong> will look on desktop and mobile feeds.",
    image: formats,
    alt: "A preview of a Facebook post and a list of post types, in which Photo is selected.",
  },
  {
    type: "image",
    title: "Crop or add filters",
    text: "Uploaded a pic with the wrong aspect ratio? Easy fix. Gain has a built-in image editor with <strong>cropping presets for Facebook.</strong>",
    image: imageEditor,
    alt: "A photo of a woman at a restaurant with image editing tools on it.",
  },
  {
    type: "image",
    title: "Schedule and auto-publish",
    text: "After approval, your Facebook posts will be <strong>scheduled and published automatically.</strong> Use the Gain Notify mobile app to manually publish Facebook Stories.",
    image: autoPublish,
    alt: "A preview of a Facebook social post with a list of activities detailing who created it, who approved it, and when it was published.",
  },
  {
    type: "image",
    title: "Mention other Facebook Pages and include hashtags",
    text: "Posts created in Gain can include <strong>mentions</strong> and <strong>hashtags</strong> before getting published.",
    image: mentions,
    alt: "A preview of a Facebook social post as it's being created and a business Facebook page is being mentioned in the caption.",
  },
  {
    type: "image",
    title: "Use Facebook Audience Targeting",
    text: "Add <strong>audience targeting</strong> settings to your Facebook posts in Gain so your clients can see it together with the content.",
    image: targeting,
    alt: "A screenshot of the audience targeting settings for a Facebook social post.",
  },
  {
    type: "image",
    title: "Share Facebook Ad Mockups for approval",
    text: "Create <strong>mockups of Facebook ads</strong> in Gain and send them to your clients for approval along with all your organic posts.",
    image: adMockups,
    alt: "A preview of a Facebook ad with a menu of ad formats.",
  },
  {
    type: "image",
    title: "Alt Text",
    text: "Add alternative text to your Facebook image posts to meet accessibility standards and provide search engines with contextual information about your content.",
    image: altText,
    alt: "A social post in Gain with a field to type alternate text",
    isNew: true,
  },
];

const navItems = [
  {
    href: "/facebook/",
    socialNetwork: "facebook",
    iconColor: "text-facebook",
    text: "Facebook",
    Icon: FaFacebook,
  },
  {
    href: "/instagram/",
    socialNetwork: "instagram",
    iconColor: "text-instagram",
    text: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "/twitter/",
    socialNetwork: "twitter",
    iconColor: "text-twitter",
    text: "Twitter",
    Icon: FaTwitter,
  },
  {
    href: "/linkedin/",
    socialNetwork: "linkedin",
    iconColor: "text-linkedin",
    text: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "/tiktok/",
    socialNetwork: "tiktok",
    iconColor: "text-tiktok",
    text: "TikTok",
    Icon: FaTiktok,
  },
  {
    href: "/google-business-profile/",
    socialNetwork: "googleBusinessProfile",
    iconColor: "text-google",
    text: "Business Profile",
    Icon: FaGoogle,
  },
];

export function getServerSideProps() {
  const clients = getRandomClients(3);

  return {
    props: {
      clients,
    },
  };
}

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Home({ clients }: PageProps) {
  return (
    <Layout
      title="Gain: The Facebook tool for teams and their clients"
      description="Gain automates your entire Facebook workflow to get your content approved and published fast."
      ogImage="/sharing-facebook.png"
    >
      <div className="overflow-hidden">
        <Section>
          <div className="relative sm:block md:flex">
            <div className="sm:mr-0 sm:text-center md:mr-3 md:text-left">
              <img
                src="/gain-plus-facebook.png"
                width={157}
                className="sm:mx-auto sm:w-[118px] md:mx-0 md:w-[157px]"
              />
              <img
                src="/hero.png"
                width={600}
                className="mt-2 h-auto w-full sm:block md:hidden"
              />

              <h1 className="mt-4 font-serif font-bold sm:w-full sm:text-3xl md:w-[581px] md:text-5xl lg:w-[581px] lg:text-6xl xl:w-[582px]">
                The Facebook publishing tool made{" "}
                <span className="text-aqua">
                  for agencies and their clients
                </span>
              </h1>

              <div className="mt-5">
                <button
                  onClick={() => {
                    window.location.href = "https://manage.gainapp.com/signup/";
                  }}
                  className="sm:text-2 md:text-2 lg:text-3 w-full max-w-[323px] cursor-pointer rounded-3xl bg-magenta p-[12px] text-center font-bold text-white"
                >
                  Get started free
                </button>
              </div>
              <div className="max-w-[338px]">
                <div className="flex items-center sm:mt-5 md:mt-5 lg:mt-6">
                  <Text className="sm:text-sm md:text-sm lg:text-sm">
                    Trusted by
                  </Text>
                  <div className="flex sm:justify-between">
                    {clients.map((client) => (
                      <Image
                        key={client.imageAlt}
                        src={client.image}
                        alt={client.imageAlt}
                        width={106}
                        height={60}
                        className="w-full sm:max-h-[48px] sm:max-w-[84px] md:max-h-[48px] md:max-w-[84px] lg:max-h-[60px] lg:max-w-[106px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[43%] sm:hidden md:block">
              <div className="relative overflow-hidden sm:min-w-[515px] md:min-w-[515px] lg:min-w-[767px]">
                <img src="/hero.png" width={767} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section className="sm:py-2 md:py-4" backgroundColor="bg-grayLight">
        <div className="justify-center sm:hidden md:flex">
          {navItems.map((item) => (
            <div
              key={item.text}
              className="flex last-of-type:mr-0 sm:mr-1 md:mr-1 lg:mr-3 xl:mr-4"
            >
              <Link
                href={item.href}
                className="flex items-center rounded-2xl py-[4px] font-bold hover:bg-gray94 hover:text-purpleDark sm:px-[12px] md:px-[12px] lg:py-2 xl:py-3"
              >
                <item.Icon className={`mr-1 ${item.iconColor}`} />
                <Text className="sm:text-0 md:text-0 md:text-2 font-serif font-bold">
                  {item.text}
                </Text>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section hasDivider>
        <Text className="lg:text-1 text-center font-bold uppercase text-aqua sm:text-sm md:text-sm">
          Create and publish
        </Text>
        <h2 className="mx-auto text-center font-serif font-bold sm:mt-4 sm:max-w-full sm:text-2xl md:mt-2 md:max-w-[617px] md:text-3xl lg:max-w-[786px] lg:text-4xl">
          Everything you need to create, schedule, and publish all your Facebook
          posts.
        </h2>
        <h3 className="text-center sm:mt-5 sm:text-sm md:mt-6 md:text-sm lg:text-base">
          Import your Facebook designs from
        </h3>
        <div className="mt-2 flex justify-center">
          {importSources.map((source) => (
            <Image
              key={source.altText}
              src={source.image}
              alt={source.altText}
              width={51}
              height={34}
              className="mr-2 h-auto last-of-type:mr-0 sm:w-[40px] md:w-[40px] lg:w-[51px]"
            />
          ))}
        </div>
        <FeaturesGrid items={gridItems} className="sm:mt-4 md:mt-6" />
      </Section>
    </Layout>
  );
}
