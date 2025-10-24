"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SiteHeader />

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {language === "tr" ? "Gizlilik Politikası" : "Privacy Policy"}
          </h1>
          <div className="flex gap-2">
            <Button
              variant={language === "tr" ? "default" : "outline"}
              onClick={() => setLanguage("tr")}
              className={language === "tr" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              Türkçe
            </Button>
            <Button
              variant={language === "en" ? "default" : "outline"}
              onClick={() => setLanguage("en")}
              className={language === "en" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              English
            </Button>
          </div>
        </div>

        {language === "tr" && (
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Kişisel Verilerin Toplanması</h2>
              <p>Holidaylandia olarak, hizmetlerimizi sunabilmek için aşağıdaki kişisel verilerinizi topluyoruz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ad, soyad ve iletişim bilgileri</li>
                <li>E-posta adresi ve telefon numarası</li>
                <li>Pasaport bilgileri (rezervasyon için gerekli olduğunda)</li>
                <li>Ödeme bilgileri (güvenli ödeme sistemleri üzerinden)</li>
                <li>Seyahat tercihleri ve özel istekler</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Verilerin Kullanım Amaçları</h2>
              <p>Topladığımız kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rezervasyon ve tur organizasyonu hizmetlerinin sunulması</li>
                <li>Müşteri hizmetleri ve destek sağlanması</li>
                <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Pazarlama ve tanıtım faaliyetleri (onay vermeniz halinde)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Veri Güvenliği</h2>
              <p>Kişisel verilerinizin güvenliği bizim için önceliklidir. Verilerinizi korumak için:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL şifrelemesi kullanıyoruz</li>
                <li>Güvenli sunucularda saklıyoruz</li>
                <li>Düzenli güvenlik denetimleri yapıyoruz</li>
                <li>Yetkisiz erişime karşı önlemler alıyoruz</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Çerezler (Cookies)</h2>
              <p>
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. Çerezleri tarayıcı
                ayarlarınızdan yönetebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Üçüncü Taraflarla Paylaşım</h2>
              <p>
                Kişisel verileriniz, hizmet sunabilmek için gerekli olan durumlarda (otel rezervasyonları, ulaşım
                hizmetleri vb.) güvenilir iş ortaklarımızla paylaşılabilir. Verileriniz asla ticari amaçlarla üçüncü
                taraflara satılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Haklarınız</h2>
              <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
                <li>Verilerin aktarıldığı üçüncü kişileri öğrenme</li>
                <li>Otomatik sistemlerle analiz edilmesine itiraz etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. İletişim</h2>
              <p>Gizlilik politikamız hakkında sorularınız veya talepleriniz için:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>E-posta:</strong> contact@holidaylandia.com
                </p>
                <p>
                  <strong>Adres:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                </p>
              </div>
            </section>

            <p className="text-sm text-gray-600 mt-8">Son güncelleme: 21 Ocak 2025</p>
          </div>
        )}

        {language === "en" && (
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Collection of Personal Data</h2>
              <p>As Holidaylandia, we collect the following personal data to provide our services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, surname and contact information</li>
                <li>Email address and phone number</li>
                <li>Passport information (when required for booking)</li>
                <li>Payment information (through secure payment systems)</li>
                <li>Travel preferences and special requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Purpose of Data Usage</h2>
              <p>The personal data we collect is used for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing booking and tour organization services</li>
                <li>Providing customer service and support</li>
                <li>Processing payment transactions</li>
                <li>Fulfilling legal obligations</li>
                <li>Marketing and promotional activities (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Data Security</h2>
              <p>The security of your personal data is our priority. To protect your data, we:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use SSL encryption</li>
                <li>Store on secure servers</li>
                <li>Conduct regular security audits</li>
                <li>Take measures against unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Cookies</h2>
              <p>
                Our website uses cookies to improve user experience. You can manage cookies through your browser
                settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Sharing with Third Parties</h2>
              <p>
                Your personal data may be shared with our trusted business partners when necessary to provide services
                (hotel reservations, transportation services, etc.). Your data is never sold to third parties for
                commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Your Rights</h2>
              <p>Under GDPR and KVKK, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Learn whether your personal data is being processed</li>
                <li>Request information if it has been processed</li>
                <li>Request correction or deletion of data</li>
                <li>Learn about third parties to whom data has been transferred</li>
                <li>Object to automated analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Contact</h2>
              <p>For questions or requests regarding our privacy policy:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Email:</strong> contact@holidaylandia.com
                </p>
                <p>
                  <strong>Address:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                </p>
              </div>
            </section>

            <p className="text-sm text-gray-600 mt-8">Last updated: January 21, 2025</p>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  )
}
