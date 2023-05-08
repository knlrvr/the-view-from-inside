import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineSwapLeft } from 'react-icons/ai'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mt-6 flex flex-col md:mt-8 overflow-hidden">
          {/* <p>this is</p> */}
          <h1 className="text-center text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            {title}
          </h1>
          <div className="flex justify-center items-center">
            <Image 
              src="https://images.unsplash.com/photo-1543251698-bbd36d929cbb"
              width="1000"
              height="100"
              alt=""
              className="max-w-4xl h-24 md:h-36 object-cover"
            />
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
