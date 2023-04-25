import Image from 'next/image';
import React from 'react'
import img1 from "../components/tanaji_img.jpeg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <>
    <div>
        <Image 
        src={img1} 
        alt="Tanaji Vitekar"
        className="w-32 h-32 mx-auto rounded-full"
        />
        <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green'>Tanaji </span>
            Vitekar
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
        <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' href="" download="Tanaji_Vitekar_Resume"><GiTie className='w-6 h-6'/>Download Resume</a>

        {/* Social Icons */}
        <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
            <a href="https://github.com/vitekartanaji">
                <AiFillGithub className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/in/tanaji-vitekar/">
                <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/in/tanaji-vitekar/">
                <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
            </a>
        </div>
        {/* Address */}

        <div className='py-4 my-5 bg-gray-200' style={{marginLeft:"-1rem", marginRight:"-1rem"}}>
            <div className="flex items-center justify-center space-x-2">
                <GoLocation/>
                <span>Pune, India</span>
            </div>
            <p className='my-2'>tpvitekar@gmail.com</p>
            <p className='my-2'>+91 9834592981</p>
        </div>
        {/* Buttons */}
        <button onClick={()=> window.open("mailto:tpvitekar@gmail.com")} className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'>Email Me</button>
        {/* <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'>Toggle UI</button> */}
    </div>
    </>
  )
}

export default Sidebar;