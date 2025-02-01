import React from 'react'
import style from "../Website/promoAddon.module.css"
function Addons() {
  return (
    <div>
    <div>
      <table className={` table mt-5 text-center ${style.promoTable}  ${style.carlisttable}`}>
        <thead>
          <tr class="table-success  ">
            <th>Add Ons Items</th> 
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td >Food Hamper</td>
            <td>1000 rs</td>
            <td>
              <button  className={`btn btn-sm ${style.deleteBtn}`}>Delete</button>
              <button className={`btn btn-sm ${style.inactivebtn}`}>Inactive</button>
              <button className={`btn btn-sm ${style.updatebtn}`}>Update</button>
            </td>
          </tr>
          <tr >
            <td >Wine Bottle</td>
            <td>1000 rs</td>
            <td>
              <button  className={`btn btn-sm ${style.deleteBtn}`}>Delete</button>
              <button className={`btn btn-sm ${style.inactivebtn}`}>Inactive</button>
              <button className={`btn btn-sm ${style.updatebtn}`}>Update</button>
            </td>
          </tr>
          <tr >
            <td >Indian Snacks</td>
            <td>1000 rs</td>
            <td>
              <button  className={`btn btn-sm ${style.deleteBtn}`}>Delete</button>
              <button className={`btn btn-sm ${style.inactivebtn}`}>Inactive</button>
              <button className={`btn btn-sm ${style.updatebtn}`}>Update</button>
            </td>
          </tr>
          <tr >
            <td >Luxury Water Bottle</td>
            <td>1000 rs</td>
            <td>
              <button  className={`btn btn-sm ${style.deleteBtn}`}>Delete</button>
              <button className={`btn btn-sm ${style.inactivebtn}`}>Inactive</button>
              <button className={`btn btn-sm ${style.updatebtn}`}>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Addons
