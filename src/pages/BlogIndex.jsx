import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { POSTS } from '../data/posts'
import Eyebrow from '../components/Eyebrow'

export default function BlogIndex() {
  return (
    <div className="bg-bone text-ink min-h-screen pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="mb-16">
          <Eyebrow tone="pine">The Journal</Eyebrow>
          <h1 className="text-display-md text-5xl md:text-6xl mt-4 font-semibold tracking-tight">
            Notes on the science
            <br />
            and the economics.
          </h1>
          <p className="mt-5 text-ink/60 text-lg leading-relaxed max-w-xl">
            Long-form pieces on what Greenaid Alpha &amp; Beta actually do, and why the numbers work out
            the way they do, drawn from the technical dossier, not marketing copy.
          </p>
        </Reveal>

        <div className="space-y-5">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 rounded-[24px] border border-ink/10 bg-white p-4 md:p-5 hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-0.5 transition-all duration-500"
              >
                {post.image && (
                  <img src={post.image} alt="" className="w-full sm:w-32 h-32 sm:h-24 object-cover rounded-2xl shrink-0" />
                )}
                <div className="flex-1">
                  <span className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-pine">{post.tag}</span>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-pine transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-ink/60 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 font-mono text-xs text-ink/40">
                  <span>{post.readTime}</span>
                  <span className="text-pine group-hover:translate-x-1 transition-transform text-lg" aria-hidden>→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
