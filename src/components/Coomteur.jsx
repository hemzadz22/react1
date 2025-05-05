import React, { useState } from 'react'

export default function Coomteur() {
    const[calc,setcalc] = useState(0);
    function Incrementer() {
        setcalc(calc+1);
    }
  return (
    <div>coomteur
        <p>compteur:{calc}</p>
        <button onClick={Incrementer} type="button">Incrementer </button>
    </div>
  )
}
