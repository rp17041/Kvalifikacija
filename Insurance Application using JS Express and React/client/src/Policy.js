import React, { useEffect, useState } from "react";
import './policy.css'
import Axios from 'axios';

function Policy ()  {

  //Declare cvariables to fill them with values
  const [customerNo , setCustomerNo ] = useState(0);
  const [productNo , setProductNo] = useState(0);
  const [contractPeriod , setContractPeriod] = useState(0);
  const [startDate , setStartDate] = useState(new Date().getDate());
  const [endDate , setEndDate] = useState(new Date().getDate());
  const [currency , setCurrency] = useState("");
  const [totalPremium , setTotalPremium] = useState(0);
  const [adjustment , setAdjustment] = useState(0);
  const [policyList, setPolicyList] = useState([]);



  //Submit policy data
  const submitPolicyData = () => {
    
    Axios.post("http://localhost:3001/policy", {
      customerNo: customerNo, 
      productNo: productNo,
      contractPeriod: contractPeriod,
      startDate: startDate,
      endDate: endDate,
      currency: currency,
      totalPremium: totalPremium,
      adjustment: adjustment,
    });
  
    setPolicyList([
      ...policyList,
      { customerNo: customerNo,
        productNo: productNo,
        contractPeriod: contractPeriod,
        startDate: startDate,
        endDate: endDate,
        currency: currency,
        totalPremium: totalPremium,
        adjustment: adjustment },
    ]);

  };

const getPolicyData = () => {
    Axios.get("http://localhost:3001/getPolicy").then((response) => {
      setPolicyList(response.data);
    });
}
  
  return (
    <div className="content"> 
      <div>
          <h1>Policy</h1>
          <hr></hr>
      </div>
      <div id="content1">
        <form id="form1">
          <table class="center">
            <tr>
                <td>
                    <label>Customer number </label>
                    <input type="number" name="customerNo" onChange={(e) => {
                      setCustomerNo(e.target.value);
                      }}/>
                </td>
                <td>
                    <label>Product number </label>
                    <input type="number" name="productNo" onChange={(e) => {
                      setProductNo(e.target.value);
                    }}/>
                </td>
             </tr>   
             <tr>
              <td>
                    <label>Contract period </label>
                    <input type="number" id="start" name="contractPeriod" onChange={(e) => {
                      setContractPeriod(e.target.value);
                    }}/>
              </td>
              <td>
              <label for="start">Start date </label>
                    <input type="date" id="start" name="startDate" onChange={(e) => {
                      setStartDate(e.target.value);
                    }}/>
              </td>
            </tr>
            <tr>
                <td>
                    <label for="start">End date </label>
                    <input type="date" name="endDate" onChange={(e) => {
                      setEndDate(e.target.value);
                    }}/>
                </td>
                <td>
                    <label>Currency </label>
                    <input type="text" name="currency" onChange={(e) => {
                      setCurrency(e.target.value);
                    }}/>
                </td>
             </tr>   
             <tr>
                <td>
                    <label>Total Premium </label>
                    <input type="number" name="totalPremium" onChange={(e) => {
                      setTotalPremium(e.target.value);
                    }}/>
                </td>
                <td>
                    <label>Adjustment </label>
                    <input type="number" name="adjustment" onChange={(e) => {
                      setAdjustment(e.target.value);
                    }}/>
                </td>
            </tr>
            <tr>
            
            </tr>  
                    
            <tr>
                <button onClick={submitPolicyData}>Save</button>
            </tr>
          </table>
        </form>

        
      </div>
      <div>
        <hr></hr>
        <button className="butonClass" onClick={getPolicyData}>Display Policies</button>
            {policyList.map((val, key) => {
              return (
                <div className="displayStyle">
                  <table>
                  <tr>
                    <td><h5>Policy number:</h5></td>
                    <td><h5>Customer number:</h5></td>
                    <td><h5>Product number:</h5></td>
                    <td><h5>Created:</h5></td>
                    <td> <h5>Contract preiod:</h5></td>
                    <td><h5>Start date:</h5></td>
                    <td><h5>End date:</h5></td>
                    <td><h5>Currency:</h5></td>
                  </tr>
                  <tr>
                    <td><p>{val.POLICY_NO} </p></td>
                    <td><p>{val.CUSTOMER_NO}</p></td>
                    <td><p>{val.PRODUCT_NO}</p></td>
                    <td><p>{val.CREATED}</p></td>
                    <td><p> {val.CONTRACT_PEROD}</p></td>
                    <td><p>{val.START_DATE}</p></td>
                    <td><p>{val.END_DATE}</p></td>
                    <td><p>{val.CURRENCY}</p></td>
                  </tr>
              </table>
               </div>
              );
              })}   
       </div>
    </div>
  )
}
export default Policy;