import { useEffect, useState } from 'react'
import './App.css'
import  axios  from 'axios'
import Weather from './componets/Weather'
import oxa from './assets/oxa.jpg'
import FormWeather from './componets/FormWeather'
import bg1 from './assets/bg1.jpg'

function App() {

  const [searchCity, setSearchCity] = useState('')

  
  

  

  const bgImage = { 
    backgroundImage: `url("${bg1}")`,
    backgroundSize: "cover",
    backgroundColor: "rgba(0,0,0,0.6)"
    
  }

  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {

    
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude


      const API_KEY = "6923607ee8e0e4c3991cce51f50cd418"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

      //console.log(url)

      axios.get(url)
        .then(({data}) => setWeatherInfo(data))
        .catch((err) => console.log(err))
  }

  

  // const cityWeather = () => {

  //   const API_KEY1 = "6923607ee8e0e4c3991cce51f50cd418"
  //   const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${handleSubmit}&appid=${API_KEY1}`
  //   // console.log(urlCity)

  //   axios.get(urlCity)
  //       .then(({data}) => setSearchCity(data))
  //       .catch((err) => console.log(err))
    
  // }
  
  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  
  }, [])
  


  return (
    <>
    <main className="min-h-screen text-white font-lato flex justify-center items-center px-4 " style={bgImage}>
      <div>
        <FormWeather searchCity={searchCity}/>
              
        <Weather weatherInfo={weatherInfo}
                />
        {/* <div className='bg-gradient-to-t'>
          <img src={"/images/oxa.jpg"} alt="" />
        </div> */}
      </div>  
    </main>
    
  </>   
  ) 
}

export default App
