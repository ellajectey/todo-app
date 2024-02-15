import React from "react";
import styles from "./index.module.css"

function CreateTodo(){
    const[todo, setTodo] = React.useState("");

    return(
        // <p>Create Todo</p>
        //allowing the textfield to accept values
        <section className={styles.createTodosection}>
            <input
             onChange= {function(event)
            {
                console.log(event.target.value);
            }
            }
              className={styles.createTodoinput1} 
              placeholder ="Start typing..."/>


            <button className={styles.createTodobtn}> Create </button>
        </section>
    );
}

export default CreateTodo;