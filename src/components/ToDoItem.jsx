// import React from "react";
//  const ToDoItem=({item,onToggle})=>{
// return(
//     <div>
//     <input 
//     type="checkbox"
//     checked={item.completed}
//     onChange={()=>onToggle(item.id)}
//     />
//     {item.text}
//     </div>
// );
//  };
//  export default ToDoItem;
// src/components/ToDoItem.jsx

import React, { useState } from 'react';

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditChange = (e) => {
    setNewText(e.target.value);
  };

  const handleEditSubmit = () => {
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={handleEditChange}
          onBlur={handleEditSubmit} 
        />
      ) : (
        <>
          <span 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;

