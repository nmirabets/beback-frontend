import React from 'react';

import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

export default function SummaryDashboard(props) {

  return (
    <>
      <div className="flex flex-row items-center justify-center mx-12 py-3 my-2 border rounded-xl border-gray-400 bg-white">
        <h2 className="text-s  px-2">{props.pos}</h2> 
        <ThumbUpIcon className="text-green-800 w-10 h-10 "/>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl  px-10">{props.pos+props.neg}</h2>
          <p className="text-xs font-thin">reacciones</p>
        </div>
        <ThumbDownIcon className="text-red-800 w-10 h-10 "/>
        <h2 className="text-s  px-2">{props.neg}</h2> 
      </div>
    </>
  )
}