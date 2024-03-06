"use client";
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Connect = () => {
  return (
    <div id="contact" className="w-full p-8 h-full">
        <h1 className="font-poppins font-semibold text-[56px]">
            Let us Connect
        </h1>

        <p className="font-poppins mt-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident unde porro ad quis, at repellat temporibus itaque illum obcaecati dicta laborum? Debitis, pariatur! Cumque ut exercitationem repellendus similique sed et!</p>
        <button className="w-36 mt-20 rounded-3xl bg-black border-white border-2 text-white h-16 p-4 hover:bg-dimWhite hover:text-black hover:border-black transition" onClick={()=>{window.open("./contactform","_black");}}>Talk with Me</button>
        <div className="flex flex-row gap-8 mt-16 mb-24">
            <FaLinkedin size={100} className="cursor-pointer" onClick={()=>{window.open("https://www.linkedin.com/in/kabin-ghale/","_blank");}}/>
            <FaGithub className="cursor-pointer" size={100} onClick={()=>{window.open("http://www.github.com/k-ghale","blank");}}/>
            <MdOutlineEmail className="cursor-pointer" size={100} onClick={()=>{window.open("http://www.gmail.com","_blank");}}/>
        </div>
    </div>
  )
}

export default Connect