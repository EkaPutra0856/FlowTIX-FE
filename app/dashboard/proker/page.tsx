"use client"

import { Plus } from "lucide-react"
import KanbanBoard from "@/components/kanban-board"

export default function ProkerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Program Kerja</h1>
          <p className="text-muted">Kelola program kerja organisasi dalam format kanban board</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition hover:opacity-90"
          style={{ backgroundColor: "#2ECC71" }}
        >
          <Plus size={20} />
          Buat Proker Baru
        </button>
      </div>

      <KanbanBoard />
    </div>
  )
}
