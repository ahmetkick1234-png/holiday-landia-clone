import type { Metadata } from "next"
import { KVKKClient } from "./_components/kvkk-client"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Holidaylandia",
  description: "Holidaylandia KVKK aydınlatma metni ve kişisel verilerin korunması",
}

export default function KVKKPage() {
  return <KVKKClient />
}
