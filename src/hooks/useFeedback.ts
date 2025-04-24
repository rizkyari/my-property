import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

type Feedback = {
    id: number
    id_category: number
    id_sub_category: number
    unit: string
    keluhan: string
    image?: string
    status: string
}

export function useFeedbacks() {
    return useQuery<Feedback[]>({
        queryKey: ["feedbacks"],
        queryFn: async () => {
            const res = await api.get("/feedback")
            return res.data
        }
    })
}