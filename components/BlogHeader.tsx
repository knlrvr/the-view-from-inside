import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineSwapLeft } from 'react-icons/ai'
import { HiOutlineArrowLongDown } from 'react-icons/hi2'
import { Reveal } from './utils/reveal'

import { motion } from 'framer-motion'

export default function BlogHeader({ title, level }: { title: string, description?: any[], level: 1 | 2 }) {
  switch (level) {
    case 1:
      return (
        <header className="px-4">
          <div className="flex flex-col max-w-7xl mx-auto">
            <div className="flex justify-between items-end">
              <Reveal>
                <h1 className="w-3/4 pt-8 text-7xl md:text-9xl lg:text-[9rem] xl:text-[10rem] font-bold leading-tight tracking-tight">
                  the <br /> view from inside.
                </h1>
              </Reveal>
              <Reveal>
                <div className="w-16 h-16 mr-6 md:mr-8 lg:mr-4 pt-3 md:pt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="107 209 271 145.4" className="fill-teal-800">
                    <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
                    <path d="M2690 2888 c6 -13 52 -117 103 -233 l93 -210 60 -3 c41 -2 64 1 71 10 8 10 174 380 200 446 4 9 -13 12 -64 12 l-69 0 -15 -42 -16 -43 -100 -3 -100 -3 -17 46 -18 45 -69 0 c-67 0 -68 0 -59 -22z m315 -178 c-3 -11 -17 -46 -30 -77 -22 -55 -24 -57 -33 -33 -5 14 -17 42 -26 64 -26 62 -23 66 40 66 51 0 55 -2 49 -20z"/>
                    <path d="M1220 2731 c-88 -27 -138 -95 -124 -168 11 -57 50 -87 146 -113 96 -26 118 -36 118 -54 0 -43 -104 -53 -184 -17 l-46 20 -20 -39 c-11 -22 -20 -44 -20 -50 0 -6 21 -21 48 -33 69 -31 210 -31 270 1 79 42 105 126 59 193 -23 35 -54 49 -178 83 -61 17 -75 33 -54 62 17 23 103 24 157 1 l38 -16 20 47 c19 43 20 48 4 59 -37 27 -176 41 -234 24z"/>
                    <path d="M2190 2495 l0 -235 65 0 64 0 3 63 c3 62 3 62 35 65 30 3 35 -2 75 -62 l43 -66 73 0 73 0 -50 72 -50 73 30 23 c74 59 78 184 8 249 -44 40 -101 53 -240 53 l-129 0 0 -235z m231 125 c57 -16 71 -66 31 -112 -11 -13 -30 -18 -74 -18 l-58 0 0 70 0 70 33 0 c17 0 48 -5 68 -10z"/>
                    <path d="M3340 2495 l0 -235 65 0 65 0 0 90 0 90 90 0 90 0 0 -90 0 -90 65 0 65 0 0 235 0 235 -65 0 -65 0 0 -90 0 -90 -90 0 -90 0 0 90 0 90 -65 0 -65 0 0 -235z"/>
                    <path d="M1686 2288 c-54 -123 -101 -229 -103 -235 -4 -10 12 -13 61 -13 l67 0 19 45 19 45 100 0 100 0 20 -45 20 -45 65 0 c36 0 66 3 66 6 0 3 -46 109 -102 235 l-101 229 -67 0 -66 0 -98 -222z m195 15 l26 -68 -54 -3 c-31 -2 -57 -1 -59 1 -5 5 48 137 55 137 4 0 18 -30 32 -67z"/>
                    <path d="M1747 1924 c-63 -19 -141 -94 -156 -149 -47 -173 62 -317 244 -319 113 -1 194 45 239 136 47 94 31 194 -45 270 -72 73 -174 95 -282 62z m153 -109 c38 -19 63 -68 63 -121 0 -141 -179 -184 -235 -56 -53 120 59 235 172 177z"/>
                    <path d="M1070 1880 l0 -49 73 -3 72 -3 3 -182 2 -183 65 0 65 0 0 185 0 185 70 0 70 0 0 50 0 50 -210 0 -210 0 0 -50z"/>
                    <path d="M2230 1695 l0 -235 65 0 65 0 0 126 0 125 103 -125 102 -125 58 0 57 -1 0 235 0 235 -65 0 -65 0 0 -120 c0 -66 -3 -120 -7 -119 -5 0 -52 54 -106 120 l-97 119 -55 0 -55 0 0 -235z"/>
                    <path d="M2830 1695 l0 -235 190 0 190 0 0 50 0 50 -125 0 -125 0 0 45 0 45 105 0 105 0 0 50 0 50 -105 0 -105 0 0 40 0 40 120 0 120 0 0 50 0 50 -185 0 -185 0 0 -235z"/>
                    <path d="M3283 1923 c3 -5 44 -72 91 -151 l86 -143 0 -85 0 -84 65 0 65 0 0 84 0 85 86 143 c47 79 88 146 91 151 2 4 -25 7 -61 7 l-66 0 -52 -90 c-29 -49 -55 -90 -58 -90 -3 0 -29 41 -58 90 l-53 90 -70 0 c-39 0 -68 -3 -66 -7z"/>
                    </g>
                  </svg>
                </div>
              </Reveal>
            </div>
            <div className="mt-10">
              <div className="flex justify-between border-t border-b border-[#222] font-light text-xs md:text-sm">
                <Link href="/" className="w-full py-4 text-center hover:text-teal-700 duration-200">
                  Home
                </Link>
                <div className="border-r border-[#222]"
                ></div>
                <Link href="/#about" className="w-full py-4 text-center hover:text-teal-700 duration-200">
                  About
                </Link>
                <div className="border-r border-[#222]"
                ></div>
                <Link href="/#more" className="w-full py-4 text-center hover:text-teal-700 duration-200">
                  More <span className="hidden md:inline-flex">Posts</span>
                </Link>
                <div className=""
                ></div>
              </div>
            </div>
          </div>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mx-2 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/#heropost" className="hover:underline flex items-center space-x-2">
              <AiOutlineSwapLeft />
              <p>{title}</p>
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
