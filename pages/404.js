import Link from 'next/link'
import React from 'react'

const Errorpage = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
        <Link href='/'>
        <button>Got to Home Page</button>
        </Link>
    </div>
  )
}

export default Errorpage