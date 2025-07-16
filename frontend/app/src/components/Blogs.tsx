import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export default function Blogs() {
  const blogPosts = [
    {
      title: "Next.js 14とServer Actionsで作るモダンなWebアプリケーション",
      excerpt: "Next.js 14の新機能Server Actionsを使用して、より効率的でパフォーマンスの高いWebアプリケーションを構築する方法を解説します。",
      date: "2024-01-15",
      category: "Next.js",
      readTime: "5分",
      featured: true
    },
    {
      title: "TypeScriptの型安全性を活用したReact開発のベストプラクティス",
      excerpt: "TypeScriptを使用したReact開発において、型安全性を最大限活用するための実践的なテクニックとパターンを紹介します。",
      date: "2024-01-08",
      category: "TypeScript",
      readTime: "8分",
      featured: true
    },
    {
      title: "Docker Composeを使用した開発環境の構築",
      excerpt: "複数のサービスを含むWebアプリケーションの開発環境を、Docker Composeを使用して効率的に構築する方法を説明します。",
      date: "2024-01-02",
      category: "DevOps",
      readTime: "6分",
      featured: false
    },
    {
      title: "TailwindCSSとHeadless UIで作るアクセシブルなコンポーネント",
      excerpt: "TailwindCSSとHeadless UIを組み合わせて、美しくアクセシブルなUIコンポーネントを作成するテクニックを紹介します。",
      date: "2023-12-28",
      category: "CSS",
      readTime: "7分",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blogs" className="py-20 bg-slate-900 w-full">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              技術的な学びや開発の経験を記事として共有しています。
            </p>
          </div>

          {/* Featured Posts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('ja-JP')}
                  </div>
                  <span className="text-slate-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 hover:bg-slate-700 p-0 h-auto font-medium group"
                >
                  続きを読む
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>

          {/* Other Posts */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Other Posts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {otherPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.readTime}</span>
                  </div>
                  <h4 className="text-white font-bold mb-2 line-clamp-2">{post.title}</h4>
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">
                      {new Date(post.date).toLocaleDateString('ja-JP')}
                    </span>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
                      Read
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                View All Posts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
