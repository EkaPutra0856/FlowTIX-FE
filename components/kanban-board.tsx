"use client"

import KanbanCard from "@/components/kanban-card"

const mockProker = {
  rencana: [
    {
      id: 1,
      title: "Seminar Teknologi",
      ketua: "Eka Putra",
      progress: 0,
    },
    {
      id: 2,
      title: "Workshop Web Dev",
      ketua: "Siti Nurhaliza",
      progress: 20,
    },
  ],
  eksekusi: [
    {
      id: 3,
      title: "Gathering Fakultas",
      ketua: "Budi Santoso",
      progress: 65,
    },
    {
      id: 4,
      title: "Kompetisi Coding",
      ketua: "Rani Wijaya",
      progress: 45,
    },
    {
      id: 5,
      title: "Training Leadership",
      ketua: "Ahmad Rizky",
      progress: 80,
    },
  ],
  selesai: [
    {
      id: 6,
      title: "Pameran Karya Akhir",
      ketua: "Dewi Lestari",
      progress: 100,
    },
    {
      id: 7,
      title: "Rapat Koordinasi",
      ketua: "Fajar Hidayat",
      progress: 100,
    },
  ],
}

export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {[
        { title: "Rencana", status: "rencana", color: "#6b7280" },
        { title: "Eksekusi", status: "eksekusi", color: "#003D7A" },
        { title: "Selesai", status: "selesai", color: "#2ECC71" },
      ].map((col) => (
        <div key={col.status} className="bg-neutral-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: col.color }}></div>
            <h3 className="font-semibold">
              {col.title} ({mockProker[col.status as keyof typeof mockProker].length})
            </h3>
          </div>

          <div className="space-y-3">
            {mockProker[col.status as keyof typeof mockProker].map((card) => (
              <KanbanCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
