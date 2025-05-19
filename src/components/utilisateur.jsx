import React, { useState } from 'react'

export default function Utilisateur() {
    const[user,setUser]=useState({
        nom:'xxx',
        prenom:'yyy',
        age:20 ,
        Adresse:'nnnnnnn',
    });
  const changer=(e)=>{const{name,value}=e.target

    setUser(prUser=>({...prUser,[name]:value}))
  }
  return (
    <div>
Nom <input type="text" name="nom" onChange={changer} id="" /><br /><br />
Prenom <input type="text" name="prenom" onChange={changer} id="" /><br /><br />
Age<input type="text" name="age" onChange={changer} id="" /><br /><br />
Adresse<input type="text" name="age" onChange={changer} id="" /><br /><br />
   <h1>utilistaeur est :
    <br />{user.nom},<br />
    {user.prenom},<br />
    {user.Adresse},<br />
    {user.age}</h1>
    </div>
  )
}
