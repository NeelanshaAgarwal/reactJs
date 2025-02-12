import React from 'react'

const ProductInfo = () => {

    const product = {
        name: 'Laptop',

        price: "50,000",

        availability: "In Stock",
    };

  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h1>Price: ₹ {product.price}</h1>
      <h1>Availability: {product.availability}</h1>
    </div>
  )
}

export default ProductInfo
