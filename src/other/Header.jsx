import React from 'react'

const Header = ({data}) => {
  
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }

  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data ? data.firstName: ''} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-3 py-2 text-lg font-medium rounded-md active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header