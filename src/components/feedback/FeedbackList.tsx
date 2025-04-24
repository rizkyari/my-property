'use client'

import { useMemo, useState } from "react"
import { useFeedbacks } from "@/hooks/useFeedback"
import { useDebounce } from "../useDebounce"
import StatusBadge from "../StatusBadge"
import FeedbackFilter from "./FeedbackFilter"
import FeedbackSkeleton from "./FeedbackSkeleton"


export default function FeedbackList() {
    const { data, isLoading, isError } = useFeedbacks()

    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('')

    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    const filteredData = useMemo(() => {
        if (!data) return []

        return data.filter((item) => {
            const matchesSearch =
            item.unit.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            item.keluhan.toLowerCase().includes(debouncedSearchTerm.toLowerCase())

            const matchesStatus =
            !statusFilter || item.status === statusFilter

            return matchesSearch && matchesStatus
        })
    }, [data, debouncedSearchTerm, statusFilter])

    const handleFilterChange = (search: string, status: string) => {
        setSearchTerm(search)
        setStatusFilter(status)
    }

    if (isLoading) {
        return (
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <FeedbackSkeleton key={i} />
            ))}
          </div>
        )
    }
    if (isError) return <p>Failed to fetch feedback data</p>

  return (
    <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">List Feedbacks</h2>
        <FeedbackFilter onFilterChange={handleFilterChange} />

        {filteredData.length === 0 && (
            <p className="text-sm text-gray-500">Tidak ada feedback ditemukan.</p>
        )}

        {filteredData?.map((item) => (
            <div
            key={item.id}
            className="bg-white rounded-lg shadow p-4 border border-gray-100"
            >
                <div>
                    <StatusBadge status={item.status} />
                </div>
                <div className="font-semibold text-gray-800">{item.unit}</div>
                <p className="text-sm text-gray-600 mt-1">{item.keluhan}</p>
                {item.image && (
                    <img
                    src={item.image}
                    alt="Feedback Attachment"
                    className="mt-2 max-h-48 object-contain rounded"
                    />
                )}
            </div>
        ))}
    </div>
  )
}
