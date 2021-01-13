import React, { useEffect, useState } from "react";
import './customers.css'
import Axios from 'axios';

function Product() {

  //Declare cvariables to fill them with values
  const [productName , setProductName] = useState("");
  const [productPrice , setPrice] = useState("");
  const [screenSize , setScreenSize] = useState("");
  const [productList, setProductList] = useState([]);
  const [tariffType , setTariffType] = useState("");
  const [tariffValue, setValue] = useState("");
  const [tariffList, setTariffList] = useState([]);
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)
  const [checkeTwo, setCheckedTwo] = useState(false)
  const handleClickTwo = () => setCheckedTwo(!checked)
  
  
  //Submit product data
  const submitProductData = () => {
    
    Axios.post("http://localhost:3001/product", {
      productName: productName, 
      productPrice: productPrice,
      screenSize: screenSize,
      checked: checked,
      checkeTwo: checkeTwo,
    });
  
    setProductList([
      ...productList,
      { productName: productName,
        productPrice: productPrice,
        screenSize: screenSize,
        checked: checked,
        checkeTwo: checkeTwo },
    ]);

  };

    //Submit tariff data
    const submitTariffData = () => {
    
      Axios.post("http://localhost:3001/products", {
        tariffType: tariffType,
        tariffValue: tariffValue,
      });
    
      setTariffList([
        ...tariffList,
        { tariffType: tariffType,
          tariffValue: tariffValue },
      ]);
  
    };

const getProductData = () =>{
    Axios.get("http://localhost:3001/getProduct").then((response) => {
      setProductList(response.data);
    });
  }

  useEffect(() =>{
    Axios.get("http://localhost:3001/getTariff").then((response) => {
      setTariffList(response.data);
    });
  }, []);



  return (
      <div className="content">
        <div>
          <h1>Add product</h1>
          <hr></hr>
        </div>
        <div id="content1">
          <form id="form1">
            <table class="center">
              <tr>
                  <td>
                  <label>Product name</label>
                      <input type="text" name="productName" onChange={(e) => {
                        setProductName(e.target.value);
                        }}/>
                  </td>
                  <td>
                      <label>Price </label>
                      <input type="text" name="price" onChange={(e) => {
                        setPrice(e.target.value);
                        }}/>
                  </td>
               </tr>   
               <tr>
                  <td>
                      <label>Screen size </label>
                      <input type="text" name="screenSize" onChange={(e) => {
                        setScreenSize(e.target.value);
                        }}/>
                  </td>
                  <td>
                      <label>Gorilla glass</label>
                      <input onClick={handleClick} checked={checked} type="checkbox" />
                  </td>
              </tr>  
               <tr>
                  <td>
                      <label>Protection case</label>
                      <input onClick={handleClickTwo} checked={checkeTwo} type="checkbox" />
                  </td>
              </tr>       
              <tr>
                <button onClick={submitProductData}>Save</button>
              </tr>
            </table>
          </form>
        </div>
        <div className="content">
      <div>
        <h2>Add Tariff</h2>
      </div>
      <div id="content1">
        <form id="form1">
          <table class="center">
            <tr>
                <td>
                    <label>Tariff type </label>
                    <input type="text" name="tariffType" onChange={(e) => {
                        setTariffType(e.target.value);
                        }}/>
                </td>
                <td>
                    <label>Value </label>
                    <input type="text" name="tariffValue" onChange={(e) => {
                        setValue(e.target.value);
                        }}/>
                </td>
            </tr>        
            <tr>
              <button onClick={submitTariffData}>Save</button>
            </tr>
          </table>
        </form>
      </div>
      <div>
        <hr></hr>
        <button className="butonClass" onClick={getProductData}>Display products</button>
            {productList.map((val, key) => {
              return (
                <div className="displayStyle">
                  <table>
                  <tr>
                    <td><h5>Product number:</h5></td>
                    <td><h5>Product name:</h5></td>
                    <td><h5>Price:</h5></td>
                    <td><h5>Screen size:</h5></td>
                    <td><h5>Gorilla glass:</h5></td>
                    <td><h5>Protective case:</h5></td>
                  </tr>
                  <tr>
                    <td><p>{val.PRODUCT_NO} </p></td>
                    <td><p>{val.P_NAME}</p></td>
                    <td><p>{val.PRICE}</p></td>
                    <td><p>{val.SCREEN_SIZE}</p></td>
                    <td><p>{val.GORILLA_GLASS}</p></td>
                    <td><p> {val.PROT_CASE}</p></td>
                  </tr>
              </table>
               </div>
              );
              })}   
       </div>
      </div>
    </div>
  )         
}

export default Product;