"use client";
import React, { useState } from "react";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex-col flex space-y-8 sm:flex-row justify-between p-8 items-center">
      <div className="text-5xl text-[#68c3c0]">HODLINFO</div>
      <div className="flex space-x-4">
        <div className="border-solid border-2 rounded-lg p-2 text-sm bg-[#2f3240]">
          INR &#9660;
        </div>
        <div className="border-solid border-2 rounded-lg p-2 text-sm bg-[#2f3240]">
          INR &#9660;
        </div>
        <div className="border-solid border-2 rounded-lg p-2 text-sm bg-[#2f3240]">
          BUY BTC
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="border-solid border-2 rounded-full p-2 text-sm bg-gray-700">
          S7
        </div>
        <div className="border-solid border-2 rounded-lg p-2 text-sm bg-[#68c3c0]">
          Connect Telegram
        </div>

        <div
          className={`w-12 h-6 bg-[#2f3240] rounded-full p-1 flex items-center cursor-pointer ${
            isToggled ? "bg-blue-500" : ""
          }`}
          onClick={handleToggle}
        >
          <div
            className={`w-5 h-5 bg-[#68c3c0] rounded-full shadow-md transform duration-300 ${
              isToggled ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
