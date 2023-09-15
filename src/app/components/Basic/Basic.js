import React from 'react'

const Basic = () => {
  return (
    
       <div className='grid place-items-center w-full'>
                <div className='w-full'>
                    <form>
                        <div className='grid place-items-start pb-5'>
                        <label className='font-fig  font-normal text-black '>
                          <span className="after:content-['*']" >
                            Enter Name
                          </span>
                        </label>
                        <input className='bg-[#FFFFFF] px-5 py-2 w-full mt-3 rounded-bd font-fig  font-normal text-black placeholder-[#999CA0] border border-[#F2F2F2]' type='text' placeholder='Eg. John Doe' required/>
                        </div>
                        <div className='grid place-items-start  pb-5'>
                        <label className='font-fig  font-normal text-black '>
                          <span className="after:content-['*']" >
                            Enter Email
                          </span>
                        </label>
                        <input className='bg-[#FFFFFF] px-5 py-2 w-full mt-3 rounded-bd font-fig  font-normal text-black placeholder-[#999CA0] border border-[#F2F2F2]' type='email' placeholder='Eg. John@xyz.com' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'/>
                        </div>
                        <div className='grid place-items-start  pb-5'>
                        <label className='font-fig  font-normal text-black '>
                          <span className="after:content-['*']" >
                            Enter Phone
                          </span>
                        </label>
                        <input className='bg-[#FFFFFF] px-5 py-2 w-full mt-3 rounded-bd font-fig  font-normal text-black placeholder-[#999CA0] border border-[#F2F2F2]' type='phone' placeholder='Eg. 9123456789' required pattern='[6-9]{1}[0-9]{9}'/>
                        </div>
                        <div className='grid place-items-end px-6 pb-6'>
                        </div>
                       </form>
                </div>   
            </div> 

            
    
  )
}

export default Basic