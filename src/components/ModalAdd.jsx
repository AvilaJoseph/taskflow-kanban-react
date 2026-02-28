import { CircleX, ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { projectColors } from '../constants/projectColors'
import { projectStates } from '../constants/projectState'

export function ModalAdd({ onClose, dispatch }) {
    const [view, setView] = useState(null)
    const [color, setColor] = useState(projectColors[0])
    const [state, setState] = useState(projectStates[0])
    const [projectName, setProjectName] = useState("")

    function handleAddProject() {
        if (!projectName.trim()) return

        const newProject = {
            id: Date.now(),
            name: projectName,
            color,
            tasks: []
        }

        dispatch({
            type: "ADD_PROJECT",
            payload: newProject
        })
        setProjectName("")
        onClose()
    }
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-sm relative">
                {view === null && (
                    <div className="justify-items-end" onClick={onClose}>
                        <CircleX className='text-gray-400' />
                    </div>
                )}
                {!view && (
                    <div className='flex flex-col'>
                        <div className="flex flex-col gap-4">
                            <div className="mt-2 p-4 border border-transparent rounded-lg hover:border-gray-300 transition-all duration-200 hover:shadow-sm"
                                onClick={() => setView("project")}>
                                <h2 className="text-lg font-semibold">Add Project</h2>
                                <p className="text-gray-400 font-light mt-1">Create and manage your projects here (maximum of 5 projects).</p>
                            </div>

                            <div className="p-4 border border-transparent rounded-lg hover:border-gray-300 transition-all duration-200 hover:shadow-sm"
                                onClick={() => setView("task")}>
                                <h2 className="text-lg font-semibold">Add Task</h2>
                                <p className="text-gray-400 font-light mt-1">Select a project to assign this task.</p>
                            </div>
                        </div>
                    </div>
                )}
                {view === "project" && (
                    <div>
                        <div className="flex items-center justify-between">
                            <div className='flex gap-2'>
                                <button onClick={() => setView(null)}>
                                    <ChevronLeft className="text-gray-400" />
                                </button>
                                <h2 className="text-base font-semibold">Add Project</h2>
                            </div>
                            <button onClick={onClose}>
                                <CircleX className="text-gray-400" />
                            </button>
                        </div>
                        <div className='flex-col mt-4'>
                            <div>
                                <h3 className='text-sm font-base text-gray-400'>Name Project</h3>
                                <input type="text"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    placeholder="Enter project name"
                                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-0.8 focus:ring-black/20 focus:border-black/30 transition"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-sm font-base text-gray-400">Select Color</h3>

                                <div className="flex gap-3 mt-2">
                                    {projectColors.map((c) => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setColor(c)}
                                            className={`w-6 h-6 rounded-md ${c} border-2 ${color === c ? "border-black" : "border-transparent"}`}/>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <button onClick={handleAddProject}
                                    className='w-full bg-black text-white py-2 rounded-lg text-sm font-base'>Create Project</button>
                            </div>
                        </div>
                    </div>
                )}
                {view === "task" && (
                    <div>
                        <div className="flex items-center justify-between">
                            <div className='flex gap-2'>
                                <button onClick={() => setView(null)}>
                                    <ChevronLeft className="text-gray-400" />
                                </button>
                                <h2 className="text-base font-semibold">Add Task</h2>
                            </div>
                            <button onClick={onClose}>
                                <CircleX className="text-gray-400" />
                            </button>
                        </div>
                        <div className='flex-col mt-4'>
                            <div className='mt-4'>
                                <div className="flex items-center gap-2 w-full"><h3 className="text-sm font-base text-gray-400">Select Project</h3></div>
                                
                            </div>
                            <div className='mt-4'>
                                <h3 className='text-sm font-base text-gray-400'>Title Task</h3>
                                <input type="text" placeholder="Enter title task" className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-0.5 focus:ring-black/20 focus:border-black/30 transition" />
                            </div>
                            <div className='mt-4'>
                                <div className="flex items-center gap-2 w-full"><h3 className="text-sm font-base text-gray-400">Status Task</h3></div>
                                <select name="" id="" className='mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-0.5 focus:ring-black/20 focus:border-black/30 transition'>
                                    {projectStates.map((c) => (
                                        <option key={c.value} value={c.value}>{c.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mt-4'>
                                <h3 className='text-sm font-base text-gray-400'>Description Task</h3>
                                <textarea placeholder="Enter task description" rows={4} className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-0.5 focus:ring-black/20 focus:border-black/30 transition" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}   