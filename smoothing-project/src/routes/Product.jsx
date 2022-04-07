import React from 'react'
import { ProductPage } from '../containers'
import  FadeIn  from 'react-fade-in';
const Product = () => {
  return (
    <div>
      <FadeIn>
        <ProductPage/>
        </FadeIn>
    </div>
  )
}

export default Product