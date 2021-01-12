
import React, { useEffect, useState } from "react";
import './App.css';
import Axios from 'axios';



function App() {
  
  
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

  useEffect(() =>{
    Axios.get("http://localhost:3001/getCustomer").then((response) => {
      setCustomerList(response.data);
    });
  }, []);


  return ( 
    <div>
    <div>
        <h1>Customer</h1>
        <hr></hr>
    </div>
    <table class="customerTableDisplay">
    <tr>
      <th>Customer_no</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
    <tr>
      <td>
      {customerList.map((val) => {
        return <p>{val.CUSTOMER_NO}</p>
      })}
      </td>
      <td>  
        {customerList.map((val) => {
          return <p>{val.FIRST_NAME} {val.LAST_NAME}</p> 
        })}
      </td>
      <td>
        {customerList.map((val) => {
          return <p>{val.PHONE_NUMBER} </p>
        })}
      </td>
      <td>
        {customerList.map((val) => {
          return <p>{val.EMAIL} </p>
        })}
      </td>
    </tr>
  </table>
  </div>
)








  return (
    <div className="App">
      <h1>Insurance System</h1>
      <h2>Customers</h2>
        <div className="row">  
          <label>First name </label>
          <input type="text" name="firstName" onChange={(e) => {
            setFirstName(e.target.value);
          }}/>
        </div>
        <div>
          <label>Last name </label>
          <input type="text" name="lastName"onChange={(e) => {
            setLastName(e.target.value);
          }}/>
        </div>
        <button onClick={submitCustomerData}>Submit</button>
        <div>
        <table class="customerTableDisplay">
          <tr>
            <th>Customer_no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr>
            <td>
            {customerList.map((val) => {
              return <p>{val.CUSTOMER_NO}</p>
            })}
            </td>
            <td>
              {customerList.map((val) => {
                return <p>{val.FIRST_NAME} {val.LAST_NAME}</p>
              })}
            </td>
            <td>
              {customerList.map((val) => {
                return <p>{val.PHONE_NUMBER} </p>
              })}
            </td>
            <td>
              {customerList.map((val) => {
                return <p>{val.EMAIL} </p>
              })}
            </td>
          </tr>
        </table>

        



          
        </div>
    </div>
  );
}

export default App;


////////////////////////////////////////////////



import React from 'react'
import './policy.css'

class Policy extends React.Component {
  render() {
    return (
     <div className="content">
      <div>
        <h1>New policy</h1>
        <hr></hr>
      </div>
      <div id="content1">
          <form id="form1">
          <table class="center">
              <tr>
                  <td>
                      <label>Customer </label>
                      <button onClick={this.onSubmit}>Lookup</button>
                  </td>
                  <td>
                  <input placeholder type="" />
                </td>
                </tr>
                <tr>
                  <td>
                      <label>Product </label>
                      <button onClick={this.onSubmit}>Lookup</button>
                  </td>
                  <td>
                  <input placeholder type="" />
                </td>
                </tr>
                <tr>
                <td>
                      <label for="start">Start date </label>
                      <input type="date" id="start" name="policy-start"></input>
                </td>
                  <td>
                     <label for="cars">Contract period </label>

                    <select name="cars" id="cars">
                    <option value="volvo">6 months</option>
                    <option value="saab">12 months</option>
                    </select>
                </td>
              </tr>
              <tr>
              <td>
                      <label for="start">End date </label>
                      <input readonly type="date" id="start" name="policy-start"></input>
                </td>
                <td>
                     <label for="cars">Currency </label>

                    <select name="cars" id="cars">
                    <option value="volvo">euro</option>
                    <option value="saab">US dollar</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td>
                      <label>Totall premium:     </label>
                      <output>00.00</output>
                </td>
                <td>
                      <label>Adjustment:    </label>
                      <output>00.00</output>
                </td>
              </tr>
                


                  
              <tr>
                <td>
                      <button id="button" onClick={this.onSubmit}>Calculate premium</button>
                  </td>
                  <td>
                      <button id="button" onClick={this.onSubmit}>Save</button>
                  </td>
                  </tr>
                
            </table>
          </form>
        </div> 

      </div>
    )
          
  }
}
export default Policy;


/////
useEffect(() =>{
  Axios.get("http://localhost:3001/getCustomer").then((response) => {
    setCustomerList(response.data);
  });
}, []);

return ( 
          <div>
              <h1>Customer</h1>
              <hr></hr>
          </div>
          <table class="customerTableDisplay">
          <tr>
            <th>Customer_no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr>
            <td>
            {customerList.map((val) => {
              return <p>{val.CUSTOMER_NO}</p>
            })}
            </td>
            <td>
              {customerList.map((val) => {
                return <p>{val.FIRST_NAME} {val.LAST_NAME}</p>
              })}
            </td>
            <td>
              {customerList.map((val) => {
                return <p>{val.PHONE_NUMBER} </p>
              })}
            </td>
            <td>
              {customerList.map((val) => {
                return <p>{val.EMAIL} </p>
              })}
            </td>
          </tr>
        </table>
    )
  }
}