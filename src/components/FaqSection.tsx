'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { faqData } from '@/lib/faq'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx))
  }

  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Pertanyaan Umum</h2>
            <div className='px-6'>
                {faqData.map((item, idx) => (
                    <div key={idx} className="border-t border-dashed border-gray-300 py-6">
                        <button
                        onClick={() => toggleIndex(idx)}
                        className="w-full flex justify-between items-center text-left font-semibold text-gray-900 cursor-pointer"
                        >
                            {item.question}
                            {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                        </button>

                        {openIndex === idx && (
                            <div className="mt-4 text-sm text-gray-600 space-y-2">
                                {item.answer.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className="border-t border-dashed border-gray-300" />
            </div>
        </div>
    </section>
  )
}
