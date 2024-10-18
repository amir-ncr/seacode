import {
  CalendarRange,
  GraduationCap,
  HomeIcon,
  Info,
  UserRoundPen,
} from "lucide-react";
import {LinkType} from "./HypnoticTypes";
import {TfiWorld} from "react-icons/tfi";

const IconSize = 8;

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
