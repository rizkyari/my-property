import { ShoppingCart } from 'lucide-react'

export default function BookingSection(){
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="bg-orange-400 text-white text-center py-16 md:py-20 px-6 rounded-xl relative overflow-hidden max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Booking Sekarang!</h2>
                <p className="mb-6 text-sm md:text-base">
                    Tunggu apalagi, booking sekarang property syariah impian Anda
                </p>

                <button className="cursor-pointer bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 relative z-10">
                    <ShoppingCart />
                        Daftar & Beli NUB
                </button>

                <img
                src="/images/pattern-booking.png"
                alt="Pattern Background"
                className="absolute bottom-0 left-0 w-full object-cover z-0 opacity-30"
                />
            </div>
        </section>
    )
}