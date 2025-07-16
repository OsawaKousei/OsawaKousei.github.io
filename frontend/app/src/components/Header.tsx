export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center">
        <nav className="flex justify-between items-center w-full">
          <div className="text-xl font-bold text-blue-400">Company</div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#contents"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              ソリューション
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              会社概要
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              お問い合わせ
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
