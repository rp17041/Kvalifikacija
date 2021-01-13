import React, { useEffect, useState } from "react";
import './customers.css'
import Axios from 'axios';

function Customer ()  {

  //Declare cvariables to fill them with values
  const [firstName , setFirstName ] = useState("");
  const [lastName , setLastName] = useState("");
  const [birthday , setBirthDay] = useState(new Date());
  const [email , setEmail] = useState("");
  const [addressFirst , setAddressFirst] = useState("");
  const [addressSecond , setAddressSecond] = useState("");
  const [phone , setPhone] = useState("");
  const [gender , setGender] = useState("");
  const [customerList, setCustomerList] = useState([]);


  //Submit customer data
  const submitCustomerData = () => {
    
    Axios.post("http://localhost:3001/customers", {
      firstName: firstName, 
      lastName: lastName,
      birthday: birthday,
      email: email,
      addressFirst: addressFirst,
      addressSecond: addressSecond,
      gender: gender,
      phone: phone,
    });
  
    setCustomerList([
      ...customerList,
      { firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        email: email,
        addressFirst: addressFirst,
        addressSecond: addressSecond,
        gender: gender,
        phone: phone },
    ]);

  };

 const getCustomerData = () =>{
    Axios.get("http://localhost:3001/getCustomer").then((response) => {
      setCustomerList(response.data);
    });
 }

 const updateCustomerEmail = () =>{
  Axios.put("http://localhost:3001/updateEmail", {email: newEmail, customerNo:customerNo});
 }

 const updateCustomerPhone = () =>{
  Axios.get("http://localhost:3001/updatePhone", {phone: newPhone, customerNo: customerNo});
 }
  
  return (
    <div className="content"> 
      <div>
          <h1>Customer</h1>
          <hr></hr>
      </div>
      <div id="content1">
        <form id="form1">
          <table class="center">
            <tr>
                <td>
                    <label>First name </label>
                    <input type="text" name="firstName" onChange={(e) => {
                      setFirstName(e.target.value);
                      }}/>
                </td>
                <td>
                    <label>Last name </label>
                    <input type="text" name="lastName" onChange={(e) => {
                      setLastName(e.target.value);
                    }}/>
                </td>
             </tr>   
             <tr>
              <td>
                    <label for="start">Birth date </label>
                    <input id="p1" type="date" id="start" name="policy-start" onChange={(e) => {
                      const target = e.target;
                      const value = target.value;
                      const now = new Date();
                      if(value > now)
                        document.getElementById("p2").style.color = "red";
                      else
                        document.getElementById("p2").style.color = "blue";
                      setBirthDay(e.target.value);
                    }}/>
              </td>
              <td>
                   <label for="cars">Gender </label>
                   <input type="text" name="email" onChange={(e) => {
                      setGender(e.target.value);
                    }}/>
              </td>
            </tr>
            <tr>
                <td>
                    <label>Address 1 </label>
                    <input type="text" name="email" onChange={(e) => {
                      setAddressFirst(e.target.value);
                    }}/>
                </td>
                <td>
                    <label>Address 2 </label>
                    <input type="text" name="email" onChange={(e) => {
                      setAddressSecond(e.target.value);
                    }}/>
                </td>
             </tr>   
             <tr>
                <td>
                    <label>Phone </label>
                    <input type="text" name="phone" onChange={(e) => {
                      setPhone(e.target.value);
                    }}/>
                </td>
                <td>
                    <label>Email </label>
                    <input id="p2" type="text" name="email" onChange={(e) => {
                      const target = e.target;
                      const value = target.value;
                      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
                        document.getElementById("p2").style.color = "red";
                      }else{
                        document.getElementById("p2").style.color = "black";
                      }
                      setEmail(e.target.value);
                    }}/>
                </td>
            </tr>
            <tr>
            
            </tr>  
                    
            <tr>
                <button onClick={submitCustomerData}>Save</button>
            </tr>
          </table>
        </form>
      </div>
      <div>
        <hr></hr>
        <button className="butonClass" onClick={getCustomerData}>Display Customers</button>
            {customerList.map((val, key) => {
              return (
                <div className="displayStyle">
                  <table>
                  <tr>
                    <td><h5>Customer number:</h5></td>
                    <td><h5>First name</h5></td>
                    <td><h5>Last name:</h5></td>
                    <td><h5>Phone:</h5></td>
                    <td> <h5>Email:</h5></td>
                  </tr>
                  <tr>
                    <td><p>{val.CUSTOMER_NO} </p></td>
                    <td><p>{val.FIRST_NAME}</p></td>
                    <td><p>{val.LAST_NAME}</p></td>
                    <td><p>{val.PHONE_NR}</p></td>
                    <td><p> {val.EMAIL}</p></td>
                  </tr>
              </table>
               </div>
              );
              })}   
       </div>
    </div>
    
  )
  
}

export default Customer;