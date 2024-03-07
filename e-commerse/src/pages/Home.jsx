import React from 'react'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import TrustedBy from '../Components/TrustedBy'
import FeatureProducts from '../Components/FeatureProducts'
import styled from 'styled-components'

function Home() {
  const data = {
    title:"Shop Our ",
    secTitle:"New Collection"
}
  return (
    <Wrapper className='home'>
      <HeroSection data={data}/>
      <FeatureProducts/>
      <Services/>
      <TrustedBy/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: #fafafa;
`
export default Home