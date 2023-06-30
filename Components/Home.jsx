import React from 'react'
import SignIn from './SignIn'
import Link from 'next/link'

const Home = () => {
   

  return (
    <div>
      <div className='w-[600px] h-[400px] bg-gradient-to-l from-orange-400 flex justify-center to-fuchsia-200'>
        <div className='flex flex-col items-center'> 
        <p className='text-2xl'>WELCOME</p>
        <p className='font-bold mt-4'>Your Microsoft account connects all your Microsoft <br></br> apps and services.
Sign in to manage your account.</p>


      <div className='flex justify-evenly w-[100%] mt-10'> 

      <Link href='/#signin'>
      <button className='border hover:bg-blue-500 rounded-sm p-2 m-2'>SIGN IN </button>
      </Link>
        
        <button  className='border hover:bg-blue-500 rounded-sm p-2 m-2'>SIGN UP </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home