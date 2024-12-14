import React, { useState } from 'react'



const dotStyles = `
w-[6px] h-[6px] rounded-full bg-slate-700
`
const dotsContainer = `
w-3 h-8 flex flex-col  items-center justify-evenly 
`

function DotMenuIcon({show,setShow,style,dotStyle, children}) {

  

  function handleShowOptions() {
setShow(!show)
  }

  return (
    <>
    <div onClick={handleShowOptions} className={`${dotsContainer}  ${style}`}>
        <span className={`${dotStyles} ${dotStyle}`}></span>
        <span className={`${dotStyles} ${dotStyle}`}></span>
        <span className={`${dotStyles} ${dotStyle}`}></span>

        
    </div>

    
          {show && children}
        
</>
  )
}

export default DotMenuIcon