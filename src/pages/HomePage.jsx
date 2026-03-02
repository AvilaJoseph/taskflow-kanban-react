import { useReducer, useEffect, useState } from "react"
import { Kanban } from "../components/Kanban"
import { MenuTask } from "../components/MenuTask"
import { ModalAdd } from "../components/ModalAdd"
import { ModalEditProject } from "../components/ModalEditProject"
import { projectReducer } from "../reducers/projectReducer"

// Inicialización limpia (sin demo data)
function init() {
  const saved = localStorage.getItem("kanban-projects")
  return saved ? JSON.parse(saved) : []
}

export function HomePage() {

  const [projects, dispatch] = useReducer(
    projectReducer,
    [],
    init
  )

  const [activeModal, setActiveModal] = useState(null)
  const [activeTaskMenu, setActiveTaskMenu] = useState(null)
  const [activeProjectMenu, setActiveProjectMenu] = useState(null)

  // Persistencia automática
  useEffect(() => {
    localStorage.setItem("kanban-projects", JSON.stringify(projects))
  }, [projects])

  return (
    <div className="min-h-screen flex flex-col p-6 bg-[#f3f4ef]">

      {/* EMPTY STATE */}
      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 text-gray-400">
          <h2 className="text-xl font-semibold">
            No projects yet
          </h2>
          <p className="mt-2 text-sm">
            Create your first project to start managing tasks.
          </p>

          <button
            onClick={() => setActiveModal({ type: "add" })}
            className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:opacity-90"
          >
            Create Project
          </button>
        </div>
      ) : (
        <Kanban
          projects={projects}
          dispatch={dispatch}
          setActiveModal={setActiveModal}
          activeTaskMenu={activeTaskMenu}
          setActiveTaskMenu={setActiveTaskMenu}
          activeProjectMenu={activeProjectMenu}
          setActiveProjectMenu={setActiveProjectMenu}
        />
      )}

      {/* Floating Add Button */}
      {projects.length > 0 && (
        <MenuTask
          onOpen={() => setActiveModal({ type: "add" })}
        />
      )}

      {/* Add Modal */}
      {activeModal?.type === "add" && (
        <ModalAdd
          projects={projects}
          dispatch={dispatch}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Edit Project Modal */}
      {activeModal?.type === "editProject" && (
        <ModalEditProject
          project={activeModal.project}
          dispatch={dispatch}
          onClose={() => setActiveModal(null)}
        />
      )}

    </div>
  )
}