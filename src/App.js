
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import React, { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';

//props are send from parent to child
//child files imported to parent file
function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete" + todo.sno);
    
  
  setTodos(todos.filter((e)=>
  {
    return e!==todo;
  }))
}

const addtodo=(title,desc)=>
{
  let sno;
 if(todos.length==0)
 {
   sno=1;
 }
 else 
 {
  sno=todos[todos.length-1].sno+1;
 }

  const myTodo={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
}


  const [todos, setTodos] = useState([
    
  ]);

  return (
    <>


      <Header title={"My todo List"} />
      <AddTodo addtodo={addtodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
