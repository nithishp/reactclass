import React from 'react'
import { UrlInput } from 'sanity'

const Profile = () => {
  return (
    <div className='flex bg-slate-300 w-full h-[90vh] items-center justify-center'>
        <div className= 'flex flex-col justify-start items-center w-[400px] h-[500px] shadow-md rounded-[20px] bg-white'>
            <h1 className='text-[40px] font-bold'>Profile</h1>
            <img src={'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'}  className='rounded-full border-gray-700 border-[5px] w-[140px] h-[140px] mt-3' alt="" />
            <h1 className='text-[40px] font-semibold mt-3'>
                John
            </h1>

        </div>
    </div>
  )
}

export default Profile