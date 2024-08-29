import React from "react";
import ToDoItem from "./ToDoItem";
const ToDoList=({items, onToggle}) =>{
    return(
        <div>
            {items.map(item=>(
                <ToDoItem key={item.id} item={item} onToggle={onToggle}/>
            ))}
        </div>
    );
};
export default ToDoList;