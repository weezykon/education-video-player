import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const Light = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-gray-50 hover:bg-red-100/90 focus:outline-none focus:ring-gray-100/50 dark:hover:bg-gray-100/90 dark:focus:ring-gray-100 text-black ${
        props.disabled ? "bg-gray-100/50 dark:hover:bg-gray-100/50 focus:ring-gray-100/50" : ""
      } ${
        className || ""
      }`}
    />
  )
}

export default Light