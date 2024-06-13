import * as React from "react";
const IconButton = React.lazy(() => import("./Icon"));
const TextButton = React.lazy(() => import("./TextButton"));
const BaseButton = React.lazy(() => import("./Base"));
const PrimaryButton = React.lazy(() => import("./Primary"));
const SuccessButton = React.lazy(() => import("./Success"));
const SecondaryButton = React.lazy(() => import("./Secondary"));
const DangerButton = React.lazy(() => import("./Danger"));
const TransparentButton = React.lazy(() => import("./Transparent"));
const LightButton = React.lazy(() => import("./Light"));

export const BUTTON_VARIANT_TO_COMPONENT_MAPPING = {
  base: BaseButton,
  primary: PrimaryButton,
  success: SuccessButton,
  secondary: SecondaryButton,
  danger: DangerButton,
  transparent: TransparentButton,
  text: TextButton,
  icon: IconButton,
  light: LightButton,
} as const;
