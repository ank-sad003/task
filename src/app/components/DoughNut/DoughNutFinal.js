'use client'
import React from 'react'
import { useEffect,useState } from 'react'
import PieChart from './Pie'
import { refresh } from '../../api/data'

const DoughNutFinal = () => {
    const [pie,setPie] = useState({})
    const [buffering,setBuffering]=useState(true)
    const yellow='#F6DC7D'
    function Legend({label,value,color}) {
        return <div className='flex items-startjustify-start pl-4 pb-3 last:pb-0'>
           
            <div>
            <p className=' text-sm font-mono font-bold text-black'>{label}</p>
            <p className='font-lato text-xs'>{value}%</p>
            </div>
            
        </div>
    }
    useEffect(() => {
       async function refreshData() {
            await refresh()
            .then((response) => {
                setPie(response.pie)
            })
            .catch((err) => {console.error(err); isError(true)})
            setBuffering(false)
        }
        refreshData();
    }, [])
  return (
    
         <div className='flex-col  justify-between mt-[20px] rounded-[20px] bg-white pl-7 pr-20 pb-3 border-2 border-[#E0E0E0] shadow-xl mr-7'>
            <div className='flex justify-between'>
                <div className='flex font-bold font-mono text-lg pt-4'>
                Top Products
                </div>
                <div className='flex pt-3 font-mono text-[13px] text-[#858585]'>
                    May - June 2021
                </div>
               
            </div>
            <div className='flex items-center justify-between'>
            <div className='flex  items-end pt-1' style={{height: '80%', width: '30%'}}>
                    {Object.keys(pie).length > 0 ? <PieChart data={pie} /> : null}
            </div>
            <div></div>
            
            <div className='flex-col pr-12 pt-2'>
                
                <div className='flex  font-mono text-[13px] text-[#858585]'>
                {Object.keys(pie).length > 0 ? <div className=''>
                    <div className='flex pb-3'>
                <div className='mt-1.5 flex rounded-[50%] w-3 h-3 bg-[#98D89E]'></div>
                
                    <Legend label={'Basic Tees'} value={pie.values[0]}  />
                    </div >
                <div className='flex pb-3'>
                    <div className='mt-1.5 flex rounded-[50%] w-3 h-3 bg-[#F6DC7D]'></div>
                    <Legend label={'Custom Short Pants'} value={pie.values[1]}   />
                </div>
                <div className='flex'>
                    <div className='mt-1.5 flex rounded-[50%] w-3 h-3 bg-[#EE8484]'></div>
                    <Legend label={'Super Hoodies'} value={pie.values[2]} />
                    </div>
                </div>:<div className='' />}
                </div>
                <div className='flex pt-3 font-mono text-[13px] text-[#858585]'>
                
                </div>
                
                </div>
            </div>
            

        </div>
  )
}

export default DoughNutFinal