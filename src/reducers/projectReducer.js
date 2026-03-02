export function projectReducer(state, action) {
  switch (action.type) {

    // PROJECTS
    case "ADD_PROJECT":
      return [...state, action.payload]

    case "UPDATE_PROJECT":
      return state.map(project =>
        project.id === action.payload.id
          ? { ...project, ...action.payload.updates }
          : project
      )

    case "DELETE_PROJECT":
      return state.filter(project => project.id !== action.payload)

    // TASKS
    case "ADD_TASK":
      return state.map(project =>
        project.id === action.payload.projectId
          ? {
              ...project,
              tasks: [...project.tasks, action.payload.task]
            }
          : project
      )

    case "UPDATE_TASK":
      return state.map(project =>
        project.id === action.payload.projectId
          ? {
              ...project,
              tasks: project.tasks.map(task =>
                task.id === action.payload.taskId
                  ? { ...task, ...action.payload.updates }
                  : task
              )
            }
          : project
      )

    case "DELETE_TASK":
      return state.map(project =>
        project.id === action.payload.projectId
          ? {
              ...project,
              tasks: project.tasks.filter(
                task => task.id !== action.payload.taskId
              )
            }
          : project
      )

    default:
      return state
  }
}