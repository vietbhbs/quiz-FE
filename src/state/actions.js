import {ACTION_ADD, ACTION_CHANGE} from "./constants";

export const actionAdd = payload => {
    return {
        type: ACTION_ADD,
        payload
    }
}

export const actionChange = payload => {
    return {
        type: ACTION_CHANGE,
        payload
    }
}