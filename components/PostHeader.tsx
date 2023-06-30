import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0 md:mb-10">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mb-6 mx-4 flex items-center justify-between">
        <div>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="text-xs font-semibold leading-tight tracking-tight">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
