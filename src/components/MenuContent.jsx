import React from 'react'
import { completed, deleteTodo, updateTodo } from '../Apps/Todo App/todoSlice'
import { useDispatch } from 'react-redux'


const options = `
bg-orange-300 py-1 px-2 mb-1
 rounded-lg cursor-pointer 
 hover:bg-orange-400
 `


function MenuContent({id,setShow,setUpdating}) {

const dispatch = useDispatch()

function handleCompleted(){
    
    dispatch(completed(id))
    setShow(false)
}


function handleUpdate(){

  setUpdating(true)

  setShow(false)
}


function handleDelete(){
dispatch(deleteTodo(id))
setShow(false)
}


  return (
    <div className=' text-white selection:not-sr-only p-2 ring ring-orange-400 flex flex-col rounded-lg absolute -right-[7.5rem] top-0'>
        <div onClick={()=> handleCompleted()} className={options}>Completed</div>
        <div onClick={()=> handleUpdate()} className={options}>Update</div>
        <div onClick={()=> handleDelete()} className={options}>Delete</div>
    </div>
  )
}

export default MenuContent