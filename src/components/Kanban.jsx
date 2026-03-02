import { Columns } from "./Columns";

export function Kanban({
  projects,
  dispatch,
  setActiveModal,
  activeTaskMenu,
  setActiveTaskMenu,
  activeProjectMenu,
  setActiveProjectMenu
}) {
  return (
    <Columns
      projects={projects}
      dispatch={dispatch}
      setActiveModal={setActiveModal}
      activeTaskMenu={activeTaskMenu}
      setActiveTaskMenu={setActiveTaskMenu}
      activeProjectMenu={activeProjectMenu}
      setActiveProjectMenu={setActiveProjectMenu}
    />
  )
}