import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXContent } from '@/app/components/mdx-content'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export default function PostPage({ params }: PostPageProps) {
  const slug = params.slug.join('/')
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        返回首页
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXContent code={post.body.code} />
        </div>

        <footer className="mt-16 pt-8 border-t">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-muted-foreground">OfoxAI Lab 首席 AI 工程师</p>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}
