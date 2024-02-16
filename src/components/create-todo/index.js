import styles from "./index.module.css"

function CreateTodo(){

    let todo;
   //define the function at the top give it a name 
    function collectInput(event)

        {// the variable where the input will be stored
            todo=event.target.value;
        }

        function saveTodo(){
            // pseudocode- 
            // get existing list of todos from local storage (old list)
            // the or operator "||"  an if statement  can also be used
            
            // deserialize
            let todos = JSON.parse(localStorage.getItem("TODO_KEY"))|| [];
            // add new todo to existing list of todos
            todos.push(todo);
            // Set all todos in local storage
            // serialize
            localStorage.setItem("TODO_KEY", JSON.stringify(todos)); 
        }
    return(
        // <p>Create Todo</p>
        //allowing the textfield to accept values
        <section className={styles.createTodosection}>
            <input
             onChange= {collectInput}
             className={styles.createTodoinput1} 
              placeholder ="Start typing..."/>

 
            <button onClick={saveTodo} className={styles.createTodobtn}> Create </button>
        </section>
    );
}

export default CreateTodo;