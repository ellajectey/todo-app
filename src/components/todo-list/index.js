// npm
import {useState,useEffect} from "react";
import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item";

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
        <ul className="list-group">
           
            {todos.map(function(todo,index){
                return <TodoItem todo ={todo} index={index}/>;
                
            })}
        </ul>
    );

}
export default TodoList;