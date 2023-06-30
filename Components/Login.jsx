import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div id='signin'>
    <p className='text-center text-2xl'>LOGIN</p>
<div className='w-[500px] h-[450px] bg-red-300 flex justify-center items-center flex-col'>
    <p className='p-2'>USERNAME</p>
    <input type='text'/>
    <p className='p-2'>PASSWORD</p>
    <input type='password'/>
    <Link href='/profile'>
    <button className='mt-4 border px-4 hover:bg-blue-400'>LOG IN</button>
    </Link>
</div>
</div>
  )
}

export default Login