import React from 'react'
import { CiGlobe } from "react-icons/ci";

const LanguageBox = () => {
  return (
    <div className="lang">
    <div className="box flex items-center gap-1">
      <CiGlobe className="text-xl text-white" />
      <h6 className="text-white">EN</h6>
      <svg
        className="-mr-1 h-5 w-5 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
  )
}

export default LanguageBox