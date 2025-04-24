import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh]">
      <Image
      src="/images/hero.png"
      alt="Hero Background"
      fill
      className="object-cover object-center -z-10"
      priority
      />

      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-xl"> 
          <span className="text-green-500">Hidup Nyaman & Berkah</span>{' '}
          <span className="text-gray-800">dengan Properti Syariah Kelas Dunia</span>{' '}
          <Image
          src="/images/hero-icon.png"
          alt="Icon Hero"
          width={100}
          height={30}
          className="inline align-middle ml-2"
          />
        </h1>
        <p className="text-gray-800 mt-4 max-w-md">
          Developer Properti Syariah terdepan menghadirkan solusi properti tanpa riba dan sesuai prinsip syariah. Daftar dan booking sekarang juga!
        </p>
        <Link
        href="#booking"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition w-fit font-bold"
        >
          Daftar & Beli NUB
        </Link>
      </div>
    </section>
  )
}
