import React from 'react'
import styled from 'styled-components'

function CartAmmount({amount, increment, decrement }) {
  return (
    <Wrapper>  
    <div className='parent'>
        <button onClick={decrement}>-</button>
        <p className='value'>{amount}</p>
        <button onClick={increment}>+</button>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    .parent{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        margin: 1rem 0;
    }
    button{
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #82a78a;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 5px;
    }
    button:hover{
        background-color: #354e51;
    }
    .value{
        font-size: 2rem;
    }
`

export default CartAmmount