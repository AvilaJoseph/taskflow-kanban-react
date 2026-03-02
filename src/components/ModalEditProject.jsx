import { useState } from "react"
import { projectColors } from "../constants/projectColors"

export function ModalEditProject({ project, dispatch, onClose }) {

  const [name, setName] = useState(project.name)
  const [color, setColor] = useState(project.color)

  function handleUpdate() {
    if (!name.trim()) return

    dispatch({
      type: "UPDATE_PROJECT",
      payload: {
        id: project.id,
        updates: {
          name,
          color
        }
      }
    })

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl p-6">

        <h2 className="text-lg font-semibold mb-4">Edit Project</h2>

        <div>
          <label className="text-sm text-gray-500">Project Name</label>

          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-0.5 focus:ring-black/20 focus:border-black/30 transition"/>
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-500">Select Color</label>

          <div className="flex gap-3 mt-2">
            {projectColors.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`w-6 h-6 rounded-md ${c} border-2 ${
                  color === c ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 text-gray-500">Cancel</button>
          <button onClick={handleUpdate} className="px-4 py-2 bg-black text-white rounded-lg">Save</button>
        </div>

      </div>
    </div>
  )
}