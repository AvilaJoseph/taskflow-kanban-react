import { Columns } from "./Columns";

export function Kanban({
  projects,
  setActiveModal,
  activeTaskMenu,
  setActiveTaskMenu,
  activeProjectMenu,
  setActiveProjectMenu
}) {
  return (
    <Columns
      projects={projects}
      setActiveModal={setActiveModal}
      activeTaskMenu={activeTaskMenu}
      setActiveTaskMenu={setActiveTaskMenu}
      activeProjectMenu={activeProjectMenu}
      setActiveProjectMenu={setActiveProjectMenu}
    />
  )
}