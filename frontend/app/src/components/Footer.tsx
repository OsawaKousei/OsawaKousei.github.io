import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// リンク設定
const socialLinks = {
  github: "https://github.com/OsawaKousei",
  linkedin: "https://www.linkedin.com/in/osawakousei/", 
  twitter: "https://x.com/sawa__622",
  email: "mailto:n622jwith@gmail.com"
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">n622 Portfolio</div>
              <p className="text-slate-300 leading-relaxed max-w-md">
                組み込みからクラウドまで、幅広い領域で活動してきました。
                開発だけでなく、ビジネスの視点からも価値を提供することを目指しています。
              </p>
              <div className="flex gap-4 mt-6">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  asChild
                >
                  <a href={socialLinks.email}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#works" className="text-slate-400 hover:text-white transition-colors">
                    My Works
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#blogs" className="text-slate-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#profile" className="text-slate-400 hover:text-white transition-colors">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-slate-800 pt-8 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Let's Work Together
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                新しいプロジェクトやコラボレーションの機会がございましたら、
                お気軽にお声がけください。
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href={socialLinks.email}>
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2024 n622. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
