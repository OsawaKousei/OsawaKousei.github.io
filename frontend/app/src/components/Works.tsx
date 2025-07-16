import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Works() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Next.js、TypeScript、Stripeを使用したフルスタックECサイト。管理画面、決済機能、在庫管理を実装。",
      image: "🛒",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "Web Application",
      featured: true
    },
    {
      title: "Task Management App",
      description: "React、Node.js、MongoDBを使用したタスク管理アプリケーション。リアルタイム同期とコラボレーション機能。",
      image: "📝",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "SaaS Application",
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "データ可視化ダッシュボード。Chart.js、D3.js、Pythonを使用したリアルタイム分析システム。",
      image: "📊",
      tech: ["Vue.js", "Python", "Chart.js", "Docker"],
      category: "Data Visualization",
      featured: false
    },
    {
      title: "Mobile App (React Native)",
      description: "クロスプラットフォームモバイルアプリ。位置情報、プッシュ通知、オフライン機能を実装。",
      image: "📱",
      tech: ["React Native", "Expo", "Firebase", "Redux"],
      category: "Mobile Application",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="works" className="py-20 bg-slate-50 w-full">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Works</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              これまでに開発した代表的なプロジェクトをご紹介します。技術的な挑戦と創造性を組み合わせています。
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="text-slate-600 border-slate-300 hover:bg-slate-100">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{project.image}</div>
                    <span className="text-xs text-slate-500">{project.category}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{project.title}</h4>
                  <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-slate-500 p-1">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-500 p-1">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
