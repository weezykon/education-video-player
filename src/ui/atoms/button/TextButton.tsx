import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const TextButton = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-transparent focus:outline-none hover:border-0 w-auto ${props.disabled
          ? "text-grey-900 focus:ring-transparent/50"
          : "text-black focus:ring-transparent/50"
      } ${
        className || ""
      }`}
    />
  )
}

export default TextButton