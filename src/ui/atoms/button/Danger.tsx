import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const Danger = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-red-600 hover:bg-red-900/90 focus:outline-none focus:ring-red-900/50 dark:hover:bg-red-900/90 dark:focus:ring-red-900 text-white ${
        props.disabled ? "bg-red-900/50 dark:hover:bg-red-900/50 focus:ring-red-900/50" : ""
      } ${
        className || ""
      }`}
    />
  )
}

export default Danger