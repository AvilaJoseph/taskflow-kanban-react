import { Column } from "./Column";

export function Columns({
    projects
}) {
    return (
        <div className="grid gap-6 mt-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {projects.map(project =>(
                <Column key={project.id} project={project}/>
            ))}
        </div>
    )
}