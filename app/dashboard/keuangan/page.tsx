"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, FileSpreadsheet, Search, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const FINANCE_DATA = [
  {
    id: 1,
    date: "2025-01-15",
    keterangan: "Kas Masuk dari Anggota",
    kategori: "Pemasukan",
    nominal: 500000,
    bukti: "link",
    status: "Lunas",
  },
  {
    id: 2,
    date: "2025-01-14",
    keterangan: "Pembelian Perlengkapan Acara",
    kategori: "Perlengkapan",
    nominal: 350000,
    bukti: "link",
    status: "Lunas",
  },
  {
    id: 3,
    date: "2025-01-13",
    keterangan: "Konsumsi Rapat Rutin",
    kategori: "Konsumsi",
    nominal: 150000,
    bukti: "link",
    status: "Pending",
  },
  {
    id: 4,
    date: "2025-01-12",
    keterangan: "Kas Masuk dari Sponsor",
    kategori: "Pemasukan",
    nominal: 2000000,
    bukti: "link",
    status: "Lunas",
  },
  {
    id: 5,
    date: "2025-01-10",
    keterangan: "Pembelian Dekorasi",
    kategori: "Perlengkapan",
    nominal: 200000,
    bukti: "link",
    status: "Lunas",
  },
]

export default function KeuanganPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const totalSaldo = 3200000
  const pemasukan = 2500000
  const pengeluaran = 650000

  const filteredData = FINANCE_DATA.filter((item) => {
    const matchSearch = item.keterangan.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = categoryFilter === "all" || item.kategori === categoryFilter
    return matchSearch && matchCategory
  })

  const handleExport = () => {
    alert("Laporan keuangan sedang diunduh...\n\nFitur export laporan akan diintegrasikan dengan backend")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Keuangan</h1>
          <p className="text-muted text-sm mt-1">Kelola pemasukan dan pengeluaran kas organisasi</p>
        </div>
        <Button onClick={handleExport} className="bg-accent hover:bg-accent/90 text-white">
          <FileSpreadsheet size={18} className="mr-2" />
          Export Laporan
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-muted text-sm mb-2">Total Saldo Kas</p>
          <p className="text-3xl font-bold">Rp {(totalSaldo / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-muted mt-2">Saldo akhir periode</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-muted text-sm mb-2">Pemasukan Bulan Ini</p>
              <p className="text-3xl font-bold text-green-600">Rp {(pemasukan / 1000000).toFixed(1)}M</p>
            </div>
            <TrendingUp size={24} className="text-green-600" />
          </div>
          <p className="text-xs text-muted mt-2">
            +{FINANCE_DATA.filter((f) => f.kategori === "Pemasukan").length} transaksi
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-muted text-sm mb-2">Pengeluaran Bulan Ini</p>
              <p className="text-3xl font-bold text-red-600">Rp {(pengeluaran / 1000000).toFixed(2)}M</p>
            </div>
            <TrendingDown size={24} className="text-red-600" />
          </div>
          <p className="text-xs text-muted mt-2">
            {FINANCE_DATA.filter((f) => f.kategori !== "Pemasukan").length} transaksi
          </p>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-2.5 text-muted" />
            <Input
              placeholder="Cari transaksi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              <SelectItem value="Pemasukan">Pemasukan</SelectItem>
              <SelectItem value="Konsumsi">Konsumsi</SelectItem>
              <SelectItem value="Perlengkapan">Perlengkapan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-neutral-50">
                <TableHead>Tanggal</TableHead>
                <TableHead>Keterangan</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Nominal</TableHead>
                <TableHead>Bukti</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-sm">{item.date}</TableCell>
                  <TableCell className="font-medium">{item.keterangan}</TableCell>
                  <TableCell className="text-sm">{item.kategori}</TableCell>
                  <TableCell
                    className={`font-semibold ${item.kategori === "Pemasukan" ? "text-green-600" : "text-red-600"}`}
                  >
                    {item.kategori === "Pemasukan" ? "+" : "-"} Rp {(item.nominal / 1000).toFixed(0)}K
                  </TableCell>
                  <TableCell>
                    <button className="text-primary hover:underline flex items-center gap-1">
                      <Eye size={16} /> Lihat
                    </button>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === "Lunas" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
