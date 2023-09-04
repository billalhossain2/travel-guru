import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import useTitle from "../hooks/useTitle";

const Booking = () => {
  useTitle('Booking')
  const {origin, destination, from_date, to_date} = useLoaderData();
  const {id} = useParams()
  const dateFromRef = useRef()
  const dateToRef = useRef()
  useEffect(()=>{
    dateFromRef.current.defaultValue = from_date;
    dateToRef.current.defaultValue = to_date;
  }, [])
  return (
    <div className='flex justify-center'>
    <div className="flex lg:flex-row flex-col gap-20 max-w-[90%] mx-auto h-screen mt-20">
    <div className="max-w-[400px] text-white space-y-3">
      <h1 className="text-6xl font-bold">Cox's bazar</h1>
      <p className="text-[16px]">
      Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
      </p>
    </div>
   {/* booking form  */}
   <form action="" className='bg-white max-h-[300px] p-5 min-h-[330px] rounded-lg'>
    <div className='mb-4'>
    <label className='text-black block' htmlFor="origin">Origin</label>
    <input className='bg-[#e6e1e1] p-2 rounded-[2px] font-bold outline-none w-[100%]' type="text" value={origin}/>
    </div>
    <div className='mb-4'>
    <label className='text-black block' htmlFor="Destination">Destination</label>
    <input className='bg-[#e6e1e1] p-2 rounded-[2px] font-bold outline-none w-[100%]' type="text" value={destination}/>
    </div>
    <div className='flex gap-3'>
    <div className=' '>
    <label className='text-black block' htmlFor="origin">From</label>
    <input ref={dateFromRef} className='bg-[#e6e1e1] p-2 rounded-[2px] font-bold outline-none' type="date"/>
    </div>
    <div className=''>
    <label className='text-black block' htmlFor="origin">To</label>
    <input ref={dateToRef} className='bg-[#e6e1e1] p-2 rounded-[2px] font-bold outline-none' type="date"/>
    </div>
    </div>
    <div>
      <Link to={`/${destination}/hotels/${id}`}>
      <button className="btn bg-[#F9A51A] hover:bg-[#F9A51A] border-0 w-[100%] mt-5 normal-case">Start Booking</button>
      </Link>
      </div>
   </form>
  </div>
  </div>
  )
}

export default Booking