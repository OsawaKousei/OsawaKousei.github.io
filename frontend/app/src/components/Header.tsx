import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 w-full">
      <div className="w-full px-6 h-16 flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="text-xl font-bold text-slate-100">Portfolio</div>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#works"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Works
            </a>
            <a
              href="#skills"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#blogs"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Blog
            </a>
            <a
              href="#profile"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
