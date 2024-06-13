import React from "react";
import { ParagraphShimmerProps } from "./types";
import { PARAGRAPH_SHIMMER_SIZES } from "./constants";

const ParagraphShimmer = ({ size }: ParagraphShimmerProps) => {
  const widthClass = PARAGRAPH_SHIMMER_SIZES[size];
  return <div className={`h-[5px] w-${widthClass} bg-slate-300 rounded`}></div>;
};

export default ParagraphShimmer;
