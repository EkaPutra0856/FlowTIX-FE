"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div
        className="hidden lg:flex lg:w-1/2 items-center justify-center text-white p-8"
        style={{ backgroundColor: "#003D7A" }}
      >
        <div className="text-center">
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center text-3xl font-bold mx-auto mb-6"
            style={{ backgroundColor: "#2ECC71" }}
          >
            F
          </div>
          <h1 className="text-4xl font-bold mb-4">Flowtix</h1>
          <p className="text-lg text-blue-100 mb-6">Platform Manajemen Organisasi Mahasiswa</p>
          <div className="bg-blue-400/20 rounded-lg p-6 max-w-sm mx-auto">
            <p className="text-sm text-blue-100">
              Kelola program kerja, administrasi, keuangan, dan anggota organisasi dengan mudah dan terintegrasi.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-neutral-50 p-6">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              style={{ backgroundColor: "#003D7A", color: "#2ECC71" }}
            >
              F
            </div>
            <h1 className="text-2xl font-bold">Flowtix</h1>
            <p className="text-sm text-muted mt-1">Platform Manajemen Ormawa</p>
          </div>

          {/* Login Form */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-2">Masuk ke Akun Anda</h2>
            <p className="text-center text-muted text-sm mb-6">Gunakan email dan password untuk masuk</p>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@organisasi.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-sm text-primary hover:underline">
                    Lupa Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-muted hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary text-white h-10">
                {isLoading ? "Memproses..." : "Masuk"}
              </Button>
            </form>

            {/* Demo Info */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
              <p className="font-medium text-blue-900 mb-2">Demo Akun:</p>
              <p className="text-blue-800">Email: demo@flowtix.com</p>
              <p className="text-blue-800">Password: demo123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
