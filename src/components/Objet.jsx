import React from 'react'
import  './Objet.css'
import hemzaa from '../assets/hemza.jpg'
export default function Objet({informations,NomStyle}) {
  const monstyle={color:'blue',
    fontsize:'30px',
    textShadow:'10px 5px 5px black'
  }
  return (
    <div>
        <h1 style={NomStyle}>designation des produits:{informations.nom}</h1>
        <ul>
        <li>one</li>
        <li>twoo</li>
        <li>three</li>
        <li>four</li>
        </ul>
        <style>{`.B {font-size:40px;
    background:red;
    border-radius: 10px;}`}</style>
     <p className='B'>bonjour</p>
     <p className='c'>bonjorno</p>
     <p className='d'>bonacero</p>
     <p style={monstyle}>Hola</p>
     <h1 className='bg-red-500'>karim</h1>
     <img src={hemzaa} alt="image moi meme"></img>
     <img src="https://www.carrementfleurs.com/img/cms/lotus-7287044_1920.jpg" alt="ll" /> 
     <h1 style={{color:'red',textShadow:'30px 15px 15px black'}}>Bienvenue</h1>
        <h1>prix du produit: {informations.Prix}</h1>
    </div>
  )
}