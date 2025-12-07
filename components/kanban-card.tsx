interface KanbanCardProps {
  id: number
  title: string
  ketua: string
  progress: number
}

export default function KanbanCard({ title, ketua, progress }: KanbanCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-move">
      <h4 className="font-medium mb-2 line-clamp-2">{title}</h4>

      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs text-muted">Progress</p>
          <p className="text-xs font-semibold">{progress}%</p>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all"
            style={{
              width: `${progress}%`,
              backgroundColor: progress === 100 ? "#2ECC71" : "#003D7A",
            }}
          ></div>
        </div>
      </div>

      <p className="text-xs text-muted">Ketua: {ketua}</p>
    </div>
  )
}
