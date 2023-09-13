// action types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETED_TASK = "COMPLETED_TASK";

// actions
export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: {
            task: task
        }
    }

}

export const completedTask = (completedTask) => {
    return {
        type: COMPLETED_TASK,
        payload: {
            id: completedTask
        }
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: {
            id: id
        }
    }
}

// reducer
let id = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: ++id,
                    type: action.payload.task,
                    completed: false
                }
            ]

        case COMPLETED_TASK:
            return state.map((items) => (items.id === action.payload.id ? {
                ...items,
                completed: true
            } : items))

        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);

        default:
            return state
    }
}