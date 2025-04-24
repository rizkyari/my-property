import FeedbackForm from "@/components/feedback/FeedbackForm"
import FeedbackList from "@/components/feedback/FeedbackList"

export default function FeedbackPage() {
    return(
        <main className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-10">Feedback Customer</h1>

            <FeedbackForm/>
            <FeedbackList/>
        </main>
    )
}