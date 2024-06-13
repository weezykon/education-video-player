import * as React from "react";
import { HeadingProps } from "./types";

// lazy load heading components
const Base = React.lazy(() => import("./Base"));

const Heading = (props: HeadingProps) => {
  return (
    <React.Suspense fallback={<>...</>}>
      <Base {...props} />
    </React.Suspense>
  );
};

export default Heading;
