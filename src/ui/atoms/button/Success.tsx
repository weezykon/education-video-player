import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const Success = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-green-25 focus:outline-none dark:focus:ring-green-25 text-green-700 ${props.disabled
          ? "bg-green-25/50 dark:hover:bg-green-25/50 focus:ring-green-25/50"
          : "hover:bg-green-100/90 focus:ring-green-100/50 dark:hover:bg-green-100/90"
        } ${className || ""}`}
    />
  )
}

export default Success