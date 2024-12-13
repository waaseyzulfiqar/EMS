import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Waasey 👋</span></h1>
        <button className='bg-red-700 px-3 py-2 text-lg font-medium rounded-md'>Log Out</button>
    </div>
  )
}

export default Header