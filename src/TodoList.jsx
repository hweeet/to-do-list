import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo,deleteTodo }) => {
    return (
        <>
            <ul className="list">
                {todos.length === 0 && "Nothing To-do"}
                {todos.map(todo => {
                    return (
                        <TodoItem id={todo.id}
                            completed={todo.completed}
                            title={todo.title}
                            key={todo.key}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo} />
                    )
                })}
            </ul>
        </>
    )
}

export default TodoList;