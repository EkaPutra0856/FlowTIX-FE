"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  CheckSquare,
  FileText,
  Users,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Settings,
  Archive,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: CheckSquare, label: "Program Kerja", href: "/dashboard/proker" },
  { icon: FileText, label: "Administrasi", href: "/dashboard/administrasi" },
  { icon: Users, label: "Anggota", href: "/dashboard/anggota" },
  { icon: DollarSign, label: "Keuangan", href: "/dashboard/keuangan" },
  { icon: Archive, label: "Arsip", href: "/dashboard/arsip" },
  { icon: Settings, label: "Pengaturan", href: "/dashboard/settings" },
]

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div
      className={`${isOpen ? "w-64" : "w-20"} bg-primary text-white transition-all duration-300 flex flex-col shadow-lg`}
      style={{ backgroundColor: "#003D7A" }}
    >
      <div className="p-4 flex items-center justify-between border-b border-primary-light">
        {isOpen && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold">F</div>
            <span className="font-bold text-lg">Flowtix</span>
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-primary-light rounded transition">
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-light transition"
            >
              <Icon size={20} />
              {isOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {isOpen && (
        <div className="p-4 border-t border-primary-light text-xs text-gray-300">
          <p>© 2025 Flowtix</p>
        </div>
      )}
    </div>
  )
}
