import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Formulario =  () => {
    const {store,actions} =useContext(Context)
    
    return (
       <>
  <div className="container">
  <div className="border p-4">
    <form style={{marginBottom:'100px',marginTop:'100px'}}>
       <div>
        <h1 className="text-center m-2">Add new contact </h1>
       </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="fullname" className="form-label text-start"><strong>Full Name:</strong></label>
          <input type="text" className="form-control" id="fullname" placeholder="Full Name"/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="email" className="form-label text-start"><strong>Email:</strong></label>
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="phone" className="form-label text-start"><strong>Phone:</strong></label>
          <input type="tel" className="form-control" id="phone" placeholder="Phone"/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="address" className="form-label text-start"><strong>Address:</strong></label>
          <input type="tel" className="form-control" id="address" placeholder="Address"/>
        </div>
      </div>
      
     
 <button className="btn btn-primary" type="submit" value="Submit" style={{ width: '100%' }}>Save</button>
    </form>
  </div>
</div>


       </>
    )
}