import React from 'react'

const Dashboard = () => {
  return (
    <div>
     <div className="content-wrapper pb-2 mb-0">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-3 col-md-3 mb-2">
                <div className="info-box py-4 shadow d-flex align-items-center">
                  <span className="info-box-icon bg-info elevation-1 d-flex align-items-center justify-content-center">
                    <i className="fas fa-truck text-white" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Vehicle's</span>
                    <br />
                    <span className="info-box-number">33</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-3 col-md-3 mb-2">
                <div className="info-box mb-3 py-4 shadow">
                  <span className="info-box-icon bg-success elevation-1">
                    <i className="fa fa-user-secret" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Drivers</span>
                    <span className="info-box-number">6 </span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-3 col-md-3 mb-2">
                <div className="info-box mb-3 py-4 shadow">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="fa fa-user text-white" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Customer</span>
                    <span className="info-box-number">498 </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3 col-md-3 mb-2">
                <div className="info-box mb-3 py-4 shadow">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="fas fa-id-card" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Today Trips</span>
                    <span className="info-box-number">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row col-md-12">
              
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-title">Income and Expenses</h2>
                    </div>
                    <div className="card-header border-transparent">
                      <div className="position-relative mb-4">
                        <img
                         className="img-fluid" src="https://i.ibb.co/mRCYq2g/png-transparent-line-chart-bar-chart-graph-miscellaneous-infographic-angle-thumbnail-removebg-previe.png"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                          <i className="fas fa-square text-success" /> Income
                        </span>
                        <span>
                          <i className="fas fa-square text-danger" /> Expenses
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" style={{ height: "100px" }}>
                  <div className="card">
                    <div className="card-header ui-sortable-handle">
                      <h3 className="card-title">
                        <i className="ion ion-clipboard mr-1" />
                        Reminder
                      </h3>
                      <div className="card-tools"></div>
                    </div>

                    <div className="card-body">
                      <ul
                        className="todo-list ui-sortable"
                        data-widget="todo-list"
                      >
                        No reminders
                      </ul>
                    </div>

                    <div className="card-footer clearfix">
                      <button
                        type="button"
                        className="btn btn-info float-right"
                      >
                        <i className="fas fa-plus" /> Add Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 mt-2">
                <div className="card ">
                  <div className="card-header">
                    <h2 className="card-title">Vechicle Current Location</h2>
                  </div>
                  <table className="datatable table card-table table-vcenter">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Current Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> prueba</td>
                        <td>
                          {" "}
                          <span className="badge badge-warning">
                            Location Not Updated
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td> rxking</td>
                        <td>
                          {" "}
                          <span className="badge badge-warning">
                            Location Not Updated
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td> Teste</td>
                        <td>
                          {" "}
                          <span className="badge badge-warning">
                            Location Not Updated
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td> tesa</td>
                        <td>
                          {" "}
                          <span className="badge badge-warning">
                            Location Not Updated
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">Vechicle Running Status</h2>
                  </div>
                  <table className="datatable table card-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SK BIKE</td>
                        <td>
                          <span className="badge badge-danger">In Trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Audi</td>
                        <td>
                          <span className="badge badge-danger">In Trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>marchu</td>
                        <td>
                          <span className="badge badge-danger">In Trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Nissan</td>
                        <td>
                          <span className="badge badge-danger">In Trip</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
