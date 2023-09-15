// 'use client'
// import React, {Dispatch,SetStateAction,useEffect,useState}from 'react'
// import { useRouter } from 'next/navigation';
// import {TfiClose} from 'react-icons/tfi'
// import Basic from '../Basic/Basic';
// import Contact from '../Contact/Contact';
// const Modal = () => {
//     const [tab, setTab] = useState("Basic");
//     const [color1, setColor1]= useState('#3F84F8');
//     const [color2,setColor2]=useState('#D9D9D9')
//     // const router = useRouter();
    
//     // const handleClick=()=>{
//     //     router.push("");
//     // }
    
//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center'>
//         <div className='w-1/3'>
//         <div className='bg-white rounded-2xl'>
//             <div className='flex items-center justify-between p-5 border-b-2 border-[#F2F2F2]'>
//                 <div className='font-fig font-semibold text-[20px] '>
//                     Add New Profile
//                 </div>
//                 <div>
//                     <TfiClose size={20} color='#999CA0'/>
//                 </div>
//             </div>
//             <div className='flex text-black font-fig font-semibold'>
//                 <div className='flex-1  p-5  '>
                    
//                 <div className='flex justify-center '>
//                      <div className='' onClick={()=> {setTab("Basic");setColor1('#3F84F8');setColor2('#D9D9D9')}}>Basic</div>  
//                 </div>
//                 <div className='w-full pt-2 '>
//                     <div className='rounded-xl  h-1 w-full' style={{backgroundColor:color1}}></div>
//                 </div>
//                 </div>
//                 <div className='flex-1 p-5'>
//                 <div className='flex justify-center'>
//                         <div className='' onClick={()=> {setTab("Contact");setColor1('#D9D9D9');setColor2('#3F84F8')}}>Contact</div>
//                 </div>
//                 <div className='w-full pt-2 '>
//                     <div className='rounded-xl  h-1 w-full' style={{backgroundColor: color2}}></div>
//                 </div>
//                 </div>
                
//             </div>
//             <div className='flex px-5 py-2 items-start'>
//                 {tab === "Basic" && <Basic />}
//                 {tab === "Contact" && <Contact/>}
//             </div>
//         </div>

//         </div>
        
//     </div>
//   )
// }

// export default Modal
"use client";

import useModalTab from "@/app/hooks/useModalTab";
import ModalTextInput from "./ModalTextInput";
import {TfiClose} from 'react-icons/tfi'
import {FiChevronDown} from 'react-icons/fi'
export default function Modal({
  user,
  setHandleSetUser,
  setHandleIsModalOpen,
  handleUpdateUser,
}) {
  const { activeTab, setHandleModalActiveTab } = useModalTab();

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div className=" bg-white rounded-xl lg:w-[554px] md:w-[554px] w-full shadow-md  z-50 mx-2 lg:mx-0 md:mx-0">
        <div className="flex justify-between py-4 px-6 border-b-2">
          <p className="font-fig text-[#231F20] font-semibold text-[20px] w-[40%]">Add New Profile</p>
          <button
            onClick={() => {
              setHandleIsModalOpen();
            }}
          >
            <TfiClose color='#999CA0'/>
          </button>
        </div>
        <div className="flex justify-between mt-6  h-6">
          <p className="w-full text-center font-semibold font-fig">
            Basic
          </p>
          <p className="w-full text-center font-semibold font-fig">
            Social
          </p>
        </div>
        <div className="flex justify-center ">
        <div className='flex-1 px-6 py-3'>
          <div className={`${activeTab==="basic"?"rounded-xl  h-1 w-full bg-[#3F84F8]":"rounded-xl  h-1 w-full bg-[#D9D9D9]"}`}></div>           
          </div>
          <div className='flex-1 px-6 py-3'>
          <div className={`${activeTab==="social"?"rounded-xl  h-1 w-full bg-[#3F84F8]":"rounded-xl  h-1 w-full bg-[#D9D9D9]"}`}></div>           
          </div>
        </div>

        

        {activeTab === "basic" && (
          <div className="px-6 border-b border-[#F2F2F2]">
            <ModalTextInput
              name="name"
              labelText="Enter Name*"
              typeText="text"
              placeholerText="Eg. John Doe"
              userInfo={user.name}
              handleInputChange={setHandleSetUser}
            />

            <ModalTextInput
              name="email"
              labelText="Enter Email*"
              typeText="email"
              placeholerText="Eg. John@google.com"
              userInfo={user.email}
              handleInputChange={setHandleSetUser}
              icon={<FiChevronDown color="#999CA0"/>}
            />

            <ModalTextInput
              name="phone"
              labelText="Enter Phone*"
              typeText="phone"
              placeholerText="Eg. 9161908716"
              userInfo={user.phone}
              handleInputChange={setHandleSetUser}
              icon={<FiChevronDown color="#999CA0"/>}
            />
          </div>
        )}
        
        {activeTab === "social" && (
          <div className="px-6 border-b border-[#F2F2F2]">
            <ModalTextInput
              name="instagram"
              labelText="Instagram Link "
              labelTextExtra="(Optional)"
              typeText="text"
              placeholerText="Eg. ..instagram.com/username"
              userInfo={user.instagram}
              handleInputChange={setHandleSetUser}
            />

            <ModalTextInput
              name="youtube"
              labelText="Youtube Link "
              labelTextExtra="(Optional)"
              typeText="text"
              placeholerText="Eg. ..youtube.com/username"
              userInfo={user.youtube}
              handleInputChange={setHandleSetUser}
            />
          </div>
        )}
        <div className="flex justify-end items-center px-6 pb-4 ">
          {activeTab === "social" && (
            <>
              <button
                className=" mt-4 border-2 border-[#999CA0] px-3 py-2  text-black rounded-lg text-sm font-semibold font-figtree  w-16 h-10"
                onClick={() => setHandleModalActiveTab("basic")}
              >
                Back{" "}
              </button>
              <button
                className=" ml-2 mt-4 px-3 py-2 bg-blue-500 text-white rounded-lg text-smfont-semibold font-figtree  w-16 h-10"
                onClick={() => {
                  if (
                    user.name === "" ||
                    user.email === "" ||
                    user.phone === ""
                  ) {
                    alert("All fields are required!");
                  } else {
                    setHandleIsModalOpen();
                    handleUpdateUser();
                  }
                }}
              >
                Done
              </button>
            </>
          )}
          {activeTab === "basic" && (
            <button
              className=" ml-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm text-center font-semibold font-figtree w-16 h-10"
              onClick={() => {
                if (
                  user.name === "" ||
                  user.email === "" ||
                  user.phone === ""
                ) {
                  alert("All fields are required!");
                } else {
                  setHandleModalActiveTab("social");
                }
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}