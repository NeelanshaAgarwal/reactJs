import React from 'react'

const UserList = () => {

    const users = [
        {id: 1,name: "Anshika", age: 25},
        {id: 2,name: "Babita", age: 30},
        {id: 3,name: "Charu", age: 22},
    ];

  return (
    <div>
      <h2>User Info:</h2>
      {users.map((user)=>(
        <ul key = {user.id}>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
        </ul>
      ))}
    </div>
  )
}

export default UserList
