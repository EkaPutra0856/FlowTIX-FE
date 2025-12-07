"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Upload, Save } from "lucide-react"

export default function SettingsPage() {
  const [orgName, setOrgName] = useState("Organisasi Mahasiswa XYZ")
  const [visiMisi, setVisiMisi] = useState(
    "Visi: Menjadi organisasi yang progresif dan inovatif dalam pengembangan mahasiswa.\nMisi: Memberikan platform untuk pengembangan keterampilan dan jaringan mahasiswa.",
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Pengaturan</h1>
        <p className="text-muted text-sm mt-1">Kelola konfigurasi organisasi Anda</p>
      </div>

      <Tabs defaultValue="profil" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white border border-border">
          <TabsTrigger value="profil">Profil Organisasi</TabsTrigger>
          <TabsTrigger value="user">Manajemen User</TabsTrigger>
          <TabsTrigger value="tampilan">Tampilan</TabsTrigger>
        </TabsList>

        {/* Tab: Profil Organisasi */}
        <TabsContent value="profil" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Profil Organisasi</h3>
            <div className="space-y-4">
              {/* Logo Upload */}
              <div>
                <Label className="mb-2 block">Logo Organisasi</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-neutral-50 transition cursor-pointer">
                  <Upload size={32} className="mx-auto text-muted mb-2" />
                  <p className="text-sm font-medium">Klik atau drag untuk upload logo</p>
                  <p className="text-xs text-muted mt-1">PNG, JPG, maksimal 2MB</p>
                </div>
              </div>

              {/* Nama Organisasi */}
              <div>
                <Label htmlFor="orgName" className="mb-2 block">
                  Nama Organisasi
                </Label>
                <Input
                  id="orgName"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Masukkan nama organisasi"
                />
              </div>

              {/* Visi Misi */}
              <div>
                <Label htmlFor="visiMisi" className="mb-2 block">
                  Visi & Misi
                </Label>
                <Textarea
                  id="visiMisi"
                  value={visiMisi}
                  onChange={(e) => setVisiMisi(e.target.value)}
                  placeholder="Masukkan visi dan misi organisasi"
                  rows={6}
                />
              </div>

              <Button className="bg-primary hover:bg-primary text-white w-full">
                <Save size={18} className="mr-2" />
                Simpan Perubahan
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Manajemen User */}
        <TabsContent value="user" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Manajemen User</h3>
            <div className="space-y-4">
              <div className="bg-neutral-50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted">Fitur manajemen user akan ditampilkan di sini.</p>
                <p className="text-sm text-muted mt-2">
                  Anda dapat menambah, mengubah, atau menghapus pengguna dari halaman ini.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary text-white">Tambah User</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Tampilan */}
        <TabsContent value="tampilan" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Preferensi Tampilan</h3>
            <div className="space-y-4">
              <div className="bg-neutral-50 rounded-lg p-4 border border-border">
                <p className="text-sm font-medium mb-2">Mode Gelap</p>
                <p className="text-sm text-muted">Pilih antara mode terang dan gelap untuk antarmuka pengguna.</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 border border-border">
                <p className="text-sm font-medium mb-2">Bahasa</p>
                <p className="text-sm text-muted">Saat ini menggunakan Bahasa Indonesia.</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
