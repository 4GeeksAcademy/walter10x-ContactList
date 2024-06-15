import React, {useContext} from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { Demo } from "./ContactForm";
import { Formulario } from "./Formulario";
import { Link } from "react-router-dom";

export const Home = () => { 
 const {store} = useContext(Context)
 console.log (store.demo)

return (
<div className="text-center mt-5">
       
<Link to="/formulario">
        <button>Go to Form</button>
      </Link>
	  
	<h1>Este Es EL homex</h1>
     
	</div>
)};
