import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            setData(posts)
        }
        fetchData();
    },[])

  return (
    <div>
      <h1>First Post Title:</h1>
      {data.length>0 ? <h2>{data[0].title}</h2> : <p>Loading...</p>}
    </div>
  )
}

export default FetchDataEffect
