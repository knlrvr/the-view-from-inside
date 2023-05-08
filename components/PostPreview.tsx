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
    <div className="h-[420px] border-2 border-black relative">
      <div className="mb-2 p-2 relative">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="text-3xl leading-snug px-4">
        <div className="hover:underline">
          {title}
        </div>
      </h3>
      <div className="text-sm py-2 px-4 font-semibold">
        <Date dateString={date} />
      </div> 
      {excerpt && <p className="text-lg leading-relaxed px-4">{excerpt}</p>}
      <Link href={`/posts/${slug}`}
        className="absolute bottom-4 right-4 flex items-center space-x-2 hover:underline underline-offset-2 decoration-2">
        <p>Read More</p>
        <AiOutlineSwapRight />
      </Link>
    </div>
  )
}
