export default function Profile() {
  return (
    <section id="profile" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Profile</h2>
            <p className="text-slate-600 text-lg">
              技術と創造性を組み合わせて、価値のあるソリューションを生み出しています。
            </p>
          </div>

          {/* Profile Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">About Me</h3>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  Web開発者として5年以上の経験を持ち、フロントエンドからバックエンドまで幅広い技術領域をカバーしています。
                  ユーザー体験を重視した設計と、保守性の高いコードの作成を心がけています。
                </p>
                <p className="leading-relaxed">
                  新しい技術への探求心を持ち続け、常にベストプラクティスを追求しています。
                  チームでの協業を重視し、知識の共有と継続的な改善に取り組んでいます。
                </p>
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Basic Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Location</span>
                    <span className="text-slate-900 font-medium">Tokyo, Japan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Experience</span>
                    <span className="text-slate-900 font-medium">5+ years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Languages</span>
                    <span className="text-slate-900 font-medium">Japanese, English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Availability</span>
                    <span className="text-green-600 font-medium">Available for projects</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Performance",
                    "UI/UX Design",
                    "Open Source",
                    "AI/ML",
                    "Cloud Architecture",
                    "Accessibility"
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Career Journey</h3>
            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "Senior Full Stack Developer",
                  company: "Tech Startup",
                  description: "リードデベロッパーとして、チームの技術的意思決定とアーキテクチャ設計を担当。"
                },
                {
                  year: "2022",
                  title: "Full Stack Developer",
                  company: "Web Agency",
                  description: "企業向けWebアプリケーションの設計・開発・運用を担当。"
                },
                {
                  year: "2020",
                  title: "Frontend Developer",
                  company: "Digital Agency",
                  description: "React/Vue.jsを使用したWebサイト・アプリケーションの開発に従事。"
                },
                {
                  year: "2019",
                  title: "Career Start",
                  company: "Self-Learning",
                  description: "独学でプログラミングを学習し、Web開発の基礎を習得。"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-grow bg-white p-6 rounded-xl shadow-md border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{item.company}</p>
                    <p className="text-slate-600">{item.description}</p>
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
