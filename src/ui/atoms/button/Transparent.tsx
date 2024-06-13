import React from 'react'
import BaseButton from './Base';
import { BaseButtonProps } from './types';

const Transparent = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-transparent hover:text-black/50 focus:outline-none focus:ring-transparent/50 dark:hover:bg-transparent/90 dark:focus:ring-grey-600 ${props.disabled
          ? "text-grey-400 bg-transparent/30 dark:hover:bg-transparent/30 focus:ring-transparent/30" : ""
      } ${
        className || ""
      }`}
    />
  )
}

export default Transparent