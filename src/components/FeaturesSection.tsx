import Image from "next/image"
import { features } from "@/lib/features"

export default function FeaturesSection() {
    return (
        <section className="w-full py-20 bg-center bg-cover bg-gray-800" style={{backgroundImage:'url("/images/bg-pattern.png")'}}>
            <div className="max-w-7xl mx-auto px-6 text-white">
                <div className="max-w-7xl mx-auto px-6 text-white grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mb-5 items-center">
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                        Kenapa Harus <span className="text-orange-400"><br/>Panglima Propertindo?</span>
                    </h2>

                    <p className="text-sm md:text-base text-white/80">
                        Dengan komitmen penuh pada prinsip-prinsip syariah, kami menghadirkan properti berkualitas tinggi yang memberikan keamanan dan keberkahan bagi Anda dan keluarga.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, idx) => (
                        <div key={idx} className="bg-green-600 rounded-xl p-5 text-white">
                            <div className="flex items-center">
                                <Image
                                src={f.icon}
                                alt={f.title}
                                width={50}
                                height={50}
                                />   
                                <h3 className="font-bold text-lg">{f.title}</h3> 
                            </div>
                            <p className="text-sm mt-1 text-white/90">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}