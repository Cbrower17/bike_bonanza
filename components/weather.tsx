import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { use } from 'react'
import Trails from '../pages/Trails'
import {useState} from 'react'

export default function Weather(){
    const [location,setLocation] = useState("");
    const [temperature,setTemperature] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");




const WEATHER_URL = "https://weatherapi-com.p.rapidapi.com/current.json";
const RAPIDAPI_KEY = "085555c39amshe0718fa9273d653p18bba4jsnfbd654e3119b";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '085555c39amshe0718fa9273d653p18bba4jsnfbd654e3119b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=37.687917%2C%20-112.336111', options)
	.then(response => response.json())
	.then(data => {
        setLocation(data.location.name);
		setTemperature(data.current.temp_f);
		setDescription(data.current.condition.text);
		setIcon(data.current.condition.icon);

        console.log(location, temperature, description)
	})
	.catch(err => console.error(err));
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={icon} alt="Icon" /></figure>
  <div className="card-body">
    <h2 className="card-title">{location}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{temperature} °F</button>
    </div>
  </div>
</div>
    )
}


    
