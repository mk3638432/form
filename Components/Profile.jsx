import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div>
        <p>WELCOME</p>
        <Link href='/'>
        <button className='mt-2 hover:bg-red-300 border p-2'>Go  Back</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile