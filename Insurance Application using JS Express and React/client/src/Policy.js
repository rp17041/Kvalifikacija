import React from 'react'
import './policy.css'

class Policy extends React.Component {
  render() {
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
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
            </table>
          </form>
        <tr>
          <button id="button" onClick={this.onSubmit}>New policy</button>  
        </tr>
        </div> 

      </div>
    )
          
  }
}
export default Policy;