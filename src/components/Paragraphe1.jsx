import React, { useState } from 'react'

export default function Paragraphe1() {

    const[paragraphe1,setParagraphe]=useState("");
    const Copier=(e)=>{setParagraphe(e.target.value);};
  return (
    <div>
        <input type="text" name="paragraphe" placeholder='faite enter un paragraphe' 
        onDoubleClick={Copier} id="" />
        <p>vous avez saisie:{paragraphe1}</p>
       </div>
  )
}
