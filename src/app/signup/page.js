"use client";
import React from 'react'
import { useEffect } from 'react';
import { redirect } from "next/navigation";
import { FcGoogle } from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';
import {BiLogoDiscord} from 'react-icons/bi';
import {BiLogoApple} from 'react-icons/bi'
import { signIn, useSession } from 'next-auth/react';


export default function SignUp() {
    const Session=useSession();
    // useEffect(()=>{
    //     if(Session.status=="authenticated"){
    //         redirect("/dashboard");
    //     }
    //   })
    
  return (
    <div className='bg-[#F8FAFF] flex min-h-screen '>
        <div className=' bg-gradient-to-r from-[#4285F4] to-[#286DE0] w-3/5 h-screen text-white transform -skew-x-[10deg] -translate-x-[75px]'>
        <div className='flex flex-col  items-center justify-between h-screen py-12'>
        <div className='skew-x-[10deg] block w-3/4 font-pop text-2xl' >
            LOGO
        </div>
        <div className='font-mono text-7xl skew-x-[10deg]'>
            Board.
        </div>
        <div className='pl-[100px] flex items-center justify-center gap-10 skew-x-[10deg]'>
           <FaGithub size={45}/>
           <AiFillTwitterCircle size={50}/>
           <FaLinkedin size={45}/>
           <BiLogoDiscord size={50}/>
        </div>
        </div>
        </div>
        <div className=' flex  items-center justify-center bg-[#F8FAFF] w-3/5 h-screen -skew-x-[10deg] -translate-x-[70px] '>
            <div className='skew-x-[10deg]'>
            <div className=''>
            <div className='relative font-mono text-4xl'>
                Sign In
            </div>
            <div className='mt-2'>Sign in to your acccount</div>
            <div className='flex items-center'>
            <div className='flex items-center justify-center mt-6 bg-white rounded-[10px]'>

            <div className='px-4 py-2 flex items-center justify-center'>
                <div className=''><FcGoogle size={15} /> </div>
                <button onClick={()=> signIn("google")} className='ml-2 text-xs text-[#858585]'>
                Sign in with Google 
                </button>
                </div>
            </div>
            <div className='flex items-center justify-center mt-6 ml-8 bg-white rounded-bd'>
                <div className='px-4 py-2 flex items-center justify-center'>
                <div className=''><BiLogoApple size={15} color='grey' /> </div>
                <div className='ml-2 text-xs text-[#858585]'>
                Sign in with Apple 
                </div>
                </div>
               
            </div>
            </div>
            <div className='grid place-items-center w-full mt-6'>
                <div className='bg-white rounded-[20px] w-full'>
                    <form>
                        <div className='grid place-items-start px-6 pt-6 pb-5'>
                        <label className='font-lato text-black'>Email address</label>
                        <input className='bg-[#F5F5F5] px-5 py-2 w-full mt-3 rounded-bd font-lato ' type='text' placeholder='Email'/>
                        </div>
                        <div className='grid place-items-start px-6 pb-5'>
                        <label className='font-lato'>Password</label>
                        <input className='bg-[#F5F5F5] px-5 py-2 w-full mt-3 rounded-bd font-lato' type='password' placeholder='Password'/>
                        </div>
                        <div className='grid place-items-start px-6 pb-6'>
                            <a className='text-[#346BD4] font-lato'href='/'>Forgot password?</a>
                        </div>
                        <div className='grid place-items-start px-6 pb-6'>
                        
                        <button type='button'  className='relative w-full rounded-bd p-2 bg-gradient-to-r from-[#4285F4] to-[#286DE0] text-white font-mono' >
                            Sign In
                        </button>
                        
                        </div>
                       </form>
                </div>
                <div className='font-lato text-slate-500 mt-4'  >
                Don’t have an account? <span className='text-[#346BD4]'>Register Here</span> 
                </div>
                
                
            </div>
            </div>
            </div>
        </div>
    </div>

  )
}
