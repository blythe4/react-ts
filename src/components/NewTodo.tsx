import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-contect";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTectInpurRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTectInpurRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText);
        todoTectInpurRef.current!.value = "";
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTectInpurRef} />
            <button>Add Todo</button>
        </form>
    );
};
export default NewTodo;
