import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2A2A30] text-white text-sm">
      {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between md:items-start gap-8">
            {/* Logo & Address */}
            <div>
                <Image src="/images/logo.svg" alt="Logo Panglima" width={160} height={60} className="mb-4" />
                <p>Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur</p>
            </div>

            {/* Navigation */}
            <div>
                <h4 className="font-semibold mb-4">Panglima Propertindo</h4>
                <ul className="space-y-2">
                    <li><a href="#tentang-kami" className="hover:underline">Tentang Kami</a></li>
                    <li><a href="#project" className="hover:underline">Project</a></li>
                    <li><a href="#faq" className="hover:underline">Pertanyaan Umum</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-semibold mb-4">Kontak</h4>
                <ul className="space-y-3">
                    <li className="flex items-center gap-1"><img src="/icons/wa.svg" alt="Whatsapp" className="w-5 h-5" />081224090989 (chat)</li>
                    <li className="flex items-center gap-2"><Phone size={16} /> (021) 2829-0901</li>
                    <li className="flex items-center gap-2"><Mail size={16} /> Layanan@panglimapropertindo.com</li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-green-700 py-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white gap-4">
                <p>&copy; Copyright Panglima Propertindo 2024. All Right Reserved</p>
                <div className="flex items-center gap-4">
                    <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
                    <a href="#"><img src="/icons/x.svg" alt="X" className="w-5 h-5" /></a>
                    <a href="#"><img src="/icons/ig.svg" alt="Instagram" className="w-5 h-5" /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}
