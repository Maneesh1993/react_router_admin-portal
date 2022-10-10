import React, { useEffect } from 'react'


import { useState } from 'react';
import { Link } from 'react-router-dom';
function User1() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([
      {
        id: 1,
        username: "maneesh",
        email: "rmaneesh2dagmail.com",
        phoneNumber: 1234567,
        country: "india",
        state: "tamilnadu",
        dob: '28-05-1993',
        gender: "male"

      },
      {
        id: 2,
        username: "maneeshrajan",
        email: "rmaneesh2dagmail.com",
        phoneNumber: 1234567,
        country: "india",
        state: "tamilnadu",
        dob: '28-05-1993',
        gender: "male"

      },
      {
        id: 3,
        username: "kumari",
        email: "rmaneesh2dagmail.com",
        phoneNumber: 1234567,
        country: "india",
        state: "tamilnadu",
        dob: '28-05-1993',
        gender: "male"

      }
    ])
  }, [])
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">Tables</h1>
        <Link to={"/User1_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Create user</Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6></div>
        <div class="card-body"></div>
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>email</th>
                <th>phoneNumber</th>
                <th>country</th>
                <th>State</th>
                <th>dob</th>
                <th>gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>email</th>
                <th>phoneNumber</th>
                <th>country</th>
                <th>State</th>
                <th>dob</th>
                <th>gender</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>


              {users.map((user) => {
                return <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.country}</td>
                  <td>{user.state}</td>
                  <td>{user.dob}</td>
                  <td>{user.gender}</td>
                  
                  <td>
                    <Link to={`{\User1\${user.id}`} className="btn btn-warning mr-2">view</Link>
                    <Link to={`{\Edituser\${user.id}`} className="btn btn-primary mr-2" >Edit</Link>
                    <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default User1