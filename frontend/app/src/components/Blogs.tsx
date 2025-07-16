import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blogs() {
  const blogPosts = [
    {
      title: "ignition gazebo + Rviz2の開発環境構築",
      excerpt: "ROS 2のシミュレーション環境を構築するための手順を解説します。シミュレーター上で自律走行ロボットを動かすまでの流れを詳しく説明します。",
      date: "2023-12-19",
      category: "ROS 2",
      featured: true,
      url: "https://qiita.com/N622/items/6ca879f8b1f9d667e561"
    },
    {
      title: "ワンクリックでウェブサイトを本文抽出->MDでDLするブラウザ拡張機能の作成",
      excerpt: "ワンクリックでウェブサイトの本文を抽出し、Markdown形式でダウンロードできるブラウザ拡張機能の開発を紹介します。クロスブラウザ対応で、簡単にウェブサイトの内容を保存できます。",
      date: "205-07-15",
      category: "TypeScript",
      featured: true,
      url: "https://qiita.com/N622/items/ffa7896076fe60b15204"
    },
    {
      title: "WSLでlibrealsenseをソースビルドしてRealsenseを使用可能にする",
      excerpt: "WSL環境でlibrealsenseをソースからビルドし、Realsenseカメラを使用可能にする手順を解説します。pyrealsense2も含めた設定方法を紹介します。",
      date: "2025-02-14",
      category: "WSL",
      featured: false,
      url: "https://qiita.com/N622/items/e9ba5b0188b2a86bd1fa"
    },
    {
      title: "Ubuntu22.04でros2-for-unityの環境構築",
      excerpt: "UnityでROS 2を使用するための環境構築手順を解説します。UnityとROS 2の連携をスムーズに行う方法を紹介します。",
      date: "2024-11-26",
      category: "ROS 2",
      featured: false,
      url: "https://qiita.com/N622/items/09a2593f114627102b66"
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
            <h2 className="text-4xl font-bold text-white mb-4">Blog Posts</h2>
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
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <a href={post.url}>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 hover:bg-slate-700 p-0 h-auto font-medium group"
                  >
                    続きを読む
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
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
                  </div>
                  <h4 className="text-white font-bold mb-2 line-clamp-2">{post.title}</h4>
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">
                      {new Date(post.date).toLocaleDateString('ja-JP')}
                    </span>
                    <a href={post.url}>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
                        Read
                      </Button>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <a href="https://qiita.com/N622" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 bg-transparent hover:bg-slate-700 hover:text-white hover:border-slate-500"
                >
                  View All Posts
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}