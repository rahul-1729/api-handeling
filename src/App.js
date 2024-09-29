import {useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [lat,setLat]=useState(28.64)
  const [long,setLong]=useState(77.21)
  const [place,setPlace] =useState()
  const API_KEY='213662483145484ba17121136242909'
  const getWeather =()=>{
      axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${long}&days=q`).then(response=>setPlace(response.data.location)).
      catch(error=>console.log(error))
  }

  const handleLat=(e)=>{
      setLat(e.target.value)
  }
  const handleLong=(e)=>{
    setLong(e.target.value)
}

  useEffect(()=>getWeather,[])
  return (
     <div className='w-screen h-screen bg-slate-900 text-white flex flex-col items-center p-4 gap-2'>
      <div className='w-full max-w-[500px] h-[50px] bg-white'>
        <input type="text" className='w-full h-full p-1 focus:outline-none text-black text-xl' placeholder='Enter the latitude' value={lat} onChange={handleLat}/>
      </div>
      <div className='w-full max-w-[500px] h-[50px] bg-white'>
      <input type="text" className='w-full h-full p-1 focus:outline-none text-black text-xl' placeholder='Enter the latitude' value={long} onChange={handleLong}/>
      </div>
      <div className='w-full max-w-[130px] h-[50px] bg-sky-500 rounded-xl justify-center items-center flex text-xl font-bold'>
        <button className='flex justify-center items-center w-full h-full rounded-xl' onClick={getWeather}>Search</button>
      </div>
      
      <div className='text-white text-xl font-bold  pt-4'>
        Country: {place?.country}
      </div>
      <div className='text-white text-xl font-bold  pt-4'>
        Place Name: {place?.name}
      </div>

     </div>
  );
}

export default App;
