import React, { useState } from 'react'
import InputField from './InputField'
import Button from './Button'
import DotMenuIcon from './DotMenuIcon'
import MenuContent from './MenuContent'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../Apps/Todo App/todoSlice'


const inputStyle = `w-full absolute inset-0`

const btnStyle = `absolute ring-black lg:py-0 top-1/2 -translate-y-1/2 right-2  w-[7rem] text-center z-10`

const dotContainerStyle = `absolute right-2 cursor-pointer top-1/2 -translate-y-1/2`

const mainContainer = ` w-full ring ring-orange-400 p-2 rounded-lg relative`

function TodoContent({id,completed,style,children}) {

  const [show,setShow] = useState(false)
  const [updateInput,setUpdateInput] = useState('')
  const [updating,setUpdating] = useState(false)
  const dispatch = useDispatch()
function updateCompleted(){
  dispatch(updateTodo({id,updateInput}))
  console.log(updateInput)
  setUpdating(false)
}

  return (
    <div className={`${mainContainer} ${style}`}>
        <h2 className={completed}>{children}</h2>
            <DotMenuIcon show={show} setShow={setShow} style={dotContainerStyle} dotStyle={'bg-orange-400'}>
                <MenuContent setShow={setShow} setUpdating={setUpdating} updating={updating} id={id} updateInput={updateInput}/>
             </DotMenuIcon>
     {updating && <>
        <InputField placeholder={'update todo'} style={inputStyle} onChange={(value)=> setUpdateInput(value)}/>
        <Button style={btnStyle} handleClick={updateCompleted}> Save </Button>
        </>} 
    </div>
  )
}

export default TodoContent