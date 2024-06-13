import { FontSize, FontWeight } from "../utils/types";
import { PARAGRAPH_SHIMMER_SIZES } from "./constants";

export interface ParagraphProps {
  size?: keyof typeof FontSize;
  weight? : keyof typeof FontWeight;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export interface ParagraphShimmerProps {
  size: keyof typeof PARAGRAPH_SHIMMER_SIZES;
}