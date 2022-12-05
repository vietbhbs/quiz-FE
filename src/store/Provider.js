import Context from "./Context";
import {useReducer} from "react";
import {initialState, reducer} from "../state";

function Provider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider