export function projectReducer(state, action) {
    switch (action.type) {
        case "ADD_PROJECT":

            return [...state, action.payload]

        case "DELETE_PROJECT":
            return state.filter(project => project.id !== action.payload)

        default:
            return state
    }
}