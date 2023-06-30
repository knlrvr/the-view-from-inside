import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import { AiOutlineSwapRight } from 'react-icons/ai'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className="h-fit border-b border-[#222] md:border-none relative">
      <div className="mb-2 relative">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className="text-xs py-2 font-semibold">
        <Date dateString={date} />
      </div> 
      <h3 className="text-3xl leading-snug">
        <div className="">
          {title}
        </div>
      </h3>
      {excerpt && <p className="text-lg leading-relaxed py-2 pb-12">{excerpt}</p>}
    </div>
  )
}
