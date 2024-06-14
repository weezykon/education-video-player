import React from 'react'
import { FontSize, FontWeight } from '../utils/types';
import { getFontSize, getFontWeight } from '../utils/utils';
import { HeadingProps } from './types'
import { COLORS } from 'constants/colors';

const Base: React.FC<HeadingProps> = ({ children, variant, size = FontSize.h11, weight = FontWeight.normal, className, color }) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;
  return <Tag className={`antialiased whitespace-normal ${getFontSize(size)} ${getFontWeight(weight)} ${className}`} style={{ color: color || COLORS.GRAY[800] }}>{children}</Tag>;
}

export default Base