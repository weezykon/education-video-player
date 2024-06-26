import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const Secondary = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-white border focus:outline-none dark:focus:ring-gray-600 ${
        props.disabled ? "bg-white/30 dark:hover:bg-white/10 focus:ring-white/10 text-gray-900 border-gray-20" : "hover:bg-white/80 focus:ring-white/50 dark:hover:bg-white/900 text-black border-gray-900"
      } ${
        className || ""
      }`}
    />
  )
}

export default Secondary