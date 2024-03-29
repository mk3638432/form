import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className='flex h-[120vh] justify-center items-center bg-gradient-to-r from-blue-500 to-yellow-500'>
    <div className='w-[600px] h-[400px] bg-gradient-to-l from-orange-400 flex justify-center to-fuchsia-200'>
        <div className='flex flex-col items-center'> 
        <p className='text-2xl'>WELCOME</p>
        <p className='font-bold mt-4'>Your Microsoft account connects all your Microsoft <br></br> apps and services.
Sign in to manage your account.</p>


      <div className='flex justify-evenly w-[100%] mt-10'> 
      <Link href='/login'> 
      <button className='border hover:bg-blue-500 rounded-sm p-2 m-2'>SIGN IN </button>
      </Link>
        
      <Link href='/register'> 
        <button  className='border hover:bg-blue-500 rounded-sm p-2 m-2'>SIGN UP </button>
      </Link>

        </div>
        </div>
      </div>
    </div>
  )
}

export default index