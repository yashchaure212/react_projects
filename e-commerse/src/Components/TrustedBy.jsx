import React from 'react'
import styled from 'styled-components'
import { PiGithubLogoFill, PiGitlabLogoSimpleFill, PiInstagramLogoFill, PiMessengerLogoFill, PiPhosphorLogoFill } from "react-icons/pi";

function TrustedBy() {
  return (
    <Wrapper>
      <div className="parent">
        <h3>Trusted by 1000+ companies</h3>
        <div className="logos">
          <PiGitlabLogoSimpleFill className='icon'/>
          <PiGithubLogoFill className='icon'/>
          <PiInstagramLogoFill className='icon'/>
          <PiMessengerLogoFill className='icon'/>
          <PiPhosphorLogoFill className='icon'/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #e1e9e3;
  margin: 2rem 0rem;
  .parent{
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
  }
  h3{
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
  }
  .logos{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width:1250px;
  }
  .icon{
    font-size: 5rem;
    color: #2e3d45;
    transition: 0.1s all ease-in;
  }
  .icon:hover{
    scale: 1.3;
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    background-color: #e1e9e3;
    margin: 1.5 0rem;
  .parent{
    width: 100vw;
    height: 15vh;
    gap: 3rem;
  }
  .logos{
    width: 50vh;
  }
  .icon{
    font-size: 4rem;
  }
  }
`
export default TrustedBy