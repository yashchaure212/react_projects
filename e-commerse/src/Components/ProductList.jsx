import React from 'react'
import styled from 'styled-components'
import ProductCardSmall from './ProductCardSmall';

const ProductList = ({data}) => {
  return (
    <Wrapper>
        <div className="parent-prodlist">
            <div className="card-sec">
            {data.map((curr, index) => {
                return <ProductCardSmall key={index} data={curr} />
            })}
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
.parent-prodlist{
  min-height: 100%;
  width: 100%;
  padding: 2rem 0rem;
}
.card-sec{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  min-height: 100%;
  width: 100%;
.parent-prodlist{
  min-height: 100%;
  width: 100%;
  padding: 2rem 0rem;
}
.card-sec{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
}
`
export default ProductList