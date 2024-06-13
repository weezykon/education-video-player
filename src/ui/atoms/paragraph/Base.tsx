import React from 'react';
import { ParagraphProps } from './types';
import { FontSize, FontWeight } from '../utils/types';
import { getFontSize, getFontWeight } from '../utils/utils';

const Paragraph: React.FC<ParagraphProps> = ({ children, size = FontSize.b4, weight = FontWeight.normal, className, color }) => {
  return (
    <p className={`antialiased whitespace-normal ${getFontSize(size)} ${getFontWeight(weight)} ${className}`} style={{ color: color || 'text-grey-400' }}>{children}</p>
  );
};

export default Paragraph;