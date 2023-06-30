import Login from '@/Components/Login'
import React from 'react'

const login = () => {
  return (
    <div id='signin' className='flex h-[120vh] justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <Login/>
    </div>
  )
}

export default login