import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const Light = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-grey-50 hover:bg-red-100/90 focus:outline-none focus:ring-grey-100/50 dark:hover:bg-grey-100/90 dark:focus:ring-grey-100 text-black ${
        props.disabled ? "bg-grey-100/50 dark:hover:bg-grey-100/50 focus:ring-grey-100/50" : ""
      } ${
        className || ""
      }`}
    />
  )
}

export default Light