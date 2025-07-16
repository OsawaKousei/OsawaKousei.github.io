"use client";

import { useState } from "react";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { User, Briefcase, Code, FileText, UserCircle, Home as HomeIcon } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { icon: HomeIcon, label: "About", href: "#about" },
    { icon: Briefcase, label: "Works", href: "#works" },
    { icon: Code, label: "Skills", href: "#skills" },
    { icon: FileText, label: "Blog", href: "#blogs" },
    { icon: UserCircle, label: "Profile", href: "#profile" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-white flex">
        <Sidebar className="border-r border-slate-200">
          <SidebarHeader className="p-4 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">Navigation</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main>
            <AboutMe />
            <Works />
            <Skills />
            <Blogs />
            <Profile />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
