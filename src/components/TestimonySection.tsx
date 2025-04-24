'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import { testimonials } from "@/lib/testimonials"
import 'swiper/css'
import 'swiper/css/pagination'

export default function TestimonySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Ulasan dari Konsumen</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{  clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
            <div className="h-full flex">
              <div className="bg-white p-6 rounded-xl shadow-md text-sm text-gray-700 w-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-full object-cover"
                      alt={item.name}
                    />
                    <h4 className="font-semibold">{item.name}</h4>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                      key={i}
                      size={16}
                      className={i < item.rating ? 'text-orange-400' : 'text-gray-400'}
                      fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="leading-relaxed">{item.review}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6"></div>

        <div className="swiper-pagination mt-8 flex justify-center" />
      </div>
    </section>
  )
}
