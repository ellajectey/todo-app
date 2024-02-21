import styles from "./index.module.css"
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo() {

    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
    const [todo, setTodo] = useState("");


    const saveTodos = () => {
        //save all todos
        setTodos([...todos, todo]);
        //wipe the input box
        setTodo("");
    }

    return (
        // <p>Create Todo</p>
        //allowing the textfield to accept values
        <section className={styles.createTodosection}>
            <input
                onKeyDown={event => event.key === "Enter" && saveTodos()}
                value={todo}
                onChange={event => setTodo(event.target.value)}
                className={styles.createTodoinput1}
                placeholder="Start typing..." />


            <button
                onClick={() => saveTodos()}
                className={`btn ${styles.createTodobtn}`}
            >
                Create </button>
        </section>
    );
}

export default CreateTodo;