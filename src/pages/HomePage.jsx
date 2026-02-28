import { useReducer, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { MenuTask } from "../components/MenuTask";
import { Kanban } from "../components/Kanban";
import { ModalAdd } from "../components/ModalAdd";
import { initialProjects } from "../data/initialProjects";
import { projectReducer } from '../reducers/projectReducer'

export function HomePage() {
  const [projects, dispatch] = useReducer(projectReducer, initialProjects)

  const [activeModal, setActiveModal] = useState(null)
  const [activeTaskMenu, setActiveTaskMenu] = useState(null)
  const [activeProjectMenu, setActiveProjectMenu] = useState(null)

  return (
    <div className="min-h-screen flex flex-col p-6 bg-[#f3f4ef]">
      <FilterBar />

      <Kanban
        projects={projects}
        setActiveModal={setActiveModal}
        activeTaskMenu={activeTaskMenu}
        setActiveTaskMenu={setActiveTaskMenu}
        activeProjectMenu={activeProjectMenu}
        setActiveProjectMenu={setActiveProjectMenu}
      />

      <MenuTask onOpen={() => setActiveModal("add")} />

      {activeModal === "add" && (
        <ModalAdd
          onClose={() => setActiveModal(null)}
          dispatch={dispatch}
        />
      )}
    </div>
  )
}