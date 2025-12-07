"use client"

import { TrendingUp, CheckCircle, Clock } from "lucide-react"
import StatCard from "@/components/stat-card"
import WelcomeCard from "@/components/welcome-card"
import ActivityCalendar from "@/components/activity-calendar"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <WelcomeCard />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Proker Berjalan" value="36" icon={TrendingUp} color="accent" />
        <StatCard title="Proker Selesai" value="15" icon={CheckCircle} color="primary" />
        <StatCard title="Kas Saat Ini" value="Rp 2.5M" icon={Clock} color="neutral" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityCalendar />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Kegiatan Terkini</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="pb-3 border-b border-border last:border-b-0">
                <p className="text-sm font-medium">Kegiatan {i}</p>
                <p className="text-xs text-muted">2 jam yang lalu</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
