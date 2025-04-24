type Props = {
    status: string
}
  
const statusColorMap: Record<string, string> = {
    waiting: "bg-gray-400",
    pending: "bg-amber-500",
    in_progress: "bg-blue-500",
    resolved: "bg-green-600",
}
  
export default function StatusBadge({ status }: Props) {
    const color = statusColorMap[status] || "bg-gray-300"
  
    return (
        <div className="flex items-center gap-2 text-sm text-gray-700 capitalize">
            Status : <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
            {status.replace("_", " ")}
        </div>
    )
}
  