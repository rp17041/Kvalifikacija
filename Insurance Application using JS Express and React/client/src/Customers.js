import React from 'react'
import './customers.css'

class Customer extends React.Component {


   render() {
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
                      <input placeholder="name" type="" />
                  </td>
                  <td>
                      <label>Last name </label>
                      <input placeholder="email" type="" />
                  </td>
               </tr>   
               <tr>
                <td>
                      <label for="start">Birth date </label>
                      <input type="date" id="start" name="policy-start"></input>
                </td>
                <td>
                     <label for="cars">Gender </label>

                    <select name="cars" id="cars">
                    <option value="volvo">Male</option>
                    <option value="saab">Female</option>
                    <option value="mercedes">Not Appliciable</option>
                    </select>
                </td>
              </tr>
              <tr>
                  <td>
                      <label>Address 1 </label>
                      <input placeholder="email" type="" />
                  </td>
                  <td>
                      <label>Address 2 </label>
                      <input placeholder="email" type="" />
                  </td>
               </tr>   
               <tr>
                  <td>
                      <label>Phone </label>
                      <input placeholder="name"name=" "/>
                  </td>
                  <td>
                      <label>Email </label>
                      <input placeholder="name" name="Protection glass" />
                  </td>
              </tr>
              <tr>
              
              </tr>  
                      
              <tr>
                  <button onClick={this.onSubmit}>Save</button>
              </tr>
            </table>
          </form>
        </div>
      </div>
    )
  }
}

export default Customer;