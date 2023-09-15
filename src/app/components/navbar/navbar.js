'use client'
import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import profile from '../images/profile.png'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react';
const Navbar = () => {
    const router=useRouter();
    const session=useSession();
    if(session.status==="unauthenticated")
    {
        console.log(session)
        router.push('/signup')
    }

    
  return (
    <div className='flex items-center justify-between'>
        <div className='flex mt-[10px]'>
            <h1 className='font-mono font-bold text-2xl'>Dashboard</h1>
        </div>
        <div className='flex items-center mt-[10px]' >
            <div className='flex bg-white pl-2 pr-4 py-1 w-[200px] border-[#858585] rounded-[10px]  mr-5'>
                <input className='w-full font-lato text-sm focus:outline-none placeholder:text-[#B0B0B0]' type='text' placeholder='Search...'/>
                <div className='grid items-center' >
                    <AiOutlineSearch color='#B0B0B0'/>
                    
                </div>
            </div>
            <div className='flex mr-8'>
                <BiBell size={20}/>
            </div>
            <div onClick={()=> signOut("google")} >
                <Image src={profile} className='rounded-[50%]'/>
            </div>
        </div>
    </div>
  )
}
export default Navbar