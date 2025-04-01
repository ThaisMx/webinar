"use client"

import { useState } from "react"
import { Copy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WebinarParams() {
  const [copied, setCopied] = useState(false)
  const webinarLink = "https://webinar.willianaksenen.com.br"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(webinarLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Falha ao copiar o link:", err)
    }
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data e Hora */}
        <div className="flex items-start space-x-3">
          <Clock className="w-6 h-6 text-[#0096FF] mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Data e Hora</h3>
            <p className="text-gray-600">
              Quinta-feira, 28 de Março de 2024
              <br />
              19:00 (Horário de Brasília)
            </p>
          </div>
        </div>

        {/* Link do Webinar */}
        <div className="flex items-start space-x-3">
          <Copy className="w-6 h-6 text-[#0096FF] mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Link do Webinar</h3>
            <div className="flex items-center space-x-2">
              <p className="text-gray-600 break-all">{webinarLink}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="text-[#0096FF] hover:text-[#0084E0]"
              >
                {copied ? "Copiado!" : "Copiar"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 