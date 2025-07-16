export default function Skills() {
  const skillCategories = [
    {
      category: "Application",
      icon: "🎨",
      skills: [
        { name: "Next.js", level: 75, color: "bg-slate-700" },
        { name: "WPF/Prism", level: 50, color: "bg-blue-600" },
        { name: "Unity", level: 20, color: "bg-yellow-500" },
        { name: "electron", level: 15, color: "bg-green-500" },
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "ROS2", level: 80, color: "bg-green-600" },
        { name: "PyTorch", level: 80, color: "bg-yellow-500" },
        { name: "FastAPI", level: 75, color: "bg-blue-700" },
        { name: "PostgreSQL", level: 50, color: "bg-green-700" },
        { name: "NestJS", level: 20, color: "bg-pink-500" }
      ]
    },
    {
      category: "Infrastructure",
      icon: "🛠️",
      skills: [
        { name: "Docker", level: 85, color: "bg-blue-600" },
        { name: "AWS", level: 80, color: "bg-orange-500" },
        { name: "Git", level: 90, color: "bg-red-500" },
        { name: "Azure", level: 15, color: "bg-purple-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white w-full">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              幅広い技術スタックを持ち、様々なプロジェクトでの経験があります。
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">最新の興味</h3>
              <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                これまでは主にAI・ロボティクスにおけるバックエンド開発を中心に行ってきましたが、
                最近ではフロントエンドやインフラ周りの技術にも興味を持ち、幅広い技術スタックを学んでいます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
