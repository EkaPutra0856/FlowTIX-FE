"use client"

import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const teamMembers = [
    { name: "Rina Putri", role: "Ketua Umum", image: "/placeholder-user.jpg" },
    { name: "Budi Santoso", role: "Wakil Ketua", image: "/placeholder-user.jpg" },
    { name: "Siti Aminah", role: "Sekretaris", image: "/placeholder-user.jpg" },
    { name: "Ahmad Wijaya", role: "Bendahara", image: "/placeholder-user.jpg" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#003D7A" }}
            >
              F
            </div>
            <span className="font-bold text-xl">Flowtix</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beranda" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Beranda
            </a>
            <a href="#tentang" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Tentang Kami
            </a>
            <a href="#struktur" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Struktur
            </a>
            <a href="#kontak" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Kontak
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Login Button */}
          <Link
            href="/dashboard"
            className="hidden md:block px-4 py-2 rounded-lg text-white font-medium transition hover:opacity-90"
            style={{ backgroundColor: "#003D7A" }}
          >
            Masuk
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 p-4 space-y-3">
            <a href="#beranda" className="block text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Beranda
            </a>
            <a href="#tentang" className="block text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Tentang Kami
            </a>
            <a href="#struktur" className="block text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Struktur
            </a>
            <a href="#kontak" className="block text-sm font-medium text-neutral-600 hover:text-neutral-900">
              Kontak
            </a>
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded-lg text-white font-medium text-center transition hover:opacity-90"
              style={{ backgroundColor: "#003D7A" }}
            >
              Masuk
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="beranda" className="pt-32 pb-16 px-6 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-neutral-900">
            Kelola Organisasi Mahasiswa dengan <span style={{ color: "#2ECC71" }}>Flowtix</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 text-balance">
            Platform SaaS terintegrasi untuk manajemen organisasi mahasiswa. Kelola program kerja, administrasi,
            keuangan, dan anggota dengan mudah dalam satu dashboard modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition hover:opacity-90"
              style={{ backgroundColor: "#2ECC71" }}
            >
              Mulai Sekarang <ArrowRight size={20} />
            </Link>
            <button className="px-6 py-3 rounded-lg border-2 border-neutral-300 font-medium transition hover:border-neutral-400">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section id="tentang" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Visi</h3>
              <p className="text-neutral-600 leading-relaxed">
                Menjadi platform terdepan dalam transformasi digital manajemen organisasi kemahasiswaan di Indonesia,
                menciptakan ekosistem yang efisien, transparan, dan inklusif untuk semua organisasi mahasiswa.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Misi</h3>
              <p className="text-neutral-600 leading-relaxed">
                Menyediakan solusi teknologi yang mudah digunakan untuk mengelola operasional organisasi, meningkatkan
                transparansi keuangan, mempercepat administrasi, dan memberdayakan pengurus untuk fokus pada program
                strategis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Kepengurusan Section */}
      <section id="struktur" className="py-16 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">Struktur Kepengurusan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-neutral-900">{member.name}</h3>
                  <p className="text-sm text-neutral-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">Fitur Utama</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Dashboard Intuitif",
                desc: "Lihat ringkasan organisasi dalam satu layar dengan statistik real-time",
              },
              {
                icon: "📋",
                title: "Manajemen Program",
                desc: "Kelola program kerja dengan visualisasi kanban yang mudah dipantau",
              },
              {
                icon: "💼",
                title: "E-Administration",
                desc: "Kelola surat masuk/keluar dan arsip dokumen secara digital dan aman",
              },
              {
                icon: "👥",
                title: "Database Anggota",
                desc: "Kelola data anggota aktif dan alumni dalam satu basis data terpusat",
              },
              {
                icon: "💰",
                title: "Manajemen Keuangan",
                desc: "Catat pemasukan dan pengeluaran kas dengan laporan terintegrasi",
              },
              {
                icon: "🤖",
                title: "AI Assistant",
                desc: "Dapatkan bantuan AI untuk draft surat, analisis keuangan, dan ide program",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-neutral-50 rounded-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">Hubungi Kami</h2>
          <p className="text-neutral-600 mb-8">
            Punya pertanyaan? Kami siap membantu Anda mengimplementasikan Flowtix di organisasi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@flowtix.com"
              className="px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: "#003D7A" }}
            >
              Email Kami
            </a>
            <a
              href="https://wa.me/62"
              className="px-6 py-3 rounded-lg border-2 border-neutral-300 font-medium hover:border-neutral-400"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#2ECC71" }}
                >
                  F
                </div>
                <span className="font-bold">Flowtix</span>
              </div>
              <p className="text-neutral-400 text-sm">Platform manajemen organisasi mahasiswa terpadu.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Karir
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Media Sosial</h4>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-neutral-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
            <p>
              &copy; 2025 Flowtix. Semua hak dilindungi. |{" "}
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
