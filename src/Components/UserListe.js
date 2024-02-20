import axios from 'axios'
import React, {useEffect, useState} from 'react'
import UserCard from './UserCard'

const UserListe = () => {

const [users, setUsers] = useState([]) // State variable to store users data
useEffect(() => {

  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setUsers(res.data))
    .catch((err) => console.log(err))
     
},[])

  return (
    <div  style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
      {users.map((el) => (<UserCard key={el.id} user={el}/>))}
    </div>
  )
}

export default UserListe
