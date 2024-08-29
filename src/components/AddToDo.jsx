import React,{useState} from "react";

const AddToDo=({onAdd})=>{
    const [text,setText]=useState('');

    const handleAddClick=()=>{
        if(text){
            onAdd(text);
            setText('');
        }
    };
    return(
        <div>
            <input
             type="text" 
             value={text}
             onChange={(e)=>setText(e.target.value)}
             />
             <button onClick={handleAddClick}> Add Todo </button>
        </div>
    );          
};

export default AddToDo
