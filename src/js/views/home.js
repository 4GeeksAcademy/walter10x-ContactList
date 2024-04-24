import React, {useContext} from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { Demo } from "./demo";
import { Formulario } from "./Formulario";
import { Link } from "react-router-dom";

export const Home = () => { 
 console.log("hola walter jose  ")
 const {store} = useContext(Context)
 console.log (store.demo)

return (
<div className="text-center mt-5">
       
<Link to="/formulario">
        <button>Go to Form</button>
      </Link>
	  
	<h1>Este Es EL home</h1>
     <Demo/>
	</div>
)};
