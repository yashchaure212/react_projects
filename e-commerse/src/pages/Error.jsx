import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Error() {
  return (
    <Wrapper>
      <div className="parent">
        <div className="left">
          <img src="https://www.freeiconspng.com/thumbs/error-icon/orange-error-icon-0.png" alt="tp" />
        </div>
        <div className="right">
          <h1>404</h1>
          <h3>look like you're lost</h3>
          <h4>the page you are looking for is not available</h4>
          <Link className='link' to="/">
            <button>Go to Website</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .parent{
    height: 80vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left{
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left img{
    height: 70%;
  }
  .right{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }
  .right h1{
    font-size: 20rem;
    margin-bottom: -2rem;
    color: #4d5f43;
  }
  .right h3{
    font-size: 3rem;
    text-transform: uppercase;
  }
  .right h4{
    font-size: 1.5rem;
  }
  .right button{
    font-size: 2rem;
    text-decoration: none;
    color: #222;
    background-color: #4d5f43;
    outline: none;
    border: none;
    padding: 1rem 3rem;
    border-radius: 10px;
    font-size: 1.5rem;
    color: #fff;
  }
  .right button:hover{
    background-color: #8aa77b;
  }
`
export default Error