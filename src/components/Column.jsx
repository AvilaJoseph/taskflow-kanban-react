import { Cards } from "./Cards"

export function Column({
    project
}){
    return(
        <div className="flex flex-col">
            <span className={`w-full h-2 rounded-sm ${project.color} mb-4`}></span>
            <h2 className="mb-4 font-semibold text-gray-500">{project.name}</h2>
            <div className="grid grid-row-auto gap-4">
                {project.tasks.map(task =>(
                    <Cards key={task.id} task={task} color={project.color}/>
                ))}
            </div>
        </div>
    )
}