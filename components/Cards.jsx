"use client"
import React, { useEffect, useState } from "react";

function Cards() {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/data/fetchData", {
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const res = await response.json();
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col">
        <div className="flex justify-between p-12 w-[36rem] sm:w-full">
          <div className="text-[14px] font-bold text-[#818388]">#</div>
          <div className="text-[14px] font-bold text-[#818388]">Platform</div>
          <div className="text-[14px] font-bold text-[#818388]">
            Last Traded Price
          </div>
          <div className="text-[14px] font-bold text-[#818388]">
            Buy / Sell Price
          </div>
          <div className="text-[14px] font-bold text-[#818388]">Difference</div>
          <div className="text-[14px] font-bold text-[#818388]">Savings</div>
        </div>
        {data.map((item, index) => (
          <div key={item._id} className="w-[36rem] sm:w-full flex justify-between px-12 bg-[#2f3240] rounded-lg m-4 p-4">
            <div className="text-[14px] font-bold text-[#818388]">{index}</div>
            <div className="text-[14px] font-bold text-[#818388]">{item.name}</div>
            <div className="text-[14px] font-bold text-[#818388]">₹ {item.last}</div>
            <div className="text-[14px] font-bold ">₹ {item.buy} / ₹ {item.sell}</div>
            <div className="text-[14px] font-bold  text-red-600">
              {((item.buy - item.sell) / 100).toPrecision(4)} %
            </div>
            <div className="text-[14px] font-bold text-[#818388]">▼ ₹ {item.volume}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
