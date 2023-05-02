import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

import { AiOutlineSwapRight } from 'react-icons/ai'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <div className="flex items-center py-4 mb-8 font-semibold tracking-widest text-2xl md:text-3xl space-x-2">
        <h2>
          More Posts
        </h2>
        <AiOutlineSwapRight />
      </div>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
