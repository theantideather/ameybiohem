import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { POSTS, getPost } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/blog" replace />

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <article className="bg-bone text-ink min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <Link to="/blog" className="text-sm font-medium text-pine hover:text-ink transition-colors">
            ← The Journal
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-6 max-w-2xl">
          <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-pine">{post.tag}</span>
          <h1 className="text-display-md text-4xl md:text-5xl mt-4 font-semibold tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 font-mono text-xs text-ink/40">
            <span>
              {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </Reveal>

        {post.image && (
          <Reveal delay={0.08} className="mt-8 rounded-[24px] overflow-hidden border border-ink/10 shadow-lg shadow-ink/5">
            <img src={post.image} alt="" className="w-full h-auto max-h-[420px] object-cover" />
          </Reveal>
        )}

        <Reveal delay={0.1} className="mt-12 max-w-2xl space-y-6 text-[17px] leading-[1.75] text-ink/80">
          {post.body.map((block, i) =>
            block.h ? (
              <h2 key={i} className="!mt-12 !mb-2 text-2xl font-semibold text-ink tracking-tight">
                {block.h}
              </h2>
            ) : (
              <p key={i}>{block.p}</p>
            )
          )}
        </Reveal>

        <Reveal delay={0.15} className="mt-16 pt-8 border-t border-ink/10 flex flex-wrap gap-3">
          <Link
            to="/#calculator"
            className="inline-flex items-center gap-2 bg-pine text-white font-semibold rounded-full px-6 py-3 hover:bg-ink transition-colors text-sm"
          >
            Calculate Your Savings →
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 text-ink font-semibold rounded-full px-6 py-3 border border-ink/15 hover:border-ink/30 transition-colors text-sm"
          >
            Book a Trial Batch
          </Link>
        </Reveal>

        {more.length > 0 && (
          <div className="mt-16 pt-8 border-t border-ink/10">
            <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-ink/40">More from the Journal</span>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-ink/10 bg-white overflow-hidden hover:shadow-lg hover:shadow-ink/5 transition-all"
                >
                  {p.image && <img src={p.image} alt="" className="w-full h-28 object-cover" />}
                  <div className="p-5">
                    <span className="font-sans font-bold text-[12px] uppercase tracking-wider text-pine">{p.tag}</span>
                    <h3 className="mt-2 font-semibold group-hover:text-pine transition-colors leading-snug">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
