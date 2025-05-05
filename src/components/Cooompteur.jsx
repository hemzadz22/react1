import React from 'react'
import { useState } from 'react'
function Cooompteur() {
    const[Compt,setcompt]=useState(0);
    const Incrementer=()=>{
        setcompt(comt=>comt+1);
    };
    const Reset=()=>{setcompt(0)}
  return (
    <div>cooompteur
        <p> compteur: {Compt}      </p>
        <button onClick={Incrementer} type="button"></button>
    </div>
  )
}