'use client'
import React from 'react'
import { useEffect,useState } from 'react'
import Chart from './Chart'
import { refresh } from '../../api/data'
const ChartFinal = () => {

    const [chart,setChart] = useState({})
    const [buffering,setBuffering]=useState(true)
    useEffect(() => {
        async function refreshData() {
            await refresh()
            .then((response) => {
                setChart(response.chart)
                // setSchedules(response.schedule)
                // setPie(response.pie)
                
            })
            .catch((err) => {console.error(err); isError(true)})
            setBuffering(false)
        }
        refreshData();
    }, [])

    // function Legend({icon, label}) {
    //     return <div className={styles.legend}>
    //         <Image
    //             src={icon}
    //             height={8}
    //             width={8}
    //             alt={''}
    //             style={{marginRight: '15%', marginTop: '5%'}}
    //         />
    //         <p className={lato.className}>{label}</p>
    //     </div>
    // }

  return (
    <div className="flex-col justify-between  rounded-[20px] py-[20px] border-2 border-[#E0E0E0] shadow-xl bg-white mt-[20px] px-7" >
      <div className='flex items-center justify-start font-mono text-lg font-bold'>
        Activities
      </div>
      <div className='flex items-center justify-between'>
        <div className='font-mono text-[13px] text-[#858585]'>
        May - June 2021
        </div>
        <div className='flex items-start'> 
        <div className='flex items-center p-1 justify-center mr-8'>
          <div className=' bg-[#EE8484] rounded-[50%] w-[10px] h-[10px]'></div>
          <div className='ml-3 font-lato text-xs'>
              Guest
          </div>
        </div>
        <div className='flex items-center p-1 justify-center'>
          <div className=' bg-[#98D89E] rounded-[50%] w-[10px] h-[10px]'></div>
          <div className='ml-3 font-lato text-xs'>
              User
          </div>
        </div>
        </div>
      </div>
     
      <div className='flex pt-6' style={{width: '100%', height: '100%'}}>
                        {Object.keys(chart).length > 0 ? <Chart labels={chart.labels} data1={chart.data1} data2={chart.data2} /> : null}
      </div>
      
      
      
    </div>
    
    // <div className=''>
    //         <div className={styles.container}>
    //             <div style={{flex: 1.2, display: 'flex'}}>
    //                 <div style={{flex: 0.3}}/>
    //                 <div className={styles.header}>
    //                     <h3>Activities</h3>
    //                     <div style={{display: 'flex', alignItems: 'center'}}>
    //                         <p>May 2023 - Jun 2023</p>
    //                         <Image
    //                             src={'/dropdown.png'}
    //                             height={8}
    //                             width={8}
    //                             alt={''}
    //                             style={{marginLeft: '1%'}}
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className={styles.legends}>
    //                     <Legend icon={'/guest.png'} label={'Guest'} />
    //                     <Legend icon={'/user.png'} label={'User'} />
    //                 </div>
    //                 <div style={{flex: 0.3}}/>
    //             </div>
    //             <div style={{flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
    //                 <div style={{width: '92%', height: '85%'}}>
    //                     {Object.keys(chart).length > 0 ? <Chart labels={chart.labels} data1={chart.data1} data2={chart.data2} /> : null}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
  )
}

export default ChartFinal