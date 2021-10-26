import React, { useContext } from "react";
import TodoItem from "./todoItems";
import styles from './todos.module.css';
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (pros) => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={styles.todos}>
            {todosCtx.items.map(item => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}/>
            ))}
        </ul>
    )
}

export default Todos;