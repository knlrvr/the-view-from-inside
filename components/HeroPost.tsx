import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section className="border-b border-black py-2 mb-8">
      <div className="font-semibold tracking-widest text-2xl md:text-3xl">
        <h2 className="mb-2 py-8">Featured Post</h2>
      </div>
      <div className="mb-8 md:mb-16">
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
        </div>
      </div>
    </section>
  )
}
