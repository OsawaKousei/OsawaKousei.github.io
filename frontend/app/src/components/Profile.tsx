export default function Profile() {
  return (
    <section id="profile" className="py-20 bg-slate-50 w-full">
      <div className="w-full px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Profile</h2>
            <p className="text-slate-600 text-lg">
              幅広い領域での経験を持つフルスタック開発者です。開発とビジネスの両面から価値を提供します。
            </p>
          </div>

          {/* Profile Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">About Me</h3>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  約３年の実務経験を持ち、フロントエンドからバックエンドまで幅広い技術領域をカバーしています。
                  プロトタイピングから本番環境の運用まで、全てのフェーズでの経験があります。
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
                    <span className="text-slate-900 font-medium">Kyoto, Japan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Experience</span>
                    <span className="text-slate-900 font-medium">2+ years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Languages</span>
                    <span className="text-slate-900 font-medium">Japanese</span>
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
                    "AI/ML",
                    "Robotics",
                    "Open Source",
                    "Multi Platform Development",
                    "Cloud Architecture",
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
                  year: "2023",
                  title: "Junior Engineer",
                  company: "株式会社 HYBiTZ",
                  description: "Webアプリケーションの開発に参加し、基本的な開発スキルを習得。"
                },
                {
                  year: "2024",
                  title: "AI Engineer",
                  company: "Prox Industries株式会社",
                  description: "AIエンジニアとして、機械学習モデルの開発とAI搭載アプリケーションの構築を担当。"
                },
                {
                  year: "2025",
                  title: "Lead Engineer",
                  company: "株式会社 ONIXION (current position)",
                  description: "リードエンジニアとして、チームの技術的意思決定とアーキテクチャ設計を担当。"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.year}
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