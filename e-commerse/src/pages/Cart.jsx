import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import PriceFormatter from "../Components/Helper/PriceFormatter";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import CartAmmount from "../Components/CartAmmount";
import { NavLink } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";

function Cart() {
  const {
    cart,
    total_Price,
    shipping_Fee,
    removeItem,
    clearCart,
    decrement,
    increment,
  } = useCartContext();

  // const increment = () => {
  // //  amount < stock ? setAmount(amount + 1) : setAmount(stock);

  // }
  // const decrement = () => {
  //   // amount !== 1 ? setAmount(amount - 1) : setAmount(amount);
  //   //    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // }

  if (cart.length == 0) {
    return (
      <Wrapper>
        <h6>No Items In Cart</h6>;
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="left">
        {cart.map((curr, index) => {
          console.log(curr);
          return (
            <div className="parent" key={index}>
              <div className="left">
                <img src={curr.image} alt={curr.name} />
                <div className="mid">
                  <span className="name">{curr.name}</span>
                  <div className="info">
                    <span className="num">
                      {curr.max ? "in quantity" : "out of stock"}
                    </span>
                    <span className="price">
                      <PriceFormatter price={curr.price} />{" "}
                    </span>
                  </div>
                  <div
                    style={{ backgroundColor: curr.color }}
                    className="color"
                  ></div>
                  
                  
                </div>
              </div>
                  <CartAmmount amount= {curr.amount} increment={() => increment(curr.id)} decrement={() => decrement(curr.id)}/>
              <div className="right">
                <span className="price">
                  <PriceFormatter price={curr.price * curr.amount} />{" "}
                </span>
                <div className="save-del">
                  <span className="save">
                    <IoIosHeart /> save
                  </span>
                  <MdDelete
                    className="delete"
                    onClick={() => removeItem(curr.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-summ">
        <h3>Order Summary</h3>
        <div className="cart-price">
          <div className="price-left">
            <span>subtotal : </span>
            <span>
              <PriceFormatter price={total_Price} />{" "}
            </span>
          </div>
          <div className="price-left">
            <span>shipping fee: </span>
            <span>
              <PriceFormatter price={shipping_Fee} />{" "}
            </span>
          </div>
          <div className="price-total">
            <span>Order Total: </span>
            <span>
              <PriceFormatter price={shipping_Fee + total_Price} />{" "}
            </span>
          </div>
        </div>
        <div>
          <div className="btns">
            <NavLink to="/products">
              <button className="btn">Go to Shopping</button>
            </NavLink>
            <button className="btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  h6{
    font-size: 5rem;
    margin: auto;
  }

  .left {
    .parent {
      padding: 3rem;
      width: 100%;
      height: 20rem;
      border-bottom: 1px solid #222;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 1rem;

        img {
          width: 20rem;
          border-radius: 5px;
        }

        .mid {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0.8rem;

          .name {
            font-size: 2rem;
          }
          .info {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 3rem;
            font-size: 1.7rem;
          }
          .num {
            font-size: 1.5rem;
          }

          .color {
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3rem;

        .price {
          font-size: 2rem;
        }
        .save-del {
          display: flex;
          align-items: center;
          gap: 1rem;
          span {
            display: flex;
            align-items: center;
            font-size: 2rem;
            gap: 0.5rem;
            border-right: 1px solid #222;
            padding: 0rem 1rem;
          }
          .delete {
            font-size: 2rem;
            color: #222;
            cursor: pointer;
          }
          .delete:hover {
            font-size: 2rem;
            color: #ff0000d3;
            cursor: pointer;
          }
        }
      }
    }
  }
  .cart-summ {
    background-color: #c0dbc6;
    padding: 2rem;
    margin: 2rem;
    width: 25%;
    border-radius: 10px;

    h3 {
      border-bottom: 1px solid #222;
      padding-bottom: 2rem;
      font-size: 3rem;
    }
    .cart-price {
      padding: 2rem 0rem;

      .price-left {
        padding: 2rem 0rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 1.8rem;
          margin: 1rem 0rem;
        }
      }
      .price-total {
        font-size: 2rem;
        border-top: 1px solid #222;
        padding: 2rem 0rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .btn {
      background-color: #354e51;
      color: #fff;
      padding: 1rem;
      cursor: pointer;
      border-radius: 5px;
    }
    .btn:hover {
      background-color: #2e3d45;
      color: #fff;
      padding: 1rem;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 1400px) {
    width: 1200px;
    margin: auto;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;

    .left {
      .parent {
        padding: 1rem;
        width: 110%;
        height: 20rem;
        border-bottom: 1px solid #222;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          padding: 1rem;

          img {
            width: 20rem;
            border-radius: 5px;
          }

          .mid {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 0.8rem;

            .name {
              font-size: 2rem;
            }
            .info {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 3rem;
              font-size: 1.7rem;
            }
            .num {
              font-size: 1.5rem;
            }

            .color {
              height: 2rem;
              width: 2rem;
              border-radius: 50%;
            }
          }
        }
        .right {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          margin-left: 5rem;

          .price {
            font-size: 2rem;
          }
          .save-del {
            display: flex;
            align-items: center;
            gap: 1rem;
            span {
              display: flex;
              align-items: center;
              font-size: 2rem;
              gap: 0.5rem;
              border-right: 1px solid #222;
              padding: 0rem 1rem;
            }
            .delete {
              font-size: 2rem;
              color: #222;
              cursor: pointer;
            }
            .delete:hover {
              font-size: 2rem;
              color: #ff0000d3;
              cursor: pointer;
            }
          }
        }
      }
    }
    .cart-summ {
      background-color: #c0dbc6;
      padding: 2rem;
      margin: 0rem;
      width: 30%;
      border-radius: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .left {
      .parent {
        padding: 2rem 1rem;
        width: 100%;
        height: fit-content;
        border-bottom: 1px solid #222;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          padding: 0.5rem;

          img {
            width: 10rem;
            border-radius: 5px;
          }

          .mid {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 0.8rem;

            .name {
              font-size: 1.5rem;
              font-weight: 600;
            }
            .info {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 2rem;
              font-size: 1.3rem;
            }
            .num {
              font-size: 1.5rem;
            }

            .color {
              height: 1.5rem;
              width: 1.5rem;
              border-radius: 50%;
            }
          }
        }
        .right {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 3rem;

          .price {
            font-size: 1.8rem;
            font-weight: 600;
          }
          .save-del {
            display: flex;
            align-items: center;
            gap: 1rem;
            span {
              display: flex;
              align-items: center;
              font-size: 1.7rem;
              gap: 0.5rem;
              border-right: 1px solid #222;
              padding: 0rem 1rem;
            }
            .delete {
              font-size: 2rem;
              color: #222;
              cursor: pointer;
            }
            .delete:hover {
              font-size: 2rem;
              color: #ff00006b;
              cursor: pointer;
            }
          }
        }
      }
    }
    .cart-summ {
      background-color: #c0dbc6;
      padding: 2rem;
      margin: 2rem;
      width: 80%;

      h3 {
        border-bottom: 1px solid #222;
        padding-bottom: 2rem;
        font-size: 3rem;
      }
      .cart-price {
        padding: 2rem 0rem;

        .price-left {
          padding: 2rem 0rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            font-size: 1.8rem;
            margin: 1rem 0rem;
          }
        }
        .price-total {
          font-size: 2rem;
          font-weight: 600;
          border-top: 1px solid #222;
          padding: 2rem 0rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      .btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .btn {
        background-color: #354e51;
        color: #fff;
        padding: 1rem;
        cursor: pointer;
      }
      .btn:hover {
        background-color: #2e3d45;
        color: #fff;
        padding: 1rem;
        cursor: pointer;
      }
    }
  }
`;

export default Cart;
