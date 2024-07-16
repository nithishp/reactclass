import React, { useState } from "react";
import hero from '../assets/images/hero.jpeg'
import heroimage from '../assets/images/heroimage.png'
import { Button } from "./Button";



const Hero = () => {
    const [count,setCount] = useState(0)
    
   
  return (
    <div className="flex h-[80vh] w-full ">
      <div className="flex flex-col items-left pl-10 justify-center w-[50%] ">
      <h1 className="text-[70px] font-semibold text-left">
        Welcome to  React <span className="text-gray-700">class </span>
      </h1>
      <h2 className="text-[50px]">
        Thanks for coming 
      </h2>
        <div className="flex gap-6">
          <Button text='View more' />
          
        </div>
      </div>
      <div className=" flex items-center  justify-center pr-10" >
        <img src={heroimage} className="w-[50%] rounded-lg" />    
    </div>    
    </div>
  );
};

export default Hero;
