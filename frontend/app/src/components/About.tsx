export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダーセクション */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              私たちについて
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              技術とビジネス課題の架け橋となり、実用的で価値のあるソリューションを提供します。
              技術力と実装力を兼ね備えたチームが、お客様の成功をサポートします。
            </p>
          </div>

          {/* 統計情報 */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
              <div className="text-gray-600 text-sm">結成年</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm">開発プロジェクト</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm">メンバー</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7/24</div>
              <div className="text-gray-600 text-sm">サポート</div>
            </div>
          </div>

          {/* サービスの特徴 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">技術力</h3>
              <p className="text-gray-600 leading-relaxed">
                最新の技術を駆使し、Next.js、Python、クラウドインフラを活用した堅牢なシステム開発。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">実用性</h3>
              <p className="text-gray-600 leading-relaxed">
                技術的な可能性だけでなく、ビジネス価値と実装可能性を重視した現実的なソリューション提案。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">品質</h3>
              <p className="text-gray-600 leading-relaxed">
                コードレビュー、テスト駆動開発、継続的インテグレーションによる高品質なソフトウェア開発。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
