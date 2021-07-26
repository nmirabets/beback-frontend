import React from 'react';

import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

export default function SummaryDashboard(props) {

  return (
    <>
      <div className="flex flex-col items-center justify-around mx-20 py-2 my-2 border rounded-xl border-gray-400 bg-white">
        {props.items.map( (item, index ) => {
          return (
            <div key={index} className="flex flex-1 items-center">
              <div className="flex flex-row items-center">
                <h2 className="text-xs px-2">{item.reactions.pos}</h2> 
                <ThumbUpIcon className="text-green-800 w-4 h-4 "/>
              </div>
                <h2 className="text-s flex justify-center font-thin w-24">{item.name}</h2>
              <div className="flex flex-row items-center">
                <ThumbDownIcon className="text-red-800 w-4 h-4 "/>
                <h2 className="text-xs px-2">{item.reactions.neg}</h2> 
              </div>
            </div>
          )
        })}

      </div>
    </>

  )
}