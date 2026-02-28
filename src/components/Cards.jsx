export function Cards({
  task,
  color,
  setActiveModal,
  activeTaskMenu,
  setActiveTaskMenu,
  setActiveProjectMenu
}) {

  const isOpen = activeTaskMenu === task.id 

  function handleToggle() {
    setActiveTaskMenu(prev =>
      prev === task.id ? null : task.id
    )
    setActiveProjectMenu(null)
  }

  return (
    <div className={`rounded-2xl p-4 min-h-[120px] flex flex-col justify-between ${color}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold text-white">{task.title}</h3>

        <div className="relative">
          <button onClick={handleToggle} className="text-white text-xl">...</button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg p-2 z-50">
              <button onClick={() => {setActiveModal({ type: "editTask", task })
                setActiveTaskMenu(null)
              }} className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Edit Task</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 rounded-lg">Delete Task</button>
            </div>
          )}
        </div>
      </div>
      <p className="text-white mt-3"><span className="font-semibold text-md">Status: </span>{task.status}</p>
      <p className="text-white mt-3"><span className="font-semibold text-md">Created At: </span>{task.createdAt}</p>
      <p className="text-white mt-3">{task.description}</p>
    </div>
  )
}