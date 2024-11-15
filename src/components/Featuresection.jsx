import React from 'react'
import { features } from '../constants'

const Featuresection = () => {
  return (
   <div className="mt-10 border-b border-neutral-800 relative min-h-[800px]">
    <div className="text-center">
        <span className='bg-neutral-900 text-orange-500 rounded-full
        h-6 text-sm font-medium px-2 py-1 uppercase'>Feature</span>
        <h2 className='mt-10 lg:mt-20 text-3xl sm:text-5xl lg:text-6xl'>Easily build&nbsp;
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>your code</span></h2>
    </div>
    <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature,key)=>(
            <div key={key} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
                <div className="flex mx-6 justify-center items-center bg-neutral-900 rounded-full size-10 text-orange-700">
                    {feature.icon}
                </div>
                <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className='text-md text-neutral-500 mb-20 p-2'>{feature.description}</p>
                </div>
            </div>
            </div>
        ))}
    </div>
   </div>
 
  )
}

export default Featuresection