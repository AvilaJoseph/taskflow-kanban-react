import { Cards } from "./Cards";
import Swal from "sweetalert2"

export function Column({
    project,
    dispatch,
    setActiveModal,
    activeTaskMenu,
    setActiveTaskMenu,
    activeProjectMenu,
    setActiveProjectMenu
}) {

    const isProjectMenuOpen = activeProjectMenu === project.id

    return (
        <div className="flex flex-col relative">
            <span className={`w-full h-2 rounded-sm ${project.color} mb-4`} />

            <div className="flex justify-between items-center relative mb-4">
                <h2 className="font-semibold text-gray-500">{project.name}</h2>

                <button className="font-semibold text-gray-500" onClick={() => {
                    setActiveProjectMenu(prev => prev === project.id ? null : project.id)
                    setActiveTaskMenu(null)
                }}>...
                </button>

                {isProjectMenuOpen && (
                    <div className="absolute right-0 top-8 w-40 bg-white rounded-xl shadow-lg p-2 z-50">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100"
                            onClick={() => {
                                setActiveModal({
                                    type: "editProject",
                                    project
                                })
                                setActiveProjectMenu(null)
                            }}>
                            Edit Project
                        </button>
                        <button
                            className="block w-full text-left px-4 py-2 text-sm text-red-500 rounded-lg hover:bg-gray-100"
                            onClick={() => {
                                Swal.fire({
                                    title: "Delete project?",
                                    text: "All tasks inside this project will be permanently removed.",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#000",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it"
                                }).then((result) => {
                                    if (result.isConfirmed) {

                                        dispatch({
                                            type: "DELETE_PROJECT",
                                            payload: project.id
                                        })

                                        setActiveProjectMenu(null)

                                        Swal.fire({
                                            title: "Deleted!",
                                            text: "Project has been removed.",
                                            icon: "success",
                                            timer: 1200,
                                            showConfirmButton: false
                                        })
                                    }
                                })
                            }}
                        >
                            Delete Project
                        </button>
                    </div>
                )}
            </div>

            <div className="grid grid-row-auto gap-4">
                {project.tasks.map(task => (
                    <Cards
                        key={task.id}
                        task={task}
                        projectId={project.id}
                        dispatch={dispatch}
                        color={project.color}
                        setActiveModal={setActiveModal}
                        activeTaskMenu={activeTaskMenu}
                        setActiveTaskMenu={setActiveTaskMenu}
                        setActiveProjectMenu={setActiveProjectMenu}
                    />
                ))}
            </div>
        </div>
    )
}