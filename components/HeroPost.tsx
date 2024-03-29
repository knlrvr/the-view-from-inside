import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import { AiOutlineSwapRight } from 'react-icons/ai'
import { Reveal } from './utils/reveal'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >
) {
  const { title, coverImage, date, excerpt, slug } = props
  return (
    <Reveal>
      <section id="heropost" className="py-2 mb-8 mt-6 relative px-4">
        <div className="h-8"></div>
        <div className="absolute top-8 md:top-6 left-4 border border-[#222] bg-white bg-opacity-90 px-[1.4rem] md:px-8 p-2 font-light tracking-widest text-sm md:text-xl">
          Featured Post
        </div>
        <div className="mb-4 md:mb-8 mt-2">
          <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div>
        <div>
        <div className="py-2 text-xs md:mb-0 font-semibold">
          <Date dateString={date} />
        </div>
        <div className="mb-12 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
            <h3 className="text-3xl leading-tight lg:text-6xl">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title || 'Untitled'}
              </Link>
            </h3>
            {excerpt && <p className="text-xl py-2 leading-relaxed">{excerpt}</p>}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
