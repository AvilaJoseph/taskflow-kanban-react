import Swal from "sweetalert2"

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
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100"
                onClick={() => {

                  Swal.fire({
                    title: "Edit Task",
                    html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" value="${task.title}">
        <textarea id="swal-desc" class="swal2-textarea" placeholder="Description">${task.description || ""}</textarea>
      `,
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonColor: "#000",
                    preConfirm: () => {
                      const title = document.getElementById("swal-title").value
                      const description = document.getElementById("swal-desc").value

                      if (!title.trim()) {
                        Swal.showValidationMessage("Title is required")
                        return false
                      }

                      return { title, description }
                    }
                  }).then((result) => {

                    if (result.isConfirmed) {

                      dispatch({
                        type: "UPDATE_TASK",
                        payload: {
                          projectId,
                          taskId: task.id,
                          updates: {
                            title: result.value.title,
                            description: result.value.description
                          }
                        }
                      })

                      Swal.fire({
                        icon: "success",
                        title: "Updated",
                        timer: 1000,
                        showConfirmButton: false
                      })
                    }
                  })

                  setActiveTaskMenu(null)
                }}
              >
                Edit
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-red-500 rounded-lg hover:bg-gray-100"
                onClick={() => {

                  Swal.fire({
                    title: "Delete task?",
                    text: "This action cannot be undone.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#000",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it"
                  }).then((result) => {
                    if (result.isConfirmed) {

                      dispatch({
                        type: "DELETE_TASK",
                        payload: {
                          projectId,
                          taskId: task.id
                        }
                      })

                      setActiveTaskMenu(null)

                      Swal.fire({
                        icon: "success",
                        title: "Deleted",
                        timer: 1000,
                        showConfirmButton: false
                      })
                    }
                  })
                }}
              >
                Delete
              </button>
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