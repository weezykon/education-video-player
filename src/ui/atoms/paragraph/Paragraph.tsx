import * as React from "react";
import { ParagraphProps } from "./types";

// lazy load heading components
const Base = React.lazy(() => import("./Base"));

const Paragraph = (props: ParagraphProps) => {
  return (
    <React.Suspense fallback={<p>...</p>}>
      <Base {...props} />
    </React.Suspense>
  );
};

export default Paragraph;
