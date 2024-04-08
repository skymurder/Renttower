import React from "react"
import Awards from "./awards/Awards"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"


const Home = () => {
  return (
    <>
      <Hero />
      <Recent />
      <Awards />  
    </>
    
  )
}

export default Home
