"use client"
import React, { useState } from 'react'
import {IoIosAdd} from 'react-icons/io'
import Modal from '../Modal/Modal'
import useModal from '@/app/hooks/useModal'
import UserInfoText from './UserInfoText'
import {AiOutlineInstagram} from 'react-icons/ai'
import PhoneIcon from '../images/Phone.svg'
import {CiMail} from 'react-icons/ci'
import {AiOutlineYoutube} from 'react-icons/ai'
const AddProfile = () => {

  const { isModalOpen, setHandleIsModalOpen } = useModal();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const setHandleSetUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    instagram: user.instagram,
    youtube: user.youtube,
  });

  // updating the usercard
  const handleUpdateUser = () => {
    setUserInfo(user);
    setHandleIsModalOpen();
  };

  const icon3 = <AiOutlineInstagram color='red'/>
  const icon1= <PhoneIcon/>
  const icon2= <CiMail/>
  const icon4=<AiOutlineYoutube color='red'/>
  return (
    <div>
      <div>
      {userInfo.name !== "" ||
          userInfo.email !== "" ||
          userInfo.phone !== "" ? (
            <div className='flex-col  justify-between mt-[20px] rounded-[20px] bg-white pl-7 pr-7 py-1 border-2 border-[#E0E0E0] shadow-xl ml-7'>
               <div className="">
              <p className=" text-[24px] font-semibold lg:mb-5 md:mb-5 mb-4 font-figtree p-3 mt-5">
                {user.name}
              </p>
              <div className=" flex flex-wrap justify-between items-center">
                <div className="w-[40%]">
                  <UserInfoText
                    text={userInfo.phone}
                    userInfoSocailBgColor="bg-[#E9F9EB]"
                    icon={icon1}
                  />

                  <UserInfoText
                    text={userInfo.email}
                    userInfoSocailBgColor="bg-[#EBE6F9]"
                    icon={icon2}
                  />
                </div>

                <div className="w-[40%]">
                  <UserInfoText
                    text={userInfo.instagram}
                    userInfoSocailBgColor="bg-[#FFE9EC]"
                    icon={icon3}
                  />

                  <UserInfoText
                    text={userInfo.youtube}
                    userInfoSocailBgColor="bg-[#FFE9E9]"
                    icon={icon4}
                  />
                </div>
              </div>
            </div>
            </div>
          ):(
            <div className='flex-col  justify-between mt-[20px] rounded-[20px] bg-white pl-7 pr-7 py-1 border-2 border-[#E0E0E0] shadow-xl ml-7 cursor-pointer' onClick={setHandleIsModalOpen}>
           <div className='flex items-center justify-center py-1 '>
             <div className='flex-col items-center justify-center py-9'>
             <div className='flex items-center justify-center rounded-[50%] w-[80px] h-[80px] bg-[#F5F5F5] stroke-[#F2F2F2]'>
                 <div className='flex'>
                 <IoIosAdd color='#999CA0' size={75}/>
                 </div>
             </div>
             <div className='flex items-center justify-center py-2'>
             <p className='font-fig text-normal text-[#858585]'>Add Profile</p>
           </div>
             </div>       
     </div>
     
    </div> 
            )}  
      </div>

   
    {/* <div className='flex-col  justify-between mt-[20px] rounded-[20px] bg-white pl-7 pr-7 py-1 border-2 border-[#E0E0E0] shadow-xl ml-7 cursor-pointer' onClick={setHandleIsModalOpen}>
           <div className='flex items-center justify-center py-1 '>
             <div className='flex-col items-center justify-center py-9'>
             <div className='flex items-center justify-center rounded-[50%] w-[80px] h-[80px] bg-[#F5F5F5] stroke-[#F2F2F2]'>
                 <div className='flex'>
                 <IoIosAdd color='#999CA0' size={75}/>
                 </div>
             </div>
             <div className='flex items-center justify-center py-2'>
             <p className='font-fig text-normal text-[#858585]'>Add Profile</p>
           </div>
             </div>       
     </div>
     
    </div> */}
    {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setHandleIsModalOpen={setHandleIsModalOpen}
          user={user}
          setHandleSetUser={setHandleSetUser}
          handleUpdateUser={handleUpdateUser}
        />
      )}
    </div>

  )
}

export default AddProfile