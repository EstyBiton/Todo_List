
// import React,{useState} from "react";
// import ToDoList from "./components/ToDoList";
// import AddToDo from "./components/AddToDo";

// const App =() => {
//   const[todos,setTodos]=useState([]);

//   const handleAddToDo=(text)=>{
//     setTodos([
//       ...todos,
//       {id:Date.now(),text,completed:false}
//     ]);
//   };

//   const handleEditToDo = (id, newText) => {
//     setTodos(todos.map(todo => 
//       todo.id === id ? { ...todo, text: newText } : todo
//     ));
//   };
  

//   const handleToggleTodo=(id)=>{
//     setTodos(todos.map(todo=>
//       todo.id===id?{...todo,completed: !todo.completed } : todo
//     ));
//   };

//   return(
//     <div>
//       <h1>Todo List</h1>
//       <AddToDo onAdd={handleAddToDo}/>
//       <ToDoList items={todos} onToggle={handleToggleTodo}/>
//     </div>
//   );
// };


import React, { useState } from 'react';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a ToDo App', completed: true },
    { id: 3, text: 'Buy food', completed: true },
    { id: 4, text: 'claen home', completed: true },
    { id: 5, text: 'make lunch', completed: true },
    // משימות נוספות...
  ]);

  // פונקציה לעריכת משימה
  const handleEditToDo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const handleToggleToDo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>My ToDo List</h1>
      <ToDoList 
        todos={todos} 
        onToggle={handleToggleToDo} 
        onDelete={handleDeleteToDo} 
        onEdit={handleEditToDo}  
      />
    </div>
  );
};

export default App;



