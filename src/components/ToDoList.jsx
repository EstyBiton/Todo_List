// import React from "react";
// import ToDoItem from "./ToDoItem";
// const ToDoList=({items, onToggle}) =>{
//     return(
//         <div>
//             {items.map(item=>(
//                 <ToDoItem key={item.id} item={item} onToggle={onToggle}/>
//             ))}
//         </div>
//     );
// };
// export default ToDoList;
// src/components/ToDoList.jsx

import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
          onEdit={onEdit}  
        />
      ))}
    </ul>
  );
};

export default ToDoList;

