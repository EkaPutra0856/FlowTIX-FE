"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ActivityCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const days = Array.from({ length: daysInMonth(currentMonth) }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth(currentMonth) }, () => null)

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Kegiatan Mendatang</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
            className="p-1 hover:bg-neutral-100 rounded"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            className="p-1 hover:bg-neutral-100 rounded"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <p className="text-sm text-muted mb-4">
        {currentMonth.toLocaleDateString("id-ID", {
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-muted">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {emptyDays.map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}
        {days.map((day) => (
          <button key={day} className="aspect-square rounded-lg text-sm font-medium hover:bg-neutral-100 transition">
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}
