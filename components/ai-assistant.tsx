"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SUGGESTED_PROMPTS = [
  "Buatkan draft surat undangan rapat",
  "Rekap pengeluaran bulan ini",
  "Ide proker untuk bulan Ramadhan",
]

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Halo! Saya Flowtix AI Assistant. Saya siap membantu Anda dengan berbagai tugas organisasi. Apa yang bisa saya bantu hari ini?",
      sender: "assistant",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage = {
        id: messages.length + 2,
        text: `Saya menerima permintaan: "${text}". Fitur AI Assistant akan diintegrasikan dengan Vercel AI SDK dan model AI yang sesuai untuk memberikan respons yang lebih intelligent.`,
        sender: "assistant",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-40"
        style={{ backgroundColor: "#003D7A" }}
        title="Buka AI Assistant"
      >
        <Sparkles size={24} className="text-white" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-40 border border-border">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 text-white rounded-t-lg"
        style={{ backgroundColor: "#003D7A" }}
      >
        <div className="flex items-center gap-2">
          <MessageCircle size={20} />
          <h3 className="font-semibold">Flowtix AI Assistant</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-blue-900/50 rounded transition">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.sender === "user"
                  ? "bg-primary text-white rounded-br-none"
                  : "bg-neutral-100 text-foreground rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 text-foreground px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-muted rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Prompts */}
      {messages.length === 1 && (
        <div className="px-4 py-3 border-t border-border space-y-2">
          <p className="text-xs font-medium text-muted">Contoh pertanyaan:</p>
          <div className="space-y-2">
            {SUGGESTED_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="w-full text-left text-sm p-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-border transition"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !isLoading) {
              handleSendMessage(inputValue)
            }
          }}
          placeholder="Tanya sesuatu..."
          className="text-sm"
        />
        <Button
          size="icon"
          onClick={() => handleSendMessage(inputValue)}
          disabled={isLoading || !inputValue.trim()}
          className="bg-primary hover:bg-primary text-white"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  )
}
