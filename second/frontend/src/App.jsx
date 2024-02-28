import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const[jokes,setJokes] = useState([])

  useEffect(()=>{
     axios.get('/api/jokes')
     .then((res)=> setJokes(res.data))
      console.log(jokes)
  },[])

  return (
    <>
      <h1>Hello world</h1>
      <h1>number of jokes : {jokes.length}</h1>
      {
        jokes.map((item,index) => (
        
        <h1 key={index}>{item.title}</h1>
        )
      ) }
    </>
  )
}

export default App
