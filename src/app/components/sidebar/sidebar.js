import React from 'react'
import {LuPieChart} from "react-icons/lu"
import {BsTags} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import  Icon  from '../images/schedule_icon.png'
import Image from 'next/image'
const Sidebar = () => {
  return (
    <div className='h-full rounded-[20px] pl-[20%] py-[10%] bg-gradient-to-r from-[#4285F4] to-[#286DE0] w-full'>
        <h1 className='mt-[15px] text-4xl font-bold font-mono text-white '>Board.</h1>
        <div className='mt-[40px] '>
            <div className='flex items-center mb-[30px]'>
                
                   <LuPieChart color='white' size={18}/> 
                   <div className='ml-[15px] font-bold font-mono text-lg text-white'>
                    Dashboard
                   </div>
            </div>
            <div className='flex items-center mb-[30px]'>
                   <BsTags color='white' size={18}/> 
                   <div className='ml-[15px] font-normal font-mono text-lg text-white'>
                    Transactions
                   </div>
            </div>
            <div className='flex items-center mb-[30px]'>
                    <Image  src={Icon} width={18} height={18} alt="schedule"/>
                   <div className='ml-[15px]  font-mono text-lg text-white'>
                    Schedules
                   </div>
            </div>
            <div className='flex items-center mb-[30px]'>
                   <CgProfile color='white' size={18}/> 
                   <div className='ml-[15px] font-mono text-lg text-white'>
                    Users
                   </div>
            </div>
            <div className='flex items-center '>
                   <FiSettings color='white' size={18}/> 
                   <div className='ml-[15px] font-mono text-lg text-white'>
                    Settings
                   </div>
            </div>
            <div className='absolute bottom-20 text-white font-mono text-sm '>
            <p className='mb-[10px]'>Help</p>
            <p>Contact</p>
        </div>
        </div>
        {/* 
        <div id="menu">
            <div className="menu-item">
                <Image src={dashboard} width={20} height={20} alt="Dashboard"/>
                <p>Dashboard</p>
            </div>
            <div className="menu-item">
                <Image src={transactionIcon} width={20} height={23} alt="transaction"/>
                <p>Transactions</p>
            </div>
            <div className="menu-item">
                <Image src={scheduleIcon} width={20} height={20} alt="Schedule"/>
                <p>Schedules</p>
            </div>
            <div className="menu-item">
                <Image src={userIcon} width={20} height={20} alt="user"/>
                <p>Users</p>
            </div>
            <div className="menu-item">
                <Image src={settingsIcon} width={19} height={20} alt="Settings"/>
                <p>Settings</p>
            </div>
        </div>
        <div id="footer">
            <p>Help</p>
            <p>Contact</p>
        </div> */}
    </div>
  )
}

export default Sidebar