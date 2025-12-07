import { Zap } from "lucide-react"

export default function WelcomeCard() {
  return (
    <div
      className="bg-gradient-to-r to-primary-light text-white rounded-lg shadow-lg p-8 flex items-center justify-between"
      style={{
        background: "linear-gradient(135deg, #003D7A 0%, #1a5fa0 100%)",
      }}
    >
      <div className="max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={24} style={{ color: "#2ECC71" }} />
          <h2 className="text-2xl font-bold">Selamat Datang Kembali!</h2>
        </div>
        <p className="text-blue-100">Kelola semua aspek organisasi Anda dengan mudah dan efisien.</p>
      </div>
      <div className="hidden md:block text-6xl opacity-10">📊</div>
    </div>
  )
}
