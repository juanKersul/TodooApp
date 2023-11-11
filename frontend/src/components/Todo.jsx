import { useState } from "react";
import TodoForm from "./TodoForm";
function Todo({ todo, index, completeTodo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const buttonText = todo.isCompleted ? "unmark" : "mark";
  return isEditing ? (
    <TodoForm type={"edit"} action={(value) => editTodo(index, value)} cancel={()=>setIsEditing(!isEditing)} />
  ) : (
    <>
      <h3
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.title}
      </h3>
      <h4>Category : {todo.category}</h4>
      <p>{todo.description}</p>
      <div>
        <button onClick={() => completeTodo(index)}>{buttonText}</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
    </>
  );
}
export default Todo;
