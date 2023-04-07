import { useCallback, useMemo, useReducer, useRef, useState } from "react";
// import Content from "./Content";
// import Box from "./box";


// useState

// const oder = [100,200,300]

// function App() {
// const [counter,setCounter] = useState(()=>{
//   const total = oder.reduce((total ,cur) =>total+cur)
//   return total
// })  // dung gia tri return de thuc thi


// // const handleIncrease = () =>{        /// tinh tong tang len
// //   setCounter(counter +1)
// // }

// const handleIncrease =()=>{
//   setCounter(prev => prev+1)    // callback
// }

//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );

 // ham thay doi gia tri
       

    //   const [info,setInfo] = useState({
    //     name: 'Nguyen Van A',
    //     age: 18,
    //     address:'Ha Noi'
    //   }) 
    //   const handleUpdate = () =>{
    //     setInfo({
    //       ...info,
    //       bio: 'Yeu mau xanh'
    //     })
    //   }
    //  return(
    //   <div className="App">
    //     <h1>{JSON.stringify(info)}</h1>
    //     <button onClick = {handleUpdate}>Change</button>

    //   </div>
    //  )


// }   
// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard'
// ]
// function App(){
//     const[gift,setGifts] = useState()
//     const randomGift = () =>{
//       const index = Math.floor(Math.random()*gifts.length)
//       setGifts(gifts[index])
//     }

// return(
//   <div style = {{padding:32}}>
//     <h1>{gift ||'Chua co phan thuong'}</h1>
//     <button onClick = {randomGift}>lay thuong</button>
//   </div>
// )
// }


/// TWo-way binding rang buoc
// function App(){
//   const [name, setName] = useState('')
//   return(
//     <div style={{padding:32}}>
//       <input
//       value={name}
//       onChange={e =>setName(e.target.value)}
//       />
//       <button onClick={()=>setName('Nguyen Van BBB')}>Change</button>

//     </div>

//   )
// }

// const courses = [
//   {
//     id: 1,
//     name: 'HTML,CSS'
//   },
//   {
//     id:2,
//     name:'JAVA'
//   },
//   {
//     id :3,
//     name : 'ReactJS'
//   }
// ]  
// Radio
// function App(){
//   const [checked,setChecked] = useState()

//   const handleSubmit = () =>{

//   }
//   return(
//     <div style={{padding: 32}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input 
//           type="radio"
//           checked = {checked === course.id}
//           onChange={() => setChecked(course.id)}
//           />
//           {course.name}

//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }
// function App(){
//   const [checked,setChecked] = useState()

//   const handleCheck = (id) =>{
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if(isChecked){
//           return checked.filter(item => item !== id)
//       }else{
//         return [...prev, id]
//       }
//     })
//   }

//   const handleSubmit = () =>{

//   }
//   return(
//     <div style={{padding: 32}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input 
//           type="checkbox"
//           checked = {checked.includes(course.id)}
//           onChange={() =>handleCheck(course.id)}
//           />
//           {course.name}

//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }


// ung dung todolist
// function App(){
//   const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//   const [job,setJob] = useState('')
//   const [jobs,setJobs] =useState(storageJobs ?? []) // neu ve trc la null hay underfine thi truyen ve sau

//   const handleAdd = () =>{
//     setJobs(prev => {
//       const newJobs = [...prev, job]
//       const jsonJobs = JSON.stringify(newJobs)  // buoc de f5 lai k mat add
//       localStorage.setItem('jobs',jsonJobs)

//       return newJobs
//     })
//     setJob('')
//   }

//   return(
//     <div style={{padding:30}}>
//       <input
//       value={job}
//       onChange={e =>setJob(e.target.value)}
//       />
//       <button onClick={handleAdd}>ADD</button>


//       <ul>
//         {jobs.map((job,index)=>(
//           <li key={index}>{job}</li>
//         ))}
//       </ul>

//     </div>

//   )
// }


// Mounted // Unmounted  thao ra va gan vao

// function App(){
// const [show,setShow] =useState(false)
// return(
//   <div>
//     <button onClick={()=>setShow(!show)}>Show</button>
//     {show && <Content/>}
//   </div>
// )
// }


// useRef()
//-- Lưu các giá trị qua 1 tham chiếu bên ngoài
// function App(){
//   const[count, setCount]=useState(60)

//   //useRef()// luon tra ve 1 object

//   const timerId = useRef()

  

//   const handleStart = () =>{
//    timerId.current= setInterval(()=>{
//       setCount(prevCount => prevCount -1)

//     },1000)

//   }

//   const handleStop = () =>{
//     clearInterval(timerId.current)

//   }

//   return(
//     <div style={{padding:30}}>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>

//     </div>
//   )
// }


/// Memo -- ghi nho: highter order
// ke thua lai logic



// function App(){
//   const [count, setCount] = useState(0)
//   const increase =() =>{
//     setCount(count+1)
//   }
//   return(
//     <div style={{padding:30}}>
//       <Content/>
//       <h2>{count}</h2>
//       <button onClick={increase}>Click me!</button>

//     </div>
//   )
// }


// callBack

// function App(){
//   const [count, setCount] = useState(0)
//   const handleIncrease = useCallback(()=>{
//     setCount(prev => prev+1)
//   },[])


//   return(
//     <div style={{padding:30}}>
//       <Content onIncrease = {handleIncrease}/>
//       <h2>{count}</h2>
//     </div>
//   )
// }

// useMemo  


// function App(){
//   const [name, setName] = useState('')
//   const [price,setPrice] = useState('')
//   const [products, setProducts] = useState([])

//   const nameRef = useRef()
  
//   const handleSubmit = () =>{
//     setProducts([...products,{
//       name,
//       price:+price
//     }])
//     setName('')   /// ghi xog xoa di
//     setPrice('')  // ghi xog xoa di


//     nameRef.current.focus() // focus lai vi tri
//   }

//   const total =useMemo(()=>{
//     const result = products.reduce((result,prod)=>{
//       return result+prod.price
//     },0)
//     return result
//   },[products])
//   //  const total = products.reduce((result,prod)=>
//   //  result+prod.price,
//   //  0
//   // )

//   return(
//     <div style={{padding:30}}>
//       <input
//       ref = {nameRef}  // focus la vi tri
//       value={name}
//       placeholder="Enter Name..."
//       onChange={e => setName(e.target.value)}
//       />
//       <br/>
//       <input
//       value={price}
//       placeholder="Enter price"
//       onChange={e => setPrice(e.target.value)}
//       />
//       <br/>
//       <button onClick={handleSubmit}>Add</button>
//       <br/>
//       Total:{total}
//       <ul>
//         {products.map((product,index)=>(
//           <li key ={index}>{product.name}-{product.price}</li>
//         ))}
//       </ul>

//     </div>
//   )
// }


//useReducer()
//1. init  2.Action   3.Reducer  4.Dispatch  

// const initState = 0   //1
// const UP_ACTION ='UP' ///2
// const DOWN_ACTION = 'DOWN'
// const reducer = (state, action) =>{
//   switch(action){
//     case UP_ACTION:
//       return state+1
//     case DOWN_ACTION:
//       return state-1
//     default:
//       throw new Error('insasa')
//   }
// }
// //3


// function App(){
//   const [count,dispatch] =useReducer(reducer,initState)
//   return(
//     <div style={{padding:30}}>
//       <h1>{count}</h1>
//       <button onClick={()=>dispatch(DOWN_ACTION)}>
//         Down
//       </button>
//       <button onClick={()=>dispatch(UP_ACTION)}>
//         Up
//       </button>
//     </div>
//   )
// }


// //// TODO LIST
// //1. tao state
// const initState = {
//   job:'',
//   jobs:[]
// }
// //2. action
// const SET_JOB ='set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB='delete_job'

// const setJob = payload =>{
//   return{
//     type: SET_JOB,
//     payload
//   }
// }

// const addJob = payload =>{
//   return{
//     type: ADD_JOB,
//     payload
//   }
// }
// const deleteJob = payload =>{
//   return{
//     type: DELETE_JOB,
//     payload
//   }
// }

// //3.reducer
// const  reducer = (state, action) =>{
//   let newState
//   switch(action.type){
//     case SET_JOB:
//       newState = {
//         ...state,
//         job: action.payload
//       }
//       break
//     case ADD_JOB:
//       newState = {
//         ...state,
//         jobs:[...state.jobs, action.payload]
//       }
//       break
//     case DELETE_JOB:
//       const newJobs = [...state.jobs]
//       newJobs.splice(action.payload,1)
//       newState = {
//         ...state,
//         job: newJobs
//       }
//       break
//     default:
//         throw new Error('Invalid action')
//   }
//   return newState
// }

// //4.dispath


// function App(){
//   const [state,dispatch] = useReducer(reducer,initState)
//   const {job,jobs} = state

//   const inputRef =useRef()

//   const handleSubmit =()=>{
//     dispatch(addJob(job))
//     dispatch(setJob(''))
//     inputRef.current.focus()
//   }

//   return(
//     <div type={{padding:30}}>
//       <h3>TO DO</h3>
//       <input
//       ref ={inputRef}
//       value={job}
//       placeholder="Enter todo"
//       onChange={e =>{
//         dispatch(setJob(e.target.value))

//       }}
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job,index) =>(
//           <li key={index}>{job} 
//           <button onClick={()=> dispatch(deleteJob(index))}>
//             delete
//           </button>
//           </li>
//         ))}
//       </ul>

//     </div>
//   )
// }

/// context  
//1. create context
//2.provider
//3.consumer

// function App(){
//   return(
//   <div>
//    <Box color='red' children={<div style={}>
//     <p>aaa</p>
//     <p>bbbb</p>
//    </div>}>
//    </Box>
//    <Box color= 'blue' title='Hha'/>
//    <Box color= 'black' title='sssss'/>
//    <Box color= 'yellow' title='aaaaa'/>
//   </div>
//  )
// }


var index = 0
function App(){
  const [name,setName] = useState('')
  const [job,setJob] = useState([])
  const [editId,setEditId] = useState(0)
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

// import React, { useState } from 'react';

// // import Button from "@atlaskit/button";
// // import Texfield from "@atlaskit/texfield";

// import ToDolist from "./Compoment/Todolist";
// function App(){
//   const [todoList,setTodoList] = useState([])
//   const [textInput,setTextInput] = useState('')


//   const onTextInputChange =(e)=>{
//     setTextInput(e.target.value)
//   }
//   const onAddBtnClick = () =>{
//     setTodoList([...todoList,
//       {id: '',name:textInput ,isCompleted:false}])
//   }
//   return(
//     <div>
//       <h3>ToDo List</h3>
//       <input 
//       name ='add-todo' 
//       placeholder ='Add todo....'
//       elemAfterInput ={
//         <button isDisable ={!textInput} 
//         appearance ='primary'
//         onClick={onAddBtnClick}
//         >
//       ADD
//       </button>

//       }
//       css = {{padding: "2px 4px 2px"}}
//       value={textInput}
//       onChange={onTextInputChange}
//       ></input>
//       {/* <ToDolist/> */}
//     </div>
//   )


// }

export default App;

