import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import {Context} from "../store/appContext"
import "../../styles/home.css";

export const Home = () => { 
 console.log("hola walter jose  ")
 const {store} = useContext(Context)
 console.log (store.demo)

return (
<div className="text-center mt-5">
		<h1>Hello Walter!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
)};
