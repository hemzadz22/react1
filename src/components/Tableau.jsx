import React from 'react'

export default function Tableau({items}) {
  return (
    <div>Tableau
   <h2>liste des animaux</h2>
   <ol> {items.map((item,index)=>(<li key={index}>{item}</li>))}</ol>
    </div>
  )
}
