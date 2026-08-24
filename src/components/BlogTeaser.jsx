import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { POSTS } from '../data/posts'
import Eyebrow from './Eyebrow'

export default function BlogTeaser() {
  return (
    <section className="relative bg-bone text-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Eyebrow tone="pine">The Journal</Eyebrow>
            <h2 className="text-display-md text-4xl md:text-5xl mt-4 font-semibold tracking-tight">
              Read the science,
              <br />
              not just the numbers.
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-ink transition-colors shrink-0">
            All articles <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-[24px] border border-ink/10 bg-white overflow-hidden hover:shadow-2xl hover:shadow-ink/5 hover:-translate-y-1 transition-all duration-500"
              >
                {post.image && <img src={post.image} alt="" className="w-full h-40 object-cover" />}
                <div className="p-7 flex flex-col flex-1">
                  <span className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-pine">{post.tag}</span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight leading-snug group-hover:text-pine transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/60 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs font-mono text-ink/40">
                    <span>{post.readTime}</span>
                    <span className="text-pine group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
