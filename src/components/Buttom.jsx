//this is a comman buttom for every where use
import React from 'react'

function Buttom({children,
    type='buttom',
    bg='bg-blue-400',
    text='text-white',
    className ='',
    ...props
}) {
  return (// children used for display the name of property for which it is going to used.
    <button className={`px-4 py-2 rounded-lg ${className} ${bg} ${text}`}{...props}>{children}</button> 
  )
}

export default Buttom
