let id = 0;

function reducer(state = [], action) {
    // if (action.type === "ADD_TASK") {
    //     return [
    //         ...state,
    //         {
    //             id: ++0,
    //             type: action.payload.task,
    //             completed: false
    //         }
    //     ]
    // } else if (action.type === "REMOVE_TASK") {
    //     return state.filter(task.id !== action.payload.id);
    // }
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: ++0,
                    type: action.payload.task,
                    completed: false
                }
            ]
        case "REMOVE TASK":
            return state.filter(task.id !== action.payload.id);

        default:
            return state
    }
}