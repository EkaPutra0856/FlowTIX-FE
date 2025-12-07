"use client"

import { useState } from "react"
import { Upload, Search, FolderOpen, File } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const ARCHIVE_FOLDERS = [
  {
    id: 1,
    name: "LPJ Tahunan",
    description: "Laporan Pertanggungjawaban tahunan organisasi",
    icon: "📋",
    fileCount: 12,
    lastModified: "2025-01-20",
  },
  {
    id: 2,
    name: "Proposal Event",
    description: "Proposal dan rencana acara organisasi",
    icon: "📝",
    fileCount: 24,
    lastModified: "2025-01-18",
  },
  {
    id: 3,
    name: "Notulensi Rapat",
    description: "Catatan dan hasil rapat organis",
    icon: "📌",
    fileCount: 36,
    lastModified: "2025-01-15",
  },
  {
    id: 4,
    name: "Database AD/ART",
    description: "Anggaran Dasar dan Anggaran Rumah Tangga",
    icon: "📚",
    fileCount: 8,
    lastModified: "2025-01-10",
  },
]

export default function ArsipPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFolder, setSelectedFolder] = useState<(typeof ARCHIVE_FOLDERS)[0] | null>(null)

  const filteredFolders = ARCHIVE_FOLDERS.filter(
    (folder) =>
      folder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      folder.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Repositori Arsip</h1>
          <p className="text-muted text-sm mt-1">Kelola dan simpan dokumen penting organisasi Anda</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              <Upload size={18} className="mr-2" />
              Upload File
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload File ke Arsip</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                <File size={32} className="mx-auto text-muted mb-2" />
                <p className="text-sm font-medium mb-1">Klik untuk memilih file atau drag & drop</p>
                <p className="text-xs text-muted">Maksimal 50MB</p>
              </div>
              <div>
                <label className="text-sm font-medium">Pilih Folder</label>
                <select className="w-full px-3 py-2 border border-border rounded-lg mt-1">
                  {ARCHIVE_FOLDERS.map((folder) => (
                    <option key={folder.id} value={folder.id}>
                      {folder.name}
                    </option>
                  ))}
                </select>
              </div>
              <Button className="w-full bg-primary hover:bg-primary text-white">Upload</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-2.5 text-muted" />
        <Input
          placeholder="Cari folder atau dokumen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Folders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredFolders.map((folder) => (
          <button
            key={folder.id}
            onClick={() => setSelectedFolder(folder)}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 text-left border border-neutral-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{folder.icon}</div>
              <FolderOpen size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-1 text-neutral-900">{folder.name}</h3>
            <p className="text-sm text-neutral-600 mb-3">{folder.description}</p>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>{folder.fileCount} file</span>
              <span>Diperbarui: {new Date(folder.lastModified).toLocaleDateString("id-ID")}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Folder Detail Modal */}
      {selectedFolder && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
          onClick={() => setSelectedFolder(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[500px] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-6 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedFolder.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">{selectedFolder.name}</h2>
                  <p className="text-sm text-neutral-600">{selectedFolder.fileCount} file tersimpan</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFolder(null)}
                className="text-2xl font-bold text-neutral-400 hover:text-neutral-600"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-2">
              {[...Array(Math.min(selectedFolder.fileCount, 5))].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer transition"
                >
                  <File size={20} className="text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Dokumen {i + 1}.pdf</p>
                    <p className="text-xs text-neutral-500">1.2 MB • 2025-01-{20 - i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
