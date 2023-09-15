'use client'
import * as React from 'react'
import styles from'./card.css'
import Image from 'next/image'
export default function Card({ delay, value, label, isCurrency, color, icon, percentage}) {

    const [loaded, setLoaded] = React.useState(styles.before);
    const [display, setDisplay] = React.useState(0);

    React.useEffect(() => {
        const animation = setTimeout(() => setLoaded(styles.after), delay);
        return () => clearTimeout(animation)
    }, []);

    React.useEffect(() => {
        let animationFrameId;
        let start = value - 100;
        const step = () => {
        setDisplay(start);
        start++;

        if (start <= value) {
            animationFrameId = requestAnimationFrame(step);
        }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
        cancelAnimationFrame(animationFrameId);
        };
    }, [])

    function addCommas(number) {
        var strNumber = String(number);
      
        var parts = strNumber.split('.');
        var integerPart = parts[0];
        var decimalPart = parts.length > 1 ? '.' + parts[1] : '';
      
        var formattedInteger = '';
        var length = integerPart.length;
        for (var i = 0; i < length; i++) {
          if (i > 0 && (length - i) % 3 === 0) {
            formattedInteger += ',';
          }
          formattedInteger += integerPart[i];
        }
      
        var formattedNumber = formattedInteger + decimalPart;
      
        return formattedNumber;
      }
      

    return <div className='flex-1 mr-[2%] last:mr-0 ' >
        <div className='bg-white rounded-[20px] p-[20px] border-2 border-[#E0E0E0] shadow-xl'>
            
                <div className='flex items-center justify-center rounded-[50%] w-[30px] h-[30px]' style={{backgroundColor: color}}>
                    <div className=''>
                    {icon}
                    </div>
                </div>
                
                <div className=' mt-[8px] font-lato text-[11px] text-black font-normal'>
                    <h2 className="font-lato">{label}</h2>
                </div>
                <div className='flex items-end justify-between'>
                <div className='flex '>
                    <h1 className="font-sans font-bold text-[21px]">{`${isCurrency ? '$':''}${addCommas(display)}`}</h1>
                </div>
                <div className='flex rounded-[34px] bg-[#E9F9EB] px-2 py-1    '>
                    <h1 className='font-fig text-[10px] text-[#3CC952]'>+{percentage}%</h1>
                </div>
            </div>
        </div>
    </div>
}