import { MouseEvent } from "react";
import { FontSize, FontWeight } from "../utils/types";

export interface BaseButtonProps {
  children: React.ReactNode;
  size?: keyof typeof ButtonSizes;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  rounded?: keyof typeof ButtonRounded;
  fontSize?: keyof typeof FontSize;
  fontWeight?: keyof typeof FontWeight;
}

export type ButtonProps = BaseButtonProps & {
  variant: keyof typeof ButtonVariants;
}

export enum ButtonSizes {
  none = 'none',
  square = 'square',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum ButtonRounded {
  none = 'none',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum ButtonVariants {
  primary = 'primary',
  success = 'success',
  secondary = 'secondary',
  transparent = 'transparent',
  danger = 'danger',
  text = 'text',
  icon = 'icon',
  light = 'light',
}