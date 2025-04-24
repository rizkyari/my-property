'use client'

import { useCategories } from "@/hooks/useCategories"
import { useSubCategories } from "@/hooks/useSubcategories"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

import api from "@/lib/api"

type FormValues = {
    id_category: number
    id_sub_category: number
    unit: string
    keluhan: string
}

export default function FeedbackForm() {
    const {data, isLoading, isError} = useCategories()
    const [images, setImages] = useState<File[]>([])
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

    const { data: subcategories, isLoading: loadingSubCategories} = useSubCategories(selectedCategory)
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>()

    const mutation = useMutation({
        mutationFn: async (formData: FormValues) => {
            const res = await api.post('/feedback', formData)
            return res.data
        },
        onSuccess: () => {
            alert('Feedback berhasil dikirim!')
            reset()
            setImages([])
            setSelectedCategory(null)
        },
        onError: () => {
            alert('Gagal mengirim feedback')
        },
    })

    const onSubmit = (data: FormValues) => {
        mutation.mutate(data)
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? [])
        setImages(files)
    }
    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow mb-12">
            <h2 className="text-xl font-bold text-gray-900">Buat Feedback Baru</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="my-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>

                {isLoading && <p>Loading kategori...</p>}
                {isError && <p>Gagal memuat kategori</p>}

                {!isLoading && !isError && (
                <select
                aria-label="category"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                {...register('id_category', {required: "kategori wajib dipilih"})}
                onChange={(e) => {
                const id = parseInt(e.target.value)
                setSelectedCategory(isNaN(id) ? null : id)
                }}
                >
                    <option value="">Pilih Kategori</option>
                        {data?.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                </select>
                )}
                {errors.id_category && <p className="text-red-500 text-sm">{errors.id_category.message}</p>}
            </div>

            {selectedCategory && (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sub Kategori</label>
                    <select
                    aria-label="sub-category"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    disabled={loadingSubCategories}
                    {...register("id_sub_category", {required: "sub kategori wajib dipilih"})}
                    >
                        <option value="">Pilih Subkategori</option>
                        {subcategories?.map((sub) => (
                            <option key={sub.id} value={sub.id}>{sub.name}</option>
                        ))}
                    </select>
                    {errors.id_sub_category && <p className="test-red-500 text-sm">{errors.id_sub_category.message}</p>}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                <input
                type="text"
                placeholder="Unit anda.."
                 className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                {...register("unit", {required: "Unit wajib diisi"})}
                />
                {errors.unit && <p className="text-red-500 text-sm">{errors.unit.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keluhan</label>
                <textarea
                    rows={4}
                    placeholder="Masukkan keluhan anda..."
                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    {...register("keluhan", {required: 'Keluhan wajib diisi'})}
                />
                {errors.keluhan && <p className="text-red-500 text-sm">{errors.keluhan.message}</p>}
            </div>

            <div className="mb-10">
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Gambar(Opsional)</label>
                <input
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                />
                <label
                htmlFor="image-upload"
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer"
                >
                    {images.length > 0 ? 'Tambah Gambar' : 'Upload Gambar'}
                </label>
                {images.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-4">
                        {images.map((file,i) => (
                            <img
                            key={i}
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${i}`}
                            className="w-24 h-24 object-cover rounded-md border"
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-end">
            <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md cursor-pointer"
            disabled={mutation.isPending}
            >
                {mutation.isPending ? 'Mengirim...' : 'Kirim Feedback'}
            </button>
            </div>
            </form>
        </div>
    )
}