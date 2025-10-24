"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  paymentToken: string
}

export function PaymentModal({ isOpen, onClose, paymentToken }: PaymentModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isOpen && paymentToken && iframeRef.current) {
      // PayTR iframe will be loaded with the token
      const iframeUrl = `https://www.paytr.com/odeme/guvenli/${paymentToken}`
      iframeRef.current.src = iframeUrl
    }
  }, [isOpen, paymentToken])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Güvenli Ödeme</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 h-[calc(90vh-80px)]">
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0"
            title="PayTR Payment"
            sandbox="allow-same-origin allow-scripts allow-forms allow-top-navigation"
          />
        </div>
      </div>
    </div>
  )
}
