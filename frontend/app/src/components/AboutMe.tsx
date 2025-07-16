import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="w-full px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-75"></div>
              <div className="absolute inset-2 bg-slate-800 rounded-full overflow-hidden">
                <Image
                  src="/icon.jpg"
                  alt="Osawa Kousei Profile"
                  width={304}
                  height={304}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Osawa Kousei / n622
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              組み込みからクラウドまで、幅広い領域で活動してきました。<br />
              開発だけでなく、ビジネスの視点からも価値を提供することを目指しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <a href="#works" className="flex items-center">
                  View My Work
                </a>
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/OsawaKousei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/osawakousei/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="mailto:n622jwith@gmail.com"
                aria-label="Email"
              >
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
