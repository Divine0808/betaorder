"use client"
import Link from "next/link"
import { useState } from "react";
import { FaGripLines } from "react-icons/fa6";




export default function Navbar () {
  const [menuOpen,setMenuOpen] = useState(false);
  
  const toggleMenu = ()=> {
    setMenuOpen(!menuOpen)
  }

    return (
        <main className="bg-white shadow shadow-gray-600 w-full">
           <div className="flex justify-between h-[50px] pt-3 px-5">
            <p className="text-blue-500 font-bold text-2x1">BetaOrder</p>
            <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                <li><Link href="#">Add-Order</Link></li>
                <li><Link href="#">Profile</Link></li>
                <li><Link href="#">Orders</Link></li>
            </ul>
           <Link href=""> <p className="hidden md:block h-[40px} w-[120px} bg-blue-400 text-white text-center rounded-lg">SignUp</p> </Link>

           <div className="block py-2 md:hidden">
               <FaGripLines className="text-2xl text-blue-500" 
               onClick={toggleMenu} />
           </div>
           </div>

           {menuOpen && (
           <div className="px-5 pb-1 md:hidden">
            <ul>
                <li><Link href="#">Add-Order</Link></li>
                <li><Link href="#">Order-list</Link></li>
                <li><Link href="#">Profile</Link></li>  
                <Link href=""> <p className="hidden md:block h-[30px} w-[80px} bg-blue-400 text-white text-center rounded-lg">SignUp</p> </Link>
            </ul>
           </div>
          )}
        </main>
    )
}