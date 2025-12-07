"use client"

import { Plus, Download, Edit2, Trash2 } from "lucide-react"
import { useState } from "react"

interface Surat {
  id: number
  no: number
  perihal: string
  tujuan: string
  status: "draft" | "terkirim" | "disetujui"
  tanggal: string
}

const mockSurat: Surat[] = [
  {
    id: 1,
    no: 1,
    perihal: "Proposal Kegiatan Seminar Teknologi",
    tujuan: "Dekan Fakultas Informatika",
    status: "disetujui",
    tanggal: "2025-01-10",
  },
  {
    id: 2,
    no: 2,
    perihal: "Permohonan Dana Gathering",
    tujuan: "Rektorat",
    status: "terkirim",
    tanggal: "2025-01-12",
  },
  {
    id: 3,
    no: 3,
    perihal: "Laporan Pertanggungjawaban Kegiatan",
    tujuan: "Wakil Rektor Bidang Kemahasiswaan",
    status: "draft",
    tanggal: "2025-01-15",
  },
]

const statusBadgeColor: Record<string, { bg: string; text: string }> = {
  draft: { bg: "#f3f4f6", text: "#6b7280" },
  terkirim: { bg: "#003D7A", text: "#ffffff" },
  disetujui: { bg: "#2ECC71", text: "#ffffff" },
}

export default function AdministrasiPage() {
  const [surat] = useState(mockSurat)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Administrasi</h1>
          <p className="text-muted">Kelola surat masuk dan keluar organisasi</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition hover:opacity-90"
          style={{ backgroundColor: "#2ECC71" }}
        >
          <Plus size={20} />
          Buat Surat Baru
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead style={{ backgroundColor: "#003D7A" }} className="text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">No</th>
                <th className="px-6 py-3 text-left font-semibold">Perihal/Judul Surat</th>
                <th className="px-6 py-3 text-left font-semibold">Tujuan/Pengirim</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Tanggal</th>
                <th className="px-6 py-3 text-left font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {surat.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b border-border ${
                    idx % 2 === 0 ? "bg-white" : "bg-neutral-50"
                  } hover:bg-neutral-100 transition`}
                >
                  <td className="px-6 py-3">{item.no}</td>
                  <td className="px-6 py-3 font-medium">{item.perihal}</td>
                  <td className="px-6 py-3 text-muted">{item.tujuan}</td>
                  <td className="px-6 py-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium capitalize"
                      style={{
                        backgroundColor: statusBadgeColor[item.status].bg,
                        color: statusBadgeColor[item.status].text,
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-muted">{new Date(item.tanggal).toLocaleDateString("id-ID")}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-neutral-200 rounded transition" title="Download">
                        <Download size={16} className="text-muted" />
                      </button>
                      <button className="p-1 hover:bg-neutral-200 rounded transition" title="Edit">
                        <Edit2 size={16} className="text-muted" />
                      </button>
                      <button className="p-1 hover:bg-neutral-200 rounded transition" title="Hapus">
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
