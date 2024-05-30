import React from 'react'

function Header() {
  return (
    <div className='min-w-screen bg-gray-300 flex items-center  p-4'>
      <img src="/bird.svg" alt="logo" className='size-10'/>
      <p className='font-semibold text-2xl text-black pl-2'>Celebrare</p>
    </div>
  )
}

export default Header
