import React from 'react'

const Greetin = (props) => {

    return props.timeOfDay==="morning" ? (<h1>Good morning</h1>) : (<h1>Good Afternoon</h1>);
}

export default Greetin;
