import React from 'react'
import Image from 'next/image'

import { Reveal } from './utils/reveal'

export default function About() {
  return (
    <>
      <Reveal>
        <div id="about" className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 py-12 border-t border-b border-[#222] mx-4">
          <div className="flex justify-center items-center">
            <div className="w-48 h-48 bg-gray-200 mb-10 md:mb-0 rounded-full"></div>
          </div>
          <div className="flex flex-col space-y-2 justify-center">
            <h6 className="text-3xl tracking-wider">Hello!</h6>
            <p className="font-light">
              <span className="font-medium">Sarah Tony&nbsp;</span> 
              is a writer of melancholic and perplexting topics, focusing on mental health
              in many of her works. She electrifies her readers with her frequent one-liner, short
              story endings that paint her as a somewhat twisted but enlightended author. 
              Though her short stories focus more on serious topics, her work as a novelist
              follows a more upbeat sensation, focusing on worlds yet imagined and characters
              to tug on your heart. 
              <br /><br />
              She is currently working toward a Creative Writing degree at SNHU and pursuing a career 
              as a novelist and screenwriter. She is a current member of The International 
              English Honors Society Sigma Tau Delta and SNHU's The Penmen Review. At home,
              she enjoys spending time with her friends and family and frequently indulging
              in new television series and movies, along with a nightstand drawer full of snacks. 
            </p>
          </div>
        </div>
      </Reveal>
    </>
  )
}