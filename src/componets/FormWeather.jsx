import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const FormWeather = ({ searchCity, setSearchCity}) => {


    const handleSubmit = (e) => {
        e.preventDefault()
        const city = e.target.city;
        const API_KEY1 = "6923607ee8e0e4c3991cce51f50cd418"
        const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY1}`
    // console.log(urlCity)

        axios.get(urlCity)
             .then(({data}) => setSearchCity(data.data))
             .catch((err) => console.log(err))
        
          
          

    }

  // return (
  //   <div className=' items-center ml-11 mb-9'>
  //    <form className='items-center' onSubmit={handleSubmit}> 
           
  //       <input className="text-black ml-14 rounded-lg py-1" id="inputId" type="text" placeholder="Buscar ciudad" />
  //       <button className='ml-4  '>Buscar</button>

  //   </form> 
    
  //   </div>
  // )

  return (
    <div className=' items-center ml-11 mb-9'>
     <form className=' relative w-max mx-auto' onSubmit={handleSubmit}> 
           
        <input className= "bg-white relative peer z-0 w-12 h-12 rounded-full border cursor-pointer outline-none pl-12 focus:w-full focus:border-lime-300 focus:cursor-text focus:pl-16 focus:pr-4 text-black" id="inputId" type="text" placeholder="Buscar ciudad" />
          <img src="/images/search.png" className='z-3 absolute inset-y-0 my-auto w-12 px-3.5 stroke-gray-500 border-r border-transparent peer-focus:border-lime-300 peer-focus:border-lime-500 mt-auto' alt="" />
        <button className='ml-4  '>Search</button>

  

    </form> 
    
    </div>
  )




  
}

export default FormWeather