import React, { useState } from "react";
import './App.css';
import TodoLists from "./Todo/todolist";
import db from "./firebase";
import New from "./Todo/new";
const App=()=> {
  const [inputList, setInputList]=useState("");
  //array of add item list
  const [items, setItems]=useState([]);
  const itemEvent=(event)=>{
         setInputList(event.target.value);
    
  };
const addItems =async (e)=>{
  if(inputList!==""){
    setItems((oldItems)=>{
      return [...oldItems, inputList];
     });
     e.preventDefault();
  const res = await fetch(
    "https://todo-app-41899-default-rtdb.firebaseio.com/TodoAppDatabase.json",
    {
      method :"POST",
      headers:{  "Content-type":"application/json",
      },
      body:JSON.stringify({
        inputList
      })
    }
  );
     setInputList('');
    
  }
   else{
     console.log("empty");
   }
 };  
 
 const deleteItems=(id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrItme, index)=>{
      return index !==id;  
     });
    
   });
  
  console.log("delete");
}

  return (
    <>
    <div className="App" >
      <div className="center_div">
         <br />
         <h2>Todo app</h2>
         <br />
         <input type="text" 
                value={inputList}
                placeholder="Add a Items"
                onChange={itemEvent} />
         <button onClick={addItems}>+</button>
         {/* {error &&<div className="empty_text">{error}</div>} */}
         <ol>
          {items.map((itemVal, index)=>{
            return <TodoLists 
            key={index}
            id={index}
            onSelect={deleteItems} 
            text={itemVal}/>
          })}
          </ol>
      </div>
     <div></div>
    
    </div>
    </>
  );
}

export default App;
