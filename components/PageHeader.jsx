import React from 'react'

function PageHeader() {
  return (
    <div className='flex flex-col items-center'>
        <div className="text-[14px] sm:text-[28px] text-white text-center">Best Price to Trade</div>
        <div className="flex justify-between items-center space-x-3 sm:space-x-24">
            <div className="fle flex-col items-center justify-center">
                <div className="text-[14px] sm:text-[40px] font-bold text-[#5dc7c2]">0.35 %</div>
                <div className="text-[7px] sm:text-[20px] text-center text-[#fff]">5 Mins</div>
            </div>
            <div className="fle flex-col items-center justify-center">
                <div className="text-[14px] sm:text-[40px] font-bold text-[#5dc7c2]">0.35 %</div>
                <div className="text-[7px] sm:text-[20px] text-center text-[#fff]">1 HOUR</div>
            </div>
            <div className="fle flex-col items-center justify-center">
                <div className="text-[24px] sm:text-[80px] font-bold text-[#5dc7c2]">₹ 24,47,200</div>
                <div className="text-[7px] sm:text-[20px] text-center text-[#fff]">Average BTC/INR net price including commission</div>
            </div>
            <div className="fle flex-col items-center justify-center">
                <div className="text-[14px] sm:text-[40px] font-bold text-[#5dc7c2]">0.35 %</div>
                <div className="text-[7px] sm:text-[20px] text-center text-[#fff]">1 DAY</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-[14px] sm:text-[40px] font-bold text-[#5dc7c2]">0.35 %</div>
                <div className="text-[7px] sm:text-[20px] text-center text-[#fff]">7 DAY</div>
            </div>
            
            
        </div>
    </div>
  )
}

export default PageHeader