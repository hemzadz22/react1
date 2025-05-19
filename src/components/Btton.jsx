import React from 'react'

export default function Botton({click}) {
  return (
    <div>Botton <br />
        <button onClick={click}>cliquer ici svp</button>
        <button onMouseOver={click}>on mouse over svp</button>
    </div>
  )
}
