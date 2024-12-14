import React, { useState } from 'react'



const inputStyle = `

p-2

rounded-md 
placeholder:px-2 placeholder:text-sm placeholder:uppercase 
sm:placeholder:text-lg md:placeholder:text-xl  
ring ring-orange-300  focus:outline-none focus:ring focus:ring-orange-400 '

`


function InputField({style,placeholder,onChange,input}) {


  return (
  
        
    <input type="text" value={input} onChange={(e)=> onChange(e.target.value)} placeholder={placeholder} className={`${inputStyle} ${style}`}/>

  )
}

export default InputField