import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Team Story' subtitle='Check out our company story and work process' />
            <p>Dinislam, Adilet, and Dastan embark on a project that not only reflects their shared passion but also strengthens their bond. Collaborating seamlessly, they blend their diverse perspectives and skills to create a project about "relating" – exploring the intricate dynamics of human connections. Through meticulous planning and teamwork, they craft a multimedia masterpiece that delves deep into the nuances of relationships, from familial ties to romantic bonds, and everything in between.</p>
            <div className="blueLine"></div>
            <p>Their project serves as a testament to the power of collaboration and empathy, as they strive to capture the essence of what it means to relate to one another. Through interviews, storytelling, and artistic expression, they shed light on the universal experiences that connect us all, fostering understanding and compassion in an increasingly fragmented world. As they unveil their creation to the world, Dinislam, Adilet, and Dastan not only celebrate their collective achievement but also reaffirm the strength of their friendship and the transformative power of shared creativity.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
