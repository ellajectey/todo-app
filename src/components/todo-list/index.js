// npm
import {useState,useEffect} from "react";
import { useLocalStorage } from "usehooks-ts";

function TodoList(){

    // let todos = [];
    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);


//     function getTodos()
//     {
//         //Get all todos from local storage and store it
//        let todos = JSON.parse(localStorage.getItem("TODO_KEY"))|| [];

//     //    update the react state
//     setTodos (todos);
//     }
// // list rendering
//   useEffect(getTodos,[]);
    return(
        <ul>
           
            {todos.map(function(todo,index){
                return <li key={index}>{todo}</li>
            })}
        </ul>
    );

}
export default TodoList;