import './App.css';
import {useContext, useRef} from "react";
import Context from "./store/Context";
import {actions} from "./state";

function App() {
    const [stateTodo, dispatch] = useContext(Context);
    const {todo, todos} = stateTodo;
    const inputRef = useRef();

    return (
        <div className="App" style={{margin: "16px"}}>
            <input type="text"
                   value={todo}
                   ref={inputRef}
                   onChange={(e) => dispatch(actions.actionChange(e.target.value))}
            />
            <button onClick={() => {
                dispatch(actions.actionAdd())
                dispatch(actions.actionChange(''))
                inputRef.current.focus()
            }}>Submit
            </button>
            <ul>
                {
                    todos.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
