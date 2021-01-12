import React from 'react'
import './product.css'


class Product extends React.Component {
  render() {
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
                      <label>Product </label>
                      <input placeholder="name" type="" />
                  </td>
                  <td>
                      <label>Price </label>
                      <input placeholder="email" type="" />
                  </td>
               </tr>   
               <tr>
                  <td>
                      <label>Screen size </label>
                      <input placeholder="email" type="" />
                  </td>
                  <td>
                      <label>Gorilla glass</label>
                      <input type="checkbox"name="Gorilla glass"/>
                  </td>
              </tr>  
               <tr>
                 
                  <td>
                      <label>Protection case</label>
                      <input type="checkbox" name="Protection glass" />
                  </td>
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
export default Product;