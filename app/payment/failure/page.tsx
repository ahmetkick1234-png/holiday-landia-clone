import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="mb-6">
          <XCircle className="h-20 w-20 text-red-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ödeme Başarısız</h1>
        <p className="text-gray-600 mb-8">
          Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin veya farklı bir ödeme yöntemi kullanın.
        </p>
        <div className="space-y-4">
          <Link href="/tours">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Tekrar Dene</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full bg-transparent">
              Destek Al
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
