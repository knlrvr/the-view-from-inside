import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 py-12 border-t-2 border-b-2 border-black">
        <div className="flex justify-center items-center">
          <div className="w-48 h-48 bg-gray-200 mb-10 md:mb-0 rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-2 justify-center">
          <h6 className="text-3xl tracking-widest">Hi, I'm Sarah!</h6>
          <p className="text-lg tracking-widest">
            Justo laoreet sit amet cursus. At tempor commodo ullamcorper a lacus.
          </p>
          <p className="font-thin">
            Sed sed risus pretium quam vulputate. In nulla posuere sollicitudin 
            aliquam ultrices sagittis orci a scelerisque. Tincidunt nunc 
            pulvinar sapien et ligula ullamcorper malesuada proin libero. 
          </p>
        </div>
      </div>
    </>
  )
}