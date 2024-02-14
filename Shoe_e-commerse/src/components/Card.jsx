import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IoBagSharp } from 'react-icons/io5'

function Card({ img, title, star, prevPrice, newPrice, reviews}) {
  return (
  <>
    <section className="card-container border-2 w-64 p-8 flex flex-col m-4">
        <section className="card">
          <img className='mb-8' src={img} alt="" />
          <div className="card-details">
            <h3 className='text-2xl font-medium'>{title}</h3>
            <section className="card-review flex text-xl mb-3 items-center text-yellow-500"> 
              {star}
              <span className="total-review text-gray-900 ml-2">{reviews}</span>
            </section>
            <section className="justify-center card-price flex items-center gap-24">
              <div className="price">
                <del className='mr-1'>{prevPrice}</del>{newPrice}
              </div>
              <div className="bag text-gray-600">
              <IoBagSharp />
              </div>
            </section>
          </div>
        </section>
      </section>
  </>
  )
}

export default Card