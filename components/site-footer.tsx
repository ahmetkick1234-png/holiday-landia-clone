import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Holidaylandia</h3>
            <p className="text-gray-400">Premium travel experiences</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/terms" className="block text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/kvkk" className="block text-gray-400 hover:text-white">
                KVKK
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">contact@holidaylandia.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <p className="text-gray-400">
              Avda Pino Montano No : 45
              <br />
              41015 Sevilla, Spain
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Holidaylandia. All rights reserved.</p>
          <p className="text-sm mt-2">HOLİDAYLANDİA TURİZM VE SANAYİ TİCARET LİMİTED ŞİRKETİ</p>
        </div>
      </div>
    </footer>
  )
}
