import React from 'react'

const ButtonShimmer = () => {
  return (
    <button
      className="inline-flex items-center justify-center px-4 py-2 space-x-2 text-sm font-medium text-grey-300 bg-grey-200 border border-grey-300 rounded-md animate-pulse"
      disabled
    >
      <span className="h-3 w-12 bg-grey-300 rounded"></span>
      <span className="h-4 w-16 bg-grey-300 rounded"></span>
    </button>
  )
}

export default ButtonShimmer