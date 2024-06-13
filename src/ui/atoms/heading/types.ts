import { CSSProperties } from "react";
import { FontSize, FontWeight } from "../utils/types";

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  variant: keyof typeof HeadingVariants;
  size?: keyof typeof FontSize;
  color?: string;
  weight?: keyof typeof FontWeight;
  style?: CSSProperties;
}

export enum HeadingVariants {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
};
