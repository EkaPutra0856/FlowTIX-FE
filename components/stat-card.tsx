import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  icon: LucideIcon
  color: "primary" | "accent" | "neutral"
}

export default function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
  const colors = {
    primary: { bg: "bg-blue-50", icon: "#003D7A", text: "text-primary" },
    accent: { bg: "bg-green-50", icon: "#2ECC71", text: "text-accent" },
    neutral: { bg: "bg-gray-50", icon: "#6b7280", text: "text-neutral-600" },
  }

  const theme = colors[color]

  return (
    <div className={`${theme.bg} rounded-lg p-6 shadow-sm`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="p-3 rounded-lg" style={{ backgroundColor: theme.icon + "20" }}>
          <Icon size={24} style={{ color: theme.icon }} />
        </div>
      </div>
    </div>
  )
}
