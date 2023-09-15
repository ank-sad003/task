'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'
import Card from '../Card/Card'
import PieChart from '../DoughNut/Pie'
import AddProfile from '../AddProfile/AddProfile'
import ChartFinal from '../Chart/ChartFinal'
import { refresh } from '@/app/api/data'
import DoughNutFinal from '../DoughNut/DoughNutFinal'
const DashBoard = () => {
  const [cards, setCards] = useState([])
  const [buffering, setBuffering] = useState(true)
  const [chart,setChart] = useState({})
  const [pie,setPie]=useState({})
  useEffect(() => {
    async function refreshData() {
        await refresh()
        .then((response) => {
            setCards(response.cards)
            setChart(response.chart)
            setPie(response.pie)
            // setSchedules(response.schedule)
            // setPie(response.pie)
            
        })
        .catch((err) => {console.error(err); isError(true)})
        setBuffering(false)
    }
    refreshData();
}, [])
  return (
    <div className='flex bg-[#F8FAFF] pl-[2%] pr-[2.5%] py-[2%] h-screen box-border' >
        <div id='dashboard-left' className='w-[280px]'>
            <Sidebar/>
        </div>
        <div className=' w-5/6 pl-[4%]'>
            <Navbar/>
            <div className='mt-[20px]'>
            <div className="flex items-center justify-between">
                    {cards.map((item, index) => {
                            return <Card key={index} delay={item.delay} label={item.label} value={item.value} isCurrency={index === 0} color={item.color} icon={item.icon} percentage={item.percentage} />
                        })}       
            </div>
            </div>
            <ChartFinal/>
            <div className='flex items-center justify-between'>
            <div className='flex-1'>
            <DoughNutFinal/>
            </div>
            <div className='flex-1'>
              <AddProfile/>
            </div>
            </div>
            
            
            
        </div>
    </div>
  )
}

export default DashBoard