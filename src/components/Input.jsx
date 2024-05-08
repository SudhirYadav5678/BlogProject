import React,{useId} from 'react'

const Input= React.forwardRef(function input({
    label,
    text="text",
    className='',
    placHolder='',
    ...props
}, ref){
    const id=useId
        return(
            <div className='w-full'>
                {label && <label className='inline-block mb-1 pl-1'>
                    {label}</label>}
                <input type={type} name={placHolder} className= {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} ref={ref} {...props} id={id}/>
            </div>
        )
})

export default Input