import React from 'react'

const ProductList = () => {

    const products = [
        {id: 1, name: "Chair", price: 100},
        {id: 2, name: "Table", price: 300},
        {id: 3, name: "Cardboard", price: 1000},
        {id: 4, name: "Single Bed", price: 5000},
        {id: 5, name: "Double Bed", price: 12000},
    ];

  return (
    <div>
      <h2>Products:</h2>
      {products.map((product)=>(
        <ul key = {product.id}>
            <li>Name: {product.name}</li>
            <li>Price: ₹ {product.price}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductList
