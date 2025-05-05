import React,{Component} from "react";
import { useState } from "react";
function Compteur() {
    const[compteur,Setcompteur]=useState(0) 
    const Incrementer=()=>{Setcompteur(compteur+5)} ;
return(
<>
<h1>الحاسبة {compteur}</h1>
<div>
<button onClick={Incrementer}>الجاري الحساب</button>
</div>
</>
)
}
export default Compteur
function Message() {
    const[Message,Setmessage]=useState({
        colour:'balack',
        taille:'14px',
        police:'arial'
    })  
}
 
