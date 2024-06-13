import React from 'react'
import { FontSize, FontWeight } from '../utils/types';
import { getFontSize, getFontWeight } from '../utils/utils';
import { BaseButtonProps, ButtonSizes, ButtonRounded } from './types';

const BaseButton = ({ fontSize = FontSize.b6, size = ButtonSizes.md, type, children, disabled, loading, className, rounded = ButtonRounded.none, fontWeight = FontWeight.normal, onClick }: BaseButtonProps) => {
  const sizes = {
    [ButtonSizes.none]: 'p-0',
    [ButtonSizes.square]: 'p-3',
    [ButtonSizes.xs]: 'px-2 py-1',
    [ButtonSizes.sm]: 'px-3 md:px-4 py-2.5',
    [ButtonSizes.md]: 'px-8 md:px-12 py-3 md:py-4',
    [ButtonSizes.lg]: 'w-full py-2.5 md:py-4',
  }

  const borderRadius = {
    [ButtonRounded.none]: '',
    [ButtonRounded.sm]: 'rounded-sm',
    [ButtonRounded.md]: 'rounded-lg',
    [ButtonRounded.lg]: 'rounded-full',
  }

  return (
    <button
      type={type || 'submit'}
      disabled={disabled}
      className={`flex antialiased whitespace-normal items-center justify-center gap-2 tracking-wide ${getFontSize(fontSize)} ${sizes[size]} ${borderRadius[rounded]} ${getFontWeight(fontWeight)}
      ${disabled ? 'cursor-not-allowed' : ''}
      ${disabled && !loading ? 'opacity-50' : ''}
      ${loading ? 'relative' : ''}
      ${className || ''}`}
      onClick={onClick}
    >
      {loading ? (
        <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-5 w-5"></div>
      )
        : null}
      {children}
    </button>
  )
}

export default BaseButton;