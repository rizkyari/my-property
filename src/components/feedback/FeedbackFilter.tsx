'use client'

import { useState, useEffect } from 'react'

type Props = {
  onFilterChange: (search: string, status: string) => void
}

export default function FeedbackFilter({ onFilterChange }: Props) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    onFilterChange(search, status)
  }, [search, status, onFilterChange])

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
      <input
        type="text"
        placeholder="Cari unit atau keluhan..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
      aria-label='status'
        className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 text-sm"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Semua Status</option>
        <option value="waiting">Waiting</option>
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  )
}
