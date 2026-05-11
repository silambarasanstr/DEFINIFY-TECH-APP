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
    { name: "JavaScript", path: "/javascript", icon: FileJson },
    { name: "React JS", path: "/reactjs", icon: Atom },
    { name: "Next JS", path: "/nextjs", icon: Layers },
    { name: "TypeScript", path: "/typescript", icon: ShieldCheck },
    { name: "Node/Express", path: "/node_and_express", icon: Server },
    { name: "MongoDB", path: "/mongodb", icon: Database },
    { name: "Git & GitHub", path: "/gitgithub", icon: GitBranch },
    { name: "CI/CD", path: "/cicd", icon: Cpu },
    { name: "Docker", path: "/docker", icon: Box },
    { name: "npm", path: "/npm", icon: Box },
    { name: "Jenkins", path: "/jenkins", icon: Settings },
    { name: "dataStructure", path: "/dataStructure", icon: Database },
    { name: "ECommerce", path: "/ECommerce", icon: Database },
  ];

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-slate-300 z-30 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code className="text-white w-6 h-6" />
            <h1 className="text-md font-bold text-white">DEFINIFY-TECH-APP</h1>
          </div>

          {/* Close button mobile */}
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Nav */}
        <nav className="px-4 space-y-1 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)} // mobile close
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg ${
                  isActive
                    ? "bg-primary-500/10 text-primary-400"
                    : "hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
