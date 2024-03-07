import React from 'react'
import HeroSection from '../Components/HeroSection'

function About() {
  const data = {
    title:"Welcome to ",
    secTitle:"Our Site"
}

  return (
    <div>
      <HeroSection data={data}/>
    </div>
  )
}

export default About