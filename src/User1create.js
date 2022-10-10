import { Button } from 'bootstrap'
import React from 'react'

function User1create() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <label>Username</label>
          <input type={"text"} className="form-control"></input>
        </div>
        <div className='col-lg-6'>
          <label>Email</label>
          <input type={"text"} className="form-control"></input>
        </div>
        <div className='col-lg-4'>
          <label>Country</label>
          <select className='form-control'>
            <option>INDIA</option>
            <option>china</option>
            <option>japan</option>
            <option>russia</option>
            <option>southkorea</option>
          </select>
        </div>
        <div className='col-lg-4'>
          <label>State</label>
          <select className='form-control'>
            <option>INDIA</option>
            <option>china</option>
            <option>japan</option>
            <option>russia</option>
            <option>southkorea</option>
          </select>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
          <label>City</label>
          <select className='form-control'>
            
            <option>INDIA</option>
            <option>china</option>
            <option>japan</option>
            <option>russia</option>
            <option>southkorea</option>
          </select>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
          <label>mobile numner</label>
          <input type={"text"} className="form-control"></input>
          </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
          <label>DOB</label>
          <input type={"DATE"} className="form-control"></input>
          </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
          <label>gender</label>
          <select className='form-control'>
            <option>MALE</option>
            <option>FEMALE</option>
          </select>
          </div>
        </div>
        <div className='col-lg-4'>
          {/* <label>DOB</label> */}
          <div className='form-group'>
          <input type={"submit"} className="btn btn-primary"></input>
        </div>
        </div>
      </div>
    </div>
  )
}

export default User1create