export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-blue-400 mb-4">Company</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                技術とビジネス課題の架け橋となり、<br />
                実用的なソリューションを提供します。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#contents" className="hover:text-white transition-colors">レポート支援</a></li>
                <li><a href="#contents" className="hover:text-white transition-colors">モバイルアプリ開発</a></li>
                <li><a href="#contents" className="hover:text-white transition-colors">テクノロジーソリューション</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">企業情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
