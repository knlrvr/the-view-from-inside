import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import { AiOutlineSwapRight } from 'react-icons/ai'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section id="heropost" className="py-2 mb-8 mt-10 relative">
      <div className="h-8"></div>
      <div className="absolute top-8 left-0 border-2 border-black bg-white px-4 p-1 font-semibold tracking-widest">
        Featured Post
      </div>
      <div className="mb-8 md:mb-16 mt-2">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-12 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-3xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="py-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && <p className="text-2xl mb-4 leading-relaxed">{excerpt}</p>}
          <Link href={`/posts/${slug}`}
            className="text-lg absolute bottom-4 right-4 flex items-center space-x-2 hover:underline underline-offset-2 decoration-2">
            <p>Read More</p>
            <AiOutlineSwapRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
