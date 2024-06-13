import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const Primary = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-black focus:outline-none dark:focus:ring-grey-600 text-white ${props.disabled
          ? "bg-black/50 dark:hover:bg-black/50 focus:ring-black/50"
          : "hover:bg-black/90 focus:ring-black/50 dark:hover:bg-black/90"
        } ${className || ""}`}
    />
  )
}

export default Primary