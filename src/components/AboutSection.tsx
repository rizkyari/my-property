import Image from "next/image"
import {stats, StatItem} from "@/lib/stats"

export default function AboutSection(){
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Tentang Kami
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-6 mb-10">
                    <Image
                    src="/images/logo.svg"
                    alt="Logo Panglima"
                    width={200}
                    height={80}
                    className="object-contain"
                    />
                    <p className="text-gray-700 text-base leading-relaxed">
                        Sejak 1880, Panglima Propertindo menjadi Developer Syariah yang berkomitmen menyediakan Properti Halal Berkualitas bagi Ummat dengan Lingkungan yang Baik.
                    </p>
                </div>

                <div className="px-6">
                    <div className="relative overflow-hidden rounded-xl mb-10">
                        <Image
                        src="/images/stat-cover.png"
                        alt="Stats Background"
                        width={1200}
                        height={400}
                        className="w-full h-48 md:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 px-6 md:px-12">
                            <div className="flex items-center justify-between h-full gap-4 max-w-7xl mx-auto overflow-x-auto">
                                {stats.map((s: StatItem, idx: number) => (
                                    <div
                                    key={idx}
                                    className="w-[180px] border-2 border-white bg-green-700 text-white px-4 py-6 rounded-lg text-center shadow-md flex-shrink-0"
                                    >
                                        <div className="text-xl font-bold">{s.value}</div>
                                        <div className="text-sm">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white border border-gray-300 p-6 rounded-xl mb-6">
                        <h3 className="font-bold text-gray-800 mb-2">Visi</h3>
                        <p className="text-gray-700">
                            Menjadi Developer Property Syariah Kelas Dunia, pengembang lingkungan pemukiman yang baik yang Menenangkan Hati.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-300 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-800 mb-2">Misi</h3>
                        <ul className="text-gray-700 list-disc ps-5 space-y-1">
                            <li>Mengembangkan proyek Property yang memberi value terbaik & ketenangan hati.</li>
                            <li>Membentuk lingkungan yang berperan nyata dalam pembentukan Peradaban Mulia.</li>
                            <li>Bertumbuh dengan Cepat dan berkesinambungan sehingga dapat mensejahterakan para pemangku kepentingan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}