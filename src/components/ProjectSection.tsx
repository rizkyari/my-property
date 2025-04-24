import ProjectCard from "./ProjectCard"
import { projects } from "@/lib/projects"

export default function ProjectSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Project</h2>
            <p className="text-gray-500 mt-2 mb-8">
                Berikut adalah daftar project dari Panglima Propertindo
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, i) => (
                    <ProjectCard key={i} {...proj} />
                ))}
            </div>
      </div>
    </section>
  )
}
