import {  useRef, useState } from "react";

var index = 0

function App(){
  const [name,setName] = useState('')
  const [job,setJob] = useState([])
  const inputRef =useRef()
  const handleAdd = (e)=>{
     e.preventDefault()
    if(name !==''){
      setJob([{id:index , name},...job])
      index++
    }

    setName('')
    inputRef.current.focus()

  }
  const handleDelete = (id)=>{
    const delJob = job.filter((to)=>to.id !== id)
    setJob([...delJob])
    // setEditId(id)

  }
  const handleEdit = (id)=>{
    const editTodo =job.find((i) =>i.id ===id)
    setName(editTodo.name)

  }


  return(
    <div style={{padding:30}}>
      <input
      ref = {inputRef}
      value={name}
      onChange={e =>setName(e.target.value)}
      placeholder="Enter name..."
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {job.map((t)=>(
          <li key ={t.id}>{`${t.id}_${t.name}`}
          <button onClick={() =>handleDelete(t.id)}>Delete</button>
          <button onClick={() =>handleEdit(t.id)}>Edit</button>
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default App;

