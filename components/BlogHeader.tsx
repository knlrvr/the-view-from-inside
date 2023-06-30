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
          <div className="h-screen flex flex-col">
            <div className="flex justify-between">
              <Reveal>
                <h1 className="w-3/4 pt-8 text-8xl md:text-9xl lg:text-[9rem] xl:text-[10rem] font-bold leading-tight tracking-tight">
                  the <br /> view from inside.
                </h1>
              </Reveal>
            </div>

            <div className="flex justify-between h-full items-end pb-8">
              <div className="">
                <Link href="/#heropost" className="">
                  <HiOutlineArrowLongDown 
                    className="text-3xl" />
                </Link>
              </div>
              <div className="w-16">
                <motion.div
                  style={{
                      width: 65,
                      height: 65,
                      borderRadius: 100,
                      backgroundColor: "white"
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                  className="flex justify-end"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="104.36 161 289.64 165.75" className="fill-[#222] w-20 h-20"> 
                    <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
                    <path d="M1253 3282 c-111 -59 -204 -110 -208 -113 -3 -4 -1 -36 5 -72 14 -76 -1 -68 178 -93 67 -10 119 -21 115 -25 -4 -4 -62 -36 -128 -71 l-120 -63 10 -64 c6 -38 16 -67 25 -72 20 -11 459 -73 466 -66 3 3 3 30 -1 60 -8 64 6 58 -183 83 -156 21 -157 15 22 105 l118 60 -7 46 c-12 82 0 75 -165 98 -63 9 -123 19 -134 22 -13 4 20 25 115 75 74 39 135 71 136 72 8 7 -21 126 -31 126 -6 -1 -102 -49 -213 -108z"/>
                    <path d="M3477 3344 c-4 -4 -7 -87 -7 -184 l0 -177 122 -6 c66 -4 172 -7 235 -7 l113 0 0 184 c0 203 2 196 -66 196 l-34 0 0 -125 0 -125 -46 0 -45 0 3 105 3 105 -46 0 c-56 0 -59 -6 -59 -122 l0 -78 -41 0 -41 0 3 118 4 117 -45 3 c-25 2 -49 0 -53 -4z"/>
                    <path d="M3447 2881 l-27 -48 74 -134 74 -134 -61 -6 c-34 -4 -105 -7 -157 -8 l-95 -1 -28 -46 c-15 -26 -27 -47 -25 -49 2 -1 93 -54 203 -119 l199 -116 28 45 c15 25 28 49 28 55 0 5 -44 35 -97 67 l-98 58 112 3 c112 3 113 3 127 30 14 26 12 32 -39 122 -29 52 -52 97 -50 99 2 2 47 -22 100 -53 53 -31 99 -56 103 -56 7 0 65 101 60 104 -2 2 -79 47 -173 100 -93 54 -184 107 -200 117 l-31 18 -27 -48z"/>
                    <path d="M1484 2502 l-172 -157 48 -55 c27 -30 84 -93 128 -140 l80 -85 36 35 36 35 -81 89 -81 89 32 31 31 31 21 -25 c11 -14 43 -49 70 -78 l51 -54 35 35 35 36 -66 71 c-37 40 -67 76 -67 79 0 4 12 18 26 32 l26 24 35 -40 c20 -22 56 -62 81 -88 l45 -49 35 35 35 36 -57 65 c-31 36 -87 96 -124 135 l-67 70 -171 -157z"/>
                    <path d="M3023 2361 c-82 -21 -180 -106 -203 -176 -32 -96 10 -215 99 -279 40 -29 48 -31 130 -31 96 0 124 11 192 72 57 52 82 105 83 178 1 92 -52 178 -135 221 -37 19 -121 26 -166 15z m105 -131 c42 -26 76 -98 67 -141 -15 -70 -91 -117 -157 -99 -90 26 -129 141 -71 210 45 54 104 65 161 30z"/>
                    <path d="M1856 2148 c-53 -116 -95 -212 -93 -214 5 -5 310 -144 317 -144 8 0 40 66 40 84 0 7 -41 30 -91 52 -50 21 -93 44 -95 50 -3 6 27 81 66 166 38 85 70 158 70 161 0 4 -106 57 -115 57 -1 0 -46 -95 -99 -212z"/>
                    <path d="M2465 2210 c-90 -23 -156 -83 -180 -163 -19 -63 -19 -81 0 -144 38 -128 186 -200 328 -159 50 15 117 57 117 74 0 4 -18 22 -40 40 l-40 33 -29 -22 c-45 -33 -108 -36 -151 -7 -43 29 -60 61 -60 113 0 52 17 84 60 113 43 29 102 26 149 -7 l31 -22 40 32 c22 18 40 36 40 40 0 16 -70 61 -116 75 -51 15 -101 17 -149 4z"/>
                    </g>
                  </svg>
                </motion.div>
              </div>
            </div>
          
          </div>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
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
