import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Menu } from "lucide-react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex w-full">
      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <h1 className="font-bold">CodeFlow</h1>
        </div>

        {/* ✅ LEFT ALIGNED FIXED WIDTH */}
        <div className="w-full max-w-275 md:w-275 mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
