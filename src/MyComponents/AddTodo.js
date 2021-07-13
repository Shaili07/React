import React,{ useState } from "react";

export const AddTodo = (props) => {
    
    
        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");
        const submit=(e)=>
        {
            e.preventDefault(); //Prevents page from reloading
            if(!title || !desc)
            {
                alert('Title or description cannot be blank');
            }
            else
            {
                props.addtodo(title, desc);
            }
            
        }
    
  return (
    <>
    <div className="container my-3">
        <h3>Add a ToDo</h3>
      <form>
        <div className="mb-3">
          <label for="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Title"
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value);
            }}
          />
          
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>{
                setDesc(e.target.value);
            }}
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success" onClick={submit}>
          Add Todo
        </button>
      </form>
      </div>

    </>
  );
};
