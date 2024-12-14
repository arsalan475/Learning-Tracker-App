import React, { useState } from 'react'

function Options({setSelect,select}) {



function handleSelect(value){
    setSelect(value)
   
}

  return (
    <div>
        <select className='focus:outline-none w-5' name="priorty" value={select} id='ok' onClick={(e)=>handleSelect(e.target.value)}>
            <option className='text-center font-bold' value="Priority" disabled>Priority</option>
            <option value="Must Be Done" >Must Be Done</option>
            <option value="Good To Do">Good To Do</option>
            <option value="less Important">less Important</option>
        </select>
    </div>
  )
}

export default Options