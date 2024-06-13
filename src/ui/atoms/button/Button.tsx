import React, { lazy } from 'react'
import { BUTTON_VARIANT_TO_COMPONENT_MAPPING } from './constants';
import { ButtonProps } from './types';
const BaseButton = lazy(() => import("./Base"));

const Button = ({ variant, ...props }: ButtonProps) => {
  const ButtonComponent = BUTTON_VARIANT_TO_COMPONENT_MAPPING[variant]
    ? BUTTON_VARIANT_TO_COMPONENT_MAPPING[variant]
    : BaseButton;
  return (
    <React.Suspense fallback={null}>
      <ButtonComponent {...props} />
    </React.Suspense>
  )
}

export default Button