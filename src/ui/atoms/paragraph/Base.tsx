import React from 'react';
import { ParagraphProps } from './types';
import { FontSize, FontWeight } from '../utils/types';
import { getFontSize, getFontWeight } from '../utils/utils';
import { COLORS } from 'constants/colors';

const Paragraph: React.FC<ParagraphProps> = ({ children, size = FontSize.b4, weight = FontWeight.normal, className, color }) => {
  return (
    <p className={`antialiased whitespace-normal ${getFontSize(size)} ${getFontWeight(weight)} ${className}`} style={{ color: color || COLORS.GRAY[800] }}>{children}</p>
  );
};

export default Paragraph;