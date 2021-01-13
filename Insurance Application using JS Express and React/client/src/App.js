
import React, { useEffect, useState } from "react";
import './App.css';
import Axios from 'axios';



function App() {

  const [firstName , setFirstName ] = useState("");
  const [lastName , setLastName] = useState("");
  const [customerList, setCustomerList] = useState([]);

  const submitCustomerData = () => {
    
    Axios.post("http://localhost:3001/customers", {
      firstName: firstName, 
      lastName: lastName,
    });
  
    setCustomerList([
      ...customerList,
      { firstName: firstName, lastName: lastName },
    ]);

  };

  useEffect(() =>{
    Axios.get("http://localhost:3001/getCustomer").then((response) => {
      setCustomerList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Insurance System</h1>
      <h2>Log in</h2>
        <div className="row">  
          <label>User name </label>
          <input type="text" name="firstName" onChange={(e) => {
            setFirstName(e.target.value);
          }}/>
        </div>
        <div>
          <label>Password </label>
          <input type="text" name="lastName"onChange={(e) => {
            setLastName(e.target.value);
          }}/>
        </div>
        <button onClick={submitCustomerData}>Submit</button>
       
    </div>
  );
}

export default App;
