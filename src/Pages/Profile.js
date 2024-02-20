import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Profile = () => {
  const { id } = useParams(); //Responsable de l'id
  const [user, setUser] = useState([]) // State variable to store users data
  console.log(user.length);
  
useEffect(() => {

  axios.get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res)=>setUser(res.data[0]))
    .catch((err) => console.log(err))
     
},[])
 console.log("users:", user)
  return (
      <div style={{textAlign:'center'}}>
        <h2>User Profile </h2>
       
          <Card style={{ width: '18rem', marginBottom:"50px" , marginLeft:"550px"}}>
          <Card.Img variant="top" src="https://img.freepik.com/vecteurs-premium/avatar-icon002_750950-52.jpg"/>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>{user.phone}</Card.Text>
            <Button variant="primary"><Link to={`/users/`} style={{textDecoration:"none", color:"white"}}>Go to List</Link>
            </Button>
          </Card.Body>
        </Card>
     
            
    </div>
  )
}

export default Profile
