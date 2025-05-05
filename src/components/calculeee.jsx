 from 'react 
class Calculator extends React Component 
constructor 
super 
this state 
results null. 
(event) > 
const num2 parseFloat(number2); 
let result; 
this state name: value; 1; 
const name, value 
event target 
this state () => { const (number1, number2, operation) 
const numi nansefloat(number1); 
switch (operation){、 
case '+': 
result num1 num2; 
break; 
case '-' 
result num1 num2 break: 
case 
result num1 num2, break: 
case '/: 
result = num2e numi num2 'Erreur: division par zéro'; 
break; 
default: result 'Opération inconnue': ) 
this.setState({ result));); 
render() { 
const(number1, number2, operation, result) this.state; 
return( 
<div> 
<input type="number" name="number1" 
value (nombre1}onChange={this selectionner placeholder "Nombre 1" /> <br></br> 
<select name "operation" values (operation) onChange (this.selectionner}> 
<option values"+">+</option> 
<option value *-">-</option> 
<option value "*">*</option> 
<option value "/">/</option> </select> <br></br> 
<input type "nomber" name="number2"value (number2} 
onChange (this.selectionner)placeholder "Nombre 2" /> <br></br> 
<button onClick(this.calculer)>Calculer</button> <br></br> 
<strong>Le Résultat est: </strong>{result} 
</div> ); } } 
export default Calculator; 
import React from 'react'; 
import calculator from './Calculator'; 
function App() ( 
return (<div> 
<h1>Calculatrice </h1> 
<Calculator /> </div> 
export default 
