import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

type Category = {
    id: number
    name: string
}

export function useCategories() {
    return useQuery<Category[]>({
        queryKey:['feedback-categories'],
        queryFn: async () => {
            const res = await api.get('feedback-category')
            return res.data
        }
    })
}