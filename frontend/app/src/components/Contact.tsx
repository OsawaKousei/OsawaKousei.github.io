export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h2>
            <p className="text-gray-600 text-lg">
              AI技術を活用したソリューション開発について、お気軽にご相談ください
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  こんなご相談をお待ちしています
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    技術を活用した業務効率化について相談したい
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    既存システムに新機能を追加したい
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    新規アプリケーションの開発を検討している
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    技術的な実現可能性を確認したい
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    メール
                  </h4>
                  <a
                    href="mailto:contact@company.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    contact@company.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    対応時間
                  </h4>
                  <p className="text-gray-600 text-sm">
                    平日 9:00-18:00
                    <br />
                    （土日祝日は翌営業日に返信いたします）
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    お問い合わせから24時間以内に返信いたします
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
