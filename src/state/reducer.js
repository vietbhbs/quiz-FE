import {ACTION_ADD, ACTION_CHANGE} from "./constants";

const initialState = {
    todo: '',
    todos: []
}

const reducer = (state, action) => {
    switch (action.type){
        case ACTION_ADD:
            return {
                ...state,
                todos: [...state.todos, state.todo]
            }
        case ACTION_CHANGE:
            return {
                ...state,
                todo: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export {initialState, reducer}