import React from 'react'

const Greet = () => {

    const name = "Neelansha Agarwal";
    const date = new Date();

  return (
    <div>
      <h1>{name}</h1>
      <p>Date: {date.getDate()}</p>
    </div>
  )
}

export default Greet
