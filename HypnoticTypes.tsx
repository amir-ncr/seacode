import {ReactNode} from "react";

export type LinkType = {
  title: string;
  icon: ReactNode;
  href: string;
}[];

export type SectionTwoType = {
  title: string;
  description: string;
  picture: string;
}[];

export type QATYPE = {
  question: string;
  answer: string | ReactNode;
}[];
