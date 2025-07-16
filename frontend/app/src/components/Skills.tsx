export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-slate-700" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Vue.js", level: 75, color: "bg-green-500" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Python", level: 80, color: "bg-yellow-500" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "MongoDB", level: 70, color: "bg-green-700" },
        { name: "GraphQL", level: 65, color: "bg-pink-500" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Docker", level: 78, color: "bg-blue-600" },
        { name: "AWS", level: 72, color: "bg-orange-500" },
        { name: "Git", level: 90, color: "bg-red-500" },
        { name: "Figma", level: 85, color: "bg-purple-500" },
        { name: "Jest", level: 75, color: "bg-red-600" }
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
              モダンな技術スタックを活用して、高品質なWebアプリケーションを開発しています。
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">継続的な学習</h3>
              <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                技術の進歩に合わせて常に新しいスキルを習得し、最新のベストプラクティスを取り入れています。
                現在はAI/ML技術とクラウドアーキテクチャの学習に重点を置いています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
