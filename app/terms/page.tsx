"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SiteHeader />

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex justify-end gap-2 mb-6">
          <Button
            variant={language === "tr" ? "default" : "outline"}
            onClick={() => setLanguage("tr")}
            className="min-w-[100px]"
          >
            Türkçe
          </Button>
          <Button
            variant={language === "en" ? "default" : "outline"}
            onClick={() => setLanguage("en")}
            className="min-w-[100px]"
          >
            English
          </Button>
        </div>

        {language === "tr" ? (
          // Turkish Version
          <>
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Kullanım Koşulları</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Genel Hükümler</h2>
                <p>
                  Bu web sitesi HOLİDAYLANDİA TURİZM VE SANAYİ TİCARET LİMİTED ŞİRKETİ tarafından işletilmektedir. Web
                  sitemizi kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Hizmet Kapsamı</h2>
                <p>
                  Holidaylandia, Türkiye genelinde tur organizasyonu, otel rezervasyonu ve seyahat danışmanlığı
                  hizmetleri sunmaktadır. Sunulan hizmetler ve fiyatlar önceden haber verilmeksizin değiştirilebilir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Rezervasyon ve İptal Koşulları</h2>
                <p>
                  Rezervasyonlar onay e-postası ile kesinleşir. İptal işlemleri için en az 7 gün önceden bildirimde
                  bulunulması gerekmektedir. İptal koşulları tur tipine göre değişiklik gösterebilir.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>7 günden fazla önceden iptal: %100 iade</li>
                  <li>3-7 gün arası iptal: %50 iade</li>
                  <li>3 günden az iptal: İade yapılmaz</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Ödeme Koşulları</h2>
                <p>
                  Ödemeler kredi kartı, banka havalesi veya PayTR güvenli ödeme sistemi üzerinden yapılabilir. Tüm
                  ödemeler güvenli SSL şifrelemesi ile korunmaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Sorumluluk Sınırlamaları</h2>
                <p>
                  Holidaylandia, hava koşulları, doğal afetler veya kontrol dışı olaylar nedeniyle oluşabilecek
                  değişikliklerden sorumlu değildir. Müşterilerimizin seyahat sigortası yaptırması önerilir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Fikri Mülkiyet Hakları</h2>
                <p>
                  Bu web sitesindeki tüm içerik, görseller ve tasarımlar Holidaylandia'ya aittir ve telif hakkı ile
                  korunmaktadır. İzinsiz kullanımı yasaktır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. İletişim</h2>
                <p>Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Adres:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                  </p>
                  <p>
                    <strong>E-posta:</strong> contact@holidaylandia.com
                  </p>
                  <p>
                    <strong>Telefon (İspanya):</strong> +34 637 926 988
                  </p>
                  <p>
                    <strong>Telefon (Türkiye):</strong> +90 535 597 3207 / +90 541 790 3207
                  </p>
                </div>
              </section>

              <p className="text-sm text-gray-600 mt-8">Son güncelleme: 21 Ocak 2025</p>
            </div>
          </>
        ) : (
          // English Version
          <>
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. General Provisions</h2>
                <p>
                  This website is operated by HOLİDAYLANDİA TURİZM VE SANAYİ TİCARET LİMİTED ŞİRKETİ. By using our
                  website, you agree to accept the following terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Scope of Services</h2>
                <p>
                  Holidaylandia provides tour organization, hotel reservation, and travel consultancy services
                  throughout Turkey. Services and prices are subject to change without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Reservation and Cancellation Terms</h2>
                <p>
                  Reservations are confirmed via confirmation email. Cancellations must be notified at least 7 days in
                  advance. Cancellation terms may vary depending on the tour type.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellation more than 7 days in advance: 100% refund</li>
                  <li>Cancellation 3-7 days in advance: 50% refund</li>
                  <li>Cancellation less than 3 days: No refund</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Payment Terms</h2>
                <p>
                  Payments can be made via credit card, bank transfer, or PayTR secure payment system. All payments are
                  protected with secure SSL encryption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Limitation of Liability</h2>
                <p>
                  Holidaylandia is not responsible for changes that may occur due to weather conditions, natural
                  disasters, or events beyond our control. We recommend that our customers purchase travel insurance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Intellectual Property Rights</h2>
                <p>
                  All content, images, and designs on this website belong to Holidaylandia and are protected by
                  copyright. Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Contact</h2>
                <p>For questions about our terms of service, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Address:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                  </p>
                  <p>
                    <strong>Email:</strong> contact@holidaylandia.com
                  </p>
                  <p>
                    <strong>Phone (Spain):</strong> +34 637 926 988
                  </p>
                  <p>
                    <strong>Phone (Turkey):</strong> +90 535 597 3207 / +90 541 790 3207
                  </p>
                </div>
              </section>

              <p className="text-sm text-gray-600 mt-8">Last updated: January 21, 2025</p>
            </div>
          </>
        )}
      </div>

      <SiteFooter />
    </div>
  )
}
