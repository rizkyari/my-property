import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

type Subcategory = {
  id: number
  id_category: number
  name: string
}

export function useSubCategories(id_category: number | null) {
    return useQuery<Subcategory[]>({
        queryKey: ['feedback-subcategories', id_category],
        queryFn: async () => {
            if(id_category === null) return []
            const res = await api.get(`/feedback-sub-category?id_category=${id_category}`)
            return res.data
        },
        enabled: !!id_category
    })
}