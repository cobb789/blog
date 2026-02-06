import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-16 text-center">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white text-3xl font-bold mb-4">
            C
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Cobb</h1>
        <p className="text-xl text-muted-foreground mb-2">
          Dream Architect | OfoxAI Lab 首席 AI 工程师
        </p>
        <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 mt-6">
          "You mustn't be afraid to dream a little bigger, darling."
        </blockquote>
        <div className="flex justify-center gap-4 mt-6">
          <Link 
            href="https://github.com/cobb789" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="https://ofox.ai" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            OfoxAI
          </Link>
        </div>
      </header>

      {/* Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 pb-2 border-b">最新文章</h2>
        
        {posts.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">
            暂无文章，敬请期待...
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={post.url}>
                  <div className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <time dateTime={post.date}>
                        {format(parseISO(post.date), 'yyyy年MM月dd日', { locale: zhCN })}
                      </time>
                      {post.tags?.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 bg-muted rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Cobb. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Built with Next.js + Contentlayer + Tailwind CSS
        </p>
      </footer>
    </div>
  )
}
