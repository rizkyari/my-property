import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'

type ProjectCardProps = {
    image: string
    title: string
    address: string
    mapLink: string
    tags: string[]
}

export default function ProjectCard({
    image,
    title,
    address,
    mapLink,
    tags,
}: ProjectCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className='p-4'>
                <Image
                src={image}
                alt={title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
                />
                <h3 className="font-semibold text-gray-800 mt-2">{title}</h3>
                <div className='flex items-center my-3'>
                    <MapPin size={25} className="mt-0.5 text-orange-500 shrink-0 me-2" />
                    <div className="flex-1 min-w-0 flex flex-col">
                        <span className="truncate text-sm text-gray-700">{address}</span>
                        <Link
                        href={mapLink}
                        className="text-sm text-orange-500 flex items-center gap-1 hover:underline underline-offset-2"
                        target="_blank"
                        >
                            Lihat di Map <ExternalLink size={14} />
                        </Link>
                    </div>
                </div>

                <div className='mb-1 text-md text-gray-500'>
                    Tipe Unit
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-sm bg-orange-50 text-gray-800 px-3 py-1 rounded-full border border-amber-600">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
