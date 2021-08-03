import React from 'react';

import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

export default function RankDashboard(props) {

  const { title, isPositive, items } = props;

  if ((typeof items !== 'undefined') && items.length>0) {
    items.sort((a, b) => { return b.value-a.value})
    items.length = 3;
  }

  const thumbsIcon = (isPositive ? <ThumbUpIcon className="text-green-800 w-6 h-6 "/> : <ThumbDownIcon className="text-red-800 w-6 h-6 "/>)

  return (
    <div className="py-1 px-8">
      <h1 className="text-s pb-1 px-2 italic font-medium text-gray-800" >{title}</h1>
      <div className="flex flex-col justify-center  border rounded-xl border-gray-400 bg-white">
        {((typeof items !== 'undefined') ? items.map( (item, index) => {
          return ( 
            <div key={index} className="flex flex-1 text-m py-1" >
					    <p className="flex-1 px-4 font-light text-gray-800">{item.name}</p>
              <div className="flex items-center text-xs px-4" >
                {item.value}
                <div className="px-2">{thumbsIcon}</div>
              </div>
				    </div> 
          )
        }):"")}
      </div>
    </div>
  )
}