"use client"

import { useState } from "react"
import { Search, Plus, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const MEMBERS_DATA = [
  {
    id: 1,
    name: "Eka Putra",
    nim: "2022001",
    jurusan: "Teknik Informatika",
    jabatan: "Ketua",
    angkatan: "2022",
    status: "Aktif",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    nim: "2022002",
    jurusan: "Teknik Elektro",
    jabatan: "Staf",
    angkatan: "2022",
    status: "Aktif",
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    nim: "2021015",
    jurusan: "Teknik Mesin",
    jabatan: "Staf",
    angkatan: "2021",
    status: "Alumni",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    nim: "2022045",
    jurusan: "Sistem Informasi",
    jabatan: "Sekretaris",
    angkatan: "2022",
    status: "Aktif",
  },
  {
    id: 5,
    name: "Budi Santoso",
    nim: "2023001",
    jurusan: "Teknik Informatika",
    jabatan: "Staf",
    angkatan: "2023",
    status: "Aktif",
  },
]

export default function AnggotaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [angkatanFilter, setAngkatanFilter] = useState("all")

  const filteredMembers = MEMBERS_DATA.filter((member) => {
    const matchSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || member.nim.includes(searchTerm)
    const matchStatus = statusFilter === "all" || member.status === statusFilter
    const matchAngkatan = angkatanFilter === "all" || member.angkatan === angkatanFilter
    return matchSearch && matchStatus && matchAngkatan
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Anggota</h1>
          <p className="text-muted text-sm mt-1">Kelola data anggota organisasi Anda</p>
        </div>
        <Button className="bg-primary hover:bg-primary text-white">
          <Plus size={18} className="mr-2" />
          Tambah Anggota
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-2.5 text-muted" />
            <Input
              placeholder="Cari nama atau NIM..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="Aktif">Aktif</SelectItem>
              <SelectItem value="Alumni">Alumni</SelectItem>
            </SelectContent>
          </Select>
          <Select value={angkatanFilter} onValueChange={setAngkatanFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Angkatan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Angkatan</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="border border-border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-neutral-50">
                <TableHead>Nama</TableHead>
                <TableHead>NIM</TableHead>
                <TableHead>Jurusan</TableHead>
                <TableHead>Jabatan</TableHead>
                <TableHead>Angkatan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-white text-xs">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{member.nim}</TableCell>
                  <TableCell>{member.jurusan}</TableCell>
                  <TableCell>{member.jabatan}</TableCell>
                  <TableCell>{member.angkatan}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        member.status === "Aktif" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }
                    >
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 hover:bg-neutral-100 rounded transition">
                        <Edit2 size={16} className="text-muted" />
                      </button>
                      <button className="p-1 hover:bg-neutral-100 rounded transition">
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted">Tidak ada anggota yang sesuai dengan filter</p>
          </div>
        )}
      </div>
    </div>
  )
}
