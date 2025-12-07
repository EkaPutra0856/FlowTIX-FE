"use client"

import { Search, Bell, Menu } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4 flex-1">
          <button onClick={onMenuClick} className="p-2 hover:bg-neutral-100 rounded-lg lg:hidden">
            <Menu size={20} />
          </button>
          <div className="hidden md:flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-lg flex-1 max-w-md">
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Cari..." className="bg-transparent outline-none text-sm flex-1" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-neutral-100 rounded-lg relative">
            <Bell size={20} className="text-muted" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 p-2 hover:bg-neutral-100 rounded-lg">
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: "#003D7A" }}
            >
              EP
            </div>
            <div className="hidden md:block text-sm">
              <p className="font-medium">Selamat Datang, Eka Putra!</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
