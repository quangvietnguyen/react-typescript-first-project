import React from "react";
import Todo from "../models/todo";
import styles from './todoItems.module.css';

const TodoItem: React.FC<{ onRemoveTodo: (event: React.MouseEvent) => void ; text: string }> = (props) => {
    return (
        <li className={styles.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
};

export default TodoItem;