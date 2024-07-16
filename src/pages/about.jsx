import React from 'react'
import aboutusimage from '../assets/images/aboutusimage.png'
const About = () => {
  return (
    <div className='flex'>
        <div className='flex flex-col w-[50%] px-10  h-[90vh] justify-center'>
            <h3 className='text-gray-500 font-semibold'>ABOUT US</h3>
            <h1 className='font-bold text-[60px]'>We can teach you react within 4-days.</h1>
            <h2 className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam massa, efficitur vel augue at, dapibus dapibus sem. Etiam nec ligula lacus. Sed consectetur tortor sed posuere consectetur. Donec vestibulum est purus, id consequat turpis placerat in. Ut sed varius risus. Morbi mattis rutrum nulla nec accumsan.</h2>

        </div>
        <div className=' flex justify-center w-[70%] items-center'>
            <img src={aboutusimage} alt="" className='w-[500px] h-[500px]' />
        </div>
    </div>
  )
}

export default About