import React, { useEffect } from 'react'

// import {axios} from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'
function User1() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    
      fetchData()
  }, [])

  let fetchData=async()=>{
      try{
        const users=await axios.get("https://634e58784af5fdff3a594df5.mockapi.io/api/students")
        console.log(users)
        setUsers(users.data)
      }catch(error){
        alert("Error")
      }
    
  }
      let deleteUser=()=>{
         const result=window.confirm("are you sure you want to delete")
        if(result){
          alert("deleted")
        }
      }
  
      
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
                <th>roll no.</th>
                <th>phoneNumber</th>
                
                <th>State</th>
                <th>city</th>
                <th>gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>roll no.</th>
                <th>phoneNumber</th>
                
                <th>State</th>
                <th>city</th>
                <th>gender</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>


              {users.map((user) => {
                return <tr>
                  <td>{user.id}</td>
                  <td>{user.Name}</td>
                  <td>{user.age}</td>
                  <td>{user.phonenumber}</td>
                 
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td>{user.gender}</td>
                  
                  <td>
                    <Link to={`/User1/${user.id}`} className="btn btn-warning mr-2">view</Link>
                    <Link to={`/Edituser/${user.id}`} className="btn btn-primary mr-2 " >Edit</Link>
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