import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ödeme Başarılı!</h1>
        <p className="text-gray-600 mb-8">
          Rezervasyonunuz başarıyla oluşturuldu. Onay e-postası kısa süre içinde tarafınıza gönderilecektir.
        </p>
        <div className="space-y-4">
          <Link href="/tours">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Turlara Dön</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full bg-transparent">
              Ana Sayfa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
