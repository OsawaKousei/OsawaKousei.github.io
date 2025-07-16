import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Works() {
  const projects = [
    {
      title: "NEDO NEP 開拓コース 2025 FR",
      description: "NEP開拓コースFRとして模倣学習を用いたロボット制御の研究開発及び事業化に取り組んでいます。",
      image: "📝",
      tech: ["Python","LeRobot", "Genesis", "ROS 2"],
      category: "Biz Dev",
      featured: true,
      codeUrl: "https://github.com/orgs/KyotoVLATech/repositories",
      demoUrl: "https://nep.nedo.go.jp/selected/4e3c2d5a-de3f-4caf-ad31-239a104f091e",
      codeText: "GitHub",
      demoText: "Site"
    },
    {
      title: "NHK 学生ロボコン 2025",
      description: "NHK学生ロボコン2025に京都大学代表チームとして参加。ロボットアームの制御とスマホコントローラー開発を担当。",
      image: "🤖",
      tech: ["C", "C++", "Kotlin", "CubeIDE", "ROS 2", "Android Studio"],
      category: "Robotics",
      featured: true,
      codeUrl: "https://github.com/OsawaKousei/nhk_2025_arm_ctrl",
      demoUrl: "https://www.kikaiken.org/activities.html",
      codeText: "GitHub",
      demoText: "機械研ウェブサイト"
    },
    {
      title: "AI異常検知デスクトップアプリケーション(CLOSED)",
      description: "教師無しベースの異常検知を行うデスクトップアプリケーション。インターンで開発し、提案作成から開発PM、客先調整まで担当。",
      image: "📊",
      tech: ["Python", "C#", "PyTorch", "WPF"],
      category: "AI ・ Desktop Application",
      featured: false,
      codeUrl: null,
      demoUrl: null,
      codeText: "Code",
      demoText: "Demo"
    },
    {
      title: "お問い合わせChatボット(CLOSED)",
      description: "商品に関するお問い合わせを自動で受け付けるチャットボット。インフラ構築からフロント・バックエンドの開発まで担当。",
      image: "🌐",
      tech: ["TypeScript", "Python", "Next.js", "FastAPI", "Docker", "AWS"],
      category: "AI ・ Web Application",
      featured: false,
      codeUrl: null,
      demoUrl: null,
      codeText: "Code",
      demoText: "Expo Demo"
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
              これまでに取り組んだ代表的なプロジェクトをご紹介します。
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
                    {project.codeUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-slate-600 border-slate-300 hover:bg-slate-100"
                        asChild
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {project.codeText}
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.demoText}
                        </a>
                      </Button>
                    )}
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
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.codeUrl && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-slate-500 p-1"
                        asChild
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-slate-500 p-1"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
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
