export default function FeedbackSkeleton() {
    return (
        <div className="bg-white rounded-lg shadow p-4 border border-gray-100 animate-pulse space-y-3">
            <div className="flex justify-between items-center">
                <div className="h-3 w-24 bg-gray-300 rounded" />
                <div className="h-3 w-16 bg-gray-300 rounded" />
            </div>
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-3 w-full bg-gray-200 rounded" />
            <div className="h-3 w-1/2 bg-gray-200 rounded" />
        </div>
    )
}  