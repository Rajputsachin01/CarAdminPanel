import React from "react";
import style from "../Website/promoAddon.module.css";
function Promocode() {
  return (
    <div>
      <div>
        <table
          className={` table mt-5 text-center ${style.promoTable} ${style.carlisttable}`}
        >
          <thead>
            <tr class="table-success">
              <th>Promo Codes</th>
              <th>Discount(%)</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DILWALI20</td>
              <td>20%</td>
              <td>15 May 2024</td>
              <td>15 August 2024</td>
              <td>
                <button className={`btn btn-sm ${style.deleteBtn}`}>
                  Delete
                </button>
                <button className={`btn btn-sm ${style.inactivebtn}`}>
                  Inactive
                </button>
                <button className={`btn btn-sm ${style.updatebtn}`}>
                  Update
                </button>
              </td>
            </tr>
            <tr>
              <td>4225fjai</td>
              <td>20%</td>
              <td>15 May 2024</td>
              <td>15 August 2024</td>
              <td>
                <button className={`btn btn-sm ${style.deleteBtn}`}>
                  Delete
                </button>
                <button className={`btn btn-sm ${style.inactivebtn}`}>
                  Inactive
                </button>
                <button className={`btn btn-sm ${style.updatebtn}`}>
                  Update
                </button>
              </td>
            </tr>
            <tr>
              <td>HFSi1958</td>
              <td>20%</td>
              <td>15 May 2024</td>
              <td>15 August 2024</td>
              <td>
                <button className={`btn btn-sm ${style.deleteBtn}`}>
                  Delete
                </button>
                <button className={`btn btn-sm ${style.inactivebtn}`}>
                  Inactive
                </button>
                <button className={`btn btn-sm ${style.updatebtn}`}>
                  Update
                </button>
              </td>
            </tr>
            <tr>
              <td>jf24835</td>
              <td>20%</td>
              <td>15 May 2024</td>
              <td>15 August 2024</td>
              <td>
                <button className={`btn btn-sm ${style.deleteBtn}`}>
                  Delete
                </button>
                <button className={`btn btn-sm ${style.inactivebtn}`}>
                  Inactive
                </button>
                <button className={`btn btn-sm ${style.updatebtn}`}>
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Promocode;
