import React from 'react'
import BaseButton from './Base'
import { BaseButtonProps } from './types'

const IconButton = (props: BaseButtonProps) => {
  const className = props.className ? props.className : "";
  return (
    <BaseButton
      {...props}
      className={`bg-white border border-gray-100 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 text-gray-500 dark:text-gray-300 ${
        props.disabled ? "bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700/90 focus:ring-gray-200 dark:focus:ring-gray-700" : ""
      } ${
        className || ""
      }`}
    >
      {props.children}
    </BaseButton>
  )
}

export default IconButton