import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
     return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {
      event.preventDefault();
    }

  return (

    <div className="Login" style={{width:"500px", margin:"auto"}}>
      <Form onSubmit={handleSubmit}>
      <Form.Group size="xs" controlId="email">
         <Form.Label style={{fontWeight:"bold"}}>Email</Form.Label>
      <Form.Control autoFocus type="email" value={email}
        onChange={(e) => setEmail(e.target.value)} />

      </Form.Group>
      <Form.Group size="lg" controlId="password" style={{marginTop:"20px"}}>
      <Form.Label style={{fontWeight:"bold"}}>Password</Form.Label>
      <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     </Form.Group>
     <Button block size="lg" type="submit" disabled={!validateForm()} style={{marginTop:"20px", width:"500px"}}>Login</Button>
    
    </Form>
</div>
  );

}
export default Login