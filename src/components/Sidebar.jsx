import React from "react";
import { NavLink } from "react-router-dom";
import {
  Code,
  Palette,
  FileJson,
  Atom,
  Layers,
  ShieldCheck,
  Server,
  Database,
  GitBranch,
  Cpu,
  Box,
  X,
  Settings,
} from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  const navItems = [
    { name: "HTML", path: "/html", icon: Code },
    { name: "CSS", path: "/css", icon: Palette },
    { name: "DOM", path: "/dom", icon: FileJson },
    { name: "JavaScript", path: "/javascript", icon: FileJson },
    { name: "React JS", path: "/reactjs", icon: Atom },
    { name: "Next JS", path: "/nextjs", icon: Layers },
    { name: "TypeScript", path: "/typescript", icon: ShieldCheck },
    { name: "Node.js", path: "/nodejs", icon: Server },
    { name: "Express.js", path: "/express", icon: Server },
    { name: "MongoDB", path: "/mongodb", icon: Database },
    { name: "Git & GitHub", path: "/gitgithub", icon: GitBranch },
    { name: "CI/CD", path: "/cicd", icon: Cpu },
    { name: "Docker", path: "/docker", icon: Box },
    { name: "Jenkins", path: "/jenkins", icon: Settings },
    { name: "Kubernetes", path: "/kubernetes", icon: Layers },
    { name: "Data Structure", path: "/dataStructure", icon: Database },
    { name: "ECommerce", path: "/ECommerce", icon: Database },
    { name: "VS Shortcuts", path: "/VSshortcuts", icon: Database },
    { name: "UI/UX", path: "/UIUX", icon: Database },
    { name: "English", path: "/English", icon: Database },
    {
      name: "English To Tamil",
      path: "/EnglishToTamil",
      icon: Database,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 flex h-screen w-64
          flex-col bg-slate-900 text-slate-300
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Code className="h-6 w-6 text-white" />

            <h1 className="text-md font-bold text-white">DEFINIFY-TECH-APP</h1>
          </div>

          <button
            type="button"
            className="text-slate-300 hover:text-white md:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-4">
          <div className="space-y-1 text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-2
                    transition-colors
                    ${
                      isActive
                        ? "bg-primary-500/10 text-primary-400"
                        : "hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" />

                  <span className="truncate">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
