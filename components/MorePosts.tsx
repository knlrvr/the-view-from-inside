import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import { Reveal } from './utils/reveal'

import { AiOutlineSwapRight } from 'react-icons/ai'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section id="more">
      <div className="flex items-center mb-8 font-semibold tracking-widest text-2xl md:text-3xl space-x-2">
        <h2 className="px-4">
          More Posts
        </h2>
        <AiOutlineSwapRight />
      </div>
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16 xl:grid-cols-3 lg:gap-x-18 px-4 mb-10">
        {posts.map((post) => (
          <Reveal>
            <PostPreview
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
