// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React,{useState} from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

const App =() => {
  const[todos,setTodos]=useState([]);

  const handleAddToDo=(text)=>{
    setTodos([
      ...todos,
      {id:Date.now(),text,completed:false}
    ]);
  };

  const handleToggleTodo=(id)=>{
    setTodos(todos.map(todo=>
      todo.id===id?{...todo,completed: !todo.completed } : todo
    ));
  };

  return(
    <div>
      <h1>Todo List</h1>
      <AddToDo onAdd={handleAddToDo}/>
      <ToDoList items={todos} onToggle={handleToggleTodo}/>
    </div>
  );
};




export default App;
