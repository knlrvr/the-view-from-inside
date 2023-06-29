import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineSwapLeft } from 'react-icons/ai'
import { HiOutlineArrowLongDown } from 'react-icons/hi2'
import { WiStars } from 'react-icons/wi'
import { Reveal } from './utils/reveal'

import { motion } from 'framer-motion'

export default function BlogHeader({ title, level }: { title: string, description?: any[], level: 1 | 2 }) {
  switch (level) {
    case 1:
      return (
        <header className="h-screen mt-16">
          <div className="">
            hey
          </div>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline flex items-center space-x-2">
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
