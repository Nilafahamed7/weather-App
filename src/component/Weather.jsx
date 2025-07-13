import React, { useState } from 'react'
import axios from 'axios'
import cloudy from "../assets/imgs/cloudy.png"

const Weather = () => {

    const [city, setcity] = useState('')
    const [weather,setweather] = useState('')
    const [temp,settemp] = useState('')
    const [desc,setdesc] = useState("")

    const weatherData = () => {
        var url = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9be925f94f5db9ddc62e1e6643453249`)

        url.then(function (data) {
            console.log(data.data)
            setweather(data.data.weather[0].main)
            settemp(data.data.main.temp)
            setdesc(data.data.weather[0].description)
        })
    }
    return (
        <div className='bg-black p-8'>
            <div className='p-6 bg-blue-500'>
                <h1 className='text-3xl font-semibold'>Welcome to Weather App</h1>
                <p>I can tell your city's current weather</p>
                <img className='mt-4 mb-4 h-32 object-contain ' src={cloudy} alt="" />
                <input onChange={(e) => {
                    setcity(e.target.value)
                }} className='border p-1 mt-2' type="text" placeholder='Enter your city' />
                <button onClick={weatherData} className='bg-black text-white px-2 py-1.5 rounded'>GetWeather</button>
                <p className='mt-4 '><b>Weather: </b>{weather}</p>
                {
                    temp !=="" && (
                    <p><b>Temperature: </b>{(temp-273.15).toFixed(1)}°C</p>
                )
                }
                <p><b>Description: </b>{desc}</p>
            </div>
        </div>
    )
}

export default Weather