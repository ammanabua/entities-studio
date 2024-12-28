'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import AddNewArt from './AddNewArt'
import AddNewCollection from "./AddNewCollection";
import AddNewEvent from "./AddNewEvent";
import {Data} from "@/src/app/data";
import {CategoryScale} from "chart.js";
import Chart from "chart.js/auto";
import LineChart from "@/src/app/(pages)/admin/LineChart";
import PieChart from "@/src/app/(pages)/admin/PieChart";
import Collections from "@/src/app/(pages)/admin/Collections";

Chart.register(CategoryScale)
const Page = () => {

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    '&quot;#ecf0f1',
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 1
            }
        ]
    });

  return (
    <main className='bg-white flex justify-center align-center w-full'>
        <section className='w-full flex flex-col gap-20'>

            <div className='flex justify-start items-center gap-4'>
                <AddNewArt/>
                <AddNewCollection/>
                <AddNewEvent/>
            </div>
            <div className='grid grid-cols-2 w-full m-auto'>
                <div className='flex justify-center items-center'><LineChart chartData={chartData}/></div>
                <div className='flex justify-center items-center'><PieChart chartData={chartData}/></div>
                <div className='flex justify-center items-center'><Collections/></div>
                <div className='flex justify-center items-center'>Events</div>
                <div className='flex justify-center items-center'>Completed Orders</div>
            </div>

        </section>
    </main>
  )
}

export default Page