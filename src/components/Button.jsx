import React from 'react'


const btnStyles =`
   inline-block 
    cursor-pointer
    selection:not-sr-only
    shadow-sm shadow-red-500
     ring ring-red-600 
     
     font-bold text-lg rounded-lg 
     hover:scale-[.99] active:scale-[.97]
     hover:shadow-lg active:shadow-xl
     font-semibold capitalize rounded-lg
      py-1 sm:py-3 px-4 text-sm md:py-2 md:text-lg  
`


function Button({style,handleClick,children}) {
    
  return (
    <div onClick={()=>handleClick()} className={`${btnStyles}  ${style}`}>
        {children}
    </div>
  )
}

export default Button