import {
  CalendarRange,
  GraduationCap,
  HomeIcon,
  Info,
  UserRoundPen,
} from "lucide-react";
import {LinkType, QATYPE, SectionTwoType} from "./HypnoticTypes";
import {TfiWorld} from "react-icons/tfi";

const IconSize = 8;

export const quote = {
  description: (
    <>
      Every great dream begins with a dreamer. Always remember, you have within
      you the strength, the{" "}
      <span className=" px-2  border border-foreground mx-1 rounded-md">
        patience
      </span>
      , and the passion to reach for the stars to change the world.
    </>
  ),
  picture:
    "https://hxcqxvdpfctfywkxocdr.supabase.co/storage/v1/object/public/MyPics/264458597_448489896895215_5781428340992632480_n.jpg",
  whoSaid: "Bounader Med Rafik",
  Role: "Lame ass nigga",
};

export const Links: LinkType = [
  {
    title: "Home",
    icon: <HomeIcon size={IconSize} />,
    href: "/",
  },
  {
    title: "Advisory Board",
    icon: <GraduationCap size={IconSize} />,
    href: "/",
  },
  {
    title: "Membership",
    icon: <UserRoundPen size={IconSize} />,
    href: "/",
  },
  {
    title: "Events",
    icon: <CalendarRange size={IconSize} />,
    href: "/",
  },
  {
    title: "Team",
    icon: <TfiWorld size={IconSize} />,
    href: "/",
  },
  {
    title: "About us",
    icon: <Info size={IconSize} />,
    href: "/",
  },
];

export const SectionTwoData: SectionTwoType = [
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
  {
    title: "lorem ipsum gay niggaer",
    description:
      "lorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaerlorem ipsum gay niggaer",
    picture: "lorem ipsum gay niggaer",
  },
];

export const QADATA: QATYPE = [
  {
    question: "What is uvibe?",
    answer:
      "uvibe is an AI-powered personal stylist that helps you curate stylish outfits based on your preferences, body type, and occasion.",
  },
  {
    question: "How does uvibe work?",
    answer:
      "Simply provide information about your style preferences, body type, and occasion, and uvibe will suggest personalized outfit combinations.",
  },
  {
    question: "Is uvibe available on both web and mobile?",
    answer:
      "Yes, uvibe is available as both a web application and a mobile app, making it convenient to access anytime, anywhere.",
  },
  {
    question:
      "Can uvibe suggest outfits for specific occasions like weddings, parties, or casual outings?",
    answer:
      "Absolutely! uvibe can tailor outfit suggestions to various events, ensuring you always look your best.",
  },
  {
    question: "Can I save my favorite outfits or styles?",
    answer:
      "Yes, you can create a personal style board to save outfits you like and refer to them later.",
  },
  {
    question: "Does uvibe consider my budget when suggesting outfits?",
    answer:
      "You can set a budget preference within the app, and uvibe will provide outfit options that align with your financial constraints.",
  },
  {
    question:
      "Can I request specific items or brands to be included in my outfit suggestions?",
    answer:
      "Yes, you can input specific items or brands you prefer, and uvibe will incorporate them into your outfit recommendations.",
  },
  {
    question: "Is uvibe compatible with all devices and operating systems?",
    answer:
      "uvibe is designed to be compatible with most modern devices and operating systems.",
  },
  {
    question: "Does uvibe require an internet connection to function?",
    answer:
      "Yes, an internet connection is necessary to access uvibe's features and receive outfit suggestions.",
  },
  {
    question: "How often does uvibe update its outfit recommendations?",
    answer:
      "uvibe's algorithm is constantly evolving, so you can expect new and updated outfit suggestions over time.",
  },
  {
    question: "Can I provide feedback on uvibe's recommendations?",
    answer:
      "Yes, you can provide feedback on outfit suggestions to help improve uvibe's accuracy and personalization.",
  },
];
