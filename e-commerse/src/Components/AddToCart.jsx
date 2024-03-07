import React, { useState } from "react";
import styled from "styled-components";
import CartAmmount from "./CartAmmount";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ data }) => {

  const {addToCart} = useCartContext();
  const { colors, id, stock } = data;

  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const increment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);

  }
  const decrement = () => {
    amount !== 1 ? setAmount(amount - 1) : setAmount(amount);
    //    amount > 1 ? setAmount(cartAmount - 1) : setAmount(1);
  }

  return (
    <Wrapper>
      <div className="parent">
        <p>
          Colors:
          {colors.map((curr, index) => {
            return (
              <button
                onClick={() => setColor(curr)}
                className={color === curr ? "active colorbtn" : "colorbtn"}
                style={{ backgroundColor: curr }}
                key={index}
              ></button>
            );
          })}
        </p>
        <CartAmmount amount= {amount} increment={increment} decrement={decrement}/>
        <NavLink to="/cart" >
            <button onClick={() => addToCart(id, color, amount, data)} className="cartbtn"><span className="carttext">Add to Cart</span></button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .parent .colorbtn {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-left: 1.5rem;
    opacity: 0.5;
    border: none;
    outline: none;
    border: 4px solid transparent;
  }
  .parent .active {
    border: 4px solid #444;
    opacity: 1;
  }
  .cartbtn{
    background-color: #2e3d45;
    padding: 1rem 3rem;
    border-radius: 10px;
    margin: 1rem 0;
    border: none;
    outline: none;
  }
  .cartbtn:hover{
    background-color: #354e51;
  }
  .carttext{
    color: #fff;
  }
`;

export default AddToCart;
