"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export function KVKKClient() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Site Header */}
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
            <h1 className="text-4xl font-bold mb-8 text-gray-900">KVKK Aydınlatma Metni</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Veri Sorumlusu</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p>
                    <strong>Şirket:</strong> HOLİDAYLANDİA TURİZM VE SANAYİ TİCARET LİMİTED ŞİRKETİ
                  </p>
                  <p>
                    <strong>Adres:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                  </p>
                  <p>
                    <strong>E-posta:</strong> contact@holidaylandia.com
                  </p>
                  <p>
                    <strong>Vergi Dairesi:</strong> ANTALYA KURUMLAR
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Kişisel Verilerin İşlenme Amacı</h2>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz aşağıdaki
                  amaçlarla işlenmektedir:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Seyahat ve tur organizasyonu hizmetlerinin sunulması</li>
                  <li>Rezervasyon ve ödeme işlemlerinin gerçekleştirilmesi</li>
                  <li>Müşteri memnuniyetinin sağlanması ve hizmet kalitesinin artırılması</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>İletişim faaliyetlerinin yürütülmesi</li>
                  <li>Pazarlama ve tanıtım faaliyetleri (açık rızanız dahilinde)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. İşlenen Kişisel Veriler</h2>
                <p>Aşağıdaki kategorilerdeki kişisel verileriniz işlenmektedir:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası, pasaport numarası
                  </li>
                  <li>
                    <strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres
                  </li>
                  <li>
                    <strong>Müşteri İşlem Bilgileri:</strong> Rezervasyon bilgileri, tur tercihleri, özel istekler
                  </li>
                  <li>
                    <strong>Finansal Bilgiler:</strong> Ödeme bilgileri (güvenli ödeme sistemleri üzerinden)
                  </li>
                  <li>
                    <strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, çerez kayıtları, log kayıtları
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Kişisel Verilerin Aktarılması</h2>
                <p>Kişisel verileriniz, hizmetlerimizi sunabilmek amacıyla aşağıdaki taraflara aktarılabilir:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Otel ve konaklama tesisleri</li>
                  <li>Ulaşım hizmeti sağlayıcıları</li>
                  <li>Ödeme hizmeti sağlayıcıları (PayTR vb.)</li>
                  <li>Yasal yükümlülükler çerçevesinde kamu kurum ve kuruluşları</li>
                  <li>Hizmet alınan yurt içi ve yurt dışı iş ortakları</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
                </h2>
                <p>
                  Kişisel verileriniz, web sitemiz, e-posta, telefon ve fiziksel ortamda doldurduğunuz formlar
                  aracılığıyla toplanmaktadır. Verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sözleşmenin kurulması ve ifası</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>Meşru menfaatlerimiz</li>
                  <li>Açık rızanız</li>
                </ul>
                <p>hukuki sebeplerine dayanılarak işlenmektedir.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Kişisel Veri Sahibinin Hakları</h2>
                <p>KVKK'nın 11. maddesi uyarınca, kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                  <li>
                    Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme
                  </li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                  <li>
                    Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme
                  </li>
                  <li>
                    KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok
                    edilmesini isteme
                  </li>
                  <li>
                    Düzeltme, silme ve yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere
                    bildirilmesini isteme
                  </li>
                  <li>
                    İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir
                    sonucun ortaya çıkmasına itiraz etme
                  </li>
                  <li>
                    Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın
                    giderilmesini talep etme
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Başvuru Yöntemi</h2>
                <p>Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:</p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p>
                    <strong>E-posta:</strong> contact@holidaylandia.com
                  </p>
                  <p>
                    <strong>Telefon (İspanya):</strong> +34 637 926 988
                  </p>
                  <p>
                    <strong>Telefon (Türkiye):</strong> +90 535 597 3207 / +90 541 790 3207
                  </p>
                  <p>
                    <strong>Posta:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Başvurularınız, talebinizin niteliğine göre en geç 30 gün içinde ücretsiz olarak
                    sonuçlandırılacaktır. İşlemin ayrıca bir maliyeti gerektirmesi halinde, Kişisel Verileri Koruma
                    Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
                  </p>
                </div>
              </section>

              <p className="text-sm text-gray-600 mt-8">Son güncelleme: 21 Ocak 2025</p>
            </div>
          </>
        ) : (
          // English Version
          <>
            <h1 className="text-4xl font-bold mb-8 text-gray-900">GDPR Information Notice</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Data Controller</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p>
                    <strong>Company:</strong> HOLİDAYLANDİA TURİZM VE SANAYİ TİCARET LİMİTED ŞİRKETİ
                  </p>
                  <p>
                    <strong>Address:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                  </p>
                  <p>
                    <strong>Email:</strong> contact@holidaylandia.com
                  </p>
                  <p>
                    <strong>Tax Office:</strong> ANTALYA KURUMLAR
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Purpose of Processing Personal Data</h2>
                <p>
                  In accordance with Law No. 6698 on the Protection of Personal Data ("KVKK"), your personal data is
                  processed for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing travel and tour organization services</li>
                  <li>Processing reservations and payments</li>
                  <li>Ensuring customer satisfaction and improving service quality</li>
                  <li>Fulfilling legal obligations</li>
                  <li>Conducting communication activities</li>
                  <li>Marketing and promotional activities (with your explicit consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Personal Data Processed</h2>
                <p>The following categories of personal data are processed:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Identity Information:</strong> Name, surname, ID number, passport number
                  </li>
                  <li>
                    <strong>Contact Information:</strong> Phone number, email address, address
                  </li>
                  <li>
                    <strong>Customer Transaction Information:</strong> Reservation details, tour preferences, special
                    requests
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Payment information (through secure payment systems)
                  </li>
                  <li>
                    <strong>Transaction Security Information:</strong> IP address, cookie records, log records
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Transfer of Personal Data</h2>
                <p>Your personal data may be transferred to the following parties to provide our services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hotels and accommodation facilities</li>
                  <li>Transportation service providers</li>
                  <li>Payment service providers (PayTR, etc.)</li>
                  <li>Public institutions and organizations within the framework of legal obligations</li>
                  <li>Domestic and international business partners from whom services are received</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  4. Method and Legal Basis of Personal Data Collection
                </h2>
                <p>
                  Your personal data is collected through our website, email, phone, and forms you fill out in physical
                  environments. Your data is processed based on the following legal grounds specified in Articles 5 and
                  6 of the KVKK:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Establishment and performance of the contract</li>
                  <li>Fulfillment of legal obligations</li>
                  <li>Our legitimate interests</li>
                  <li>Your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Rights of Data Subjects</h2>
                <p>In accordance with Article 11 of the KVKK, as data subjects, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To learn whether your personal data is being processed</li>
                  <li>To request information if your personal data has been processed</li>
                  <li>
                    To learn the purpose of processing your personal data and whether they are used in accordance with
                    their purpose
                  </li>
                  <li>To know the third parties to whom your personal data is transferred domestically or abroad</li>
                  <li>To request correction of your personal data if it is incomplete or incorrectly processed</li>
                  <li>
                    To request deletion or destruction of your personal data within the framework of the conditions
                    stipulated in Article 7 of the KVKK
                  </li>
                  <li>
                    To request notification of correction, deletion, and destruction operations to third parties to whom
                    personal data has been transferred
                  </li>
                  <li>
                    To object to the occurrence of a result against you by analyzing the processed data exclusively
                    through automated systems
                  </li>
                  <li>
                    To request compensation for damages if you suffer damage due to unlawful processing of your personal
                    data
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Application Method</h2>
                <p>To exercise the rights stated above, you can apply through the following methods:</p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p>
                    <strong>Email:</strong> contact@holidaylandia.com
                  </p>
                  <p>
                    <strong>Phone (Spain):</strong> +34 637 926 988
                  </p>
                  <p>
                    <strong>Phone (Turkey):</strong> +90 535 597 3207 / +90 541 790 3207
                  </p>
                  <p>
                    <strong>Mail:</strong> KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Your applications will be concluded free of charge within 30 days at the latest, depending on the
                    nature of your request. If the transaction requires an additional cost, the fee specified in the
                    tariff determined by the Personal Data Protection Board may be charged.
                  </p>
                </div>
              </section>

              <p className="text-sm text-gray-600 mt-8">Last updated: January 21, 2025</p>
            </div>
          </>
        )}
      </div>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}
