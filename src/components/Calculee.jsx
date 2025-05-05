import React, { Component } from 'react';
class Calculee extends  Component {
    constructor() {
        {super()
        this.state={
            numbre1:'',
            numbre2:'',
            result:'null',
            opertaion:' ',
        }}
        }
        selectioner=(event)=>{
            const{name,value}=event.target
            this. this.state({[name]:value});
        }
       calculer=()=>{
        const {numbre1,numbre2,opertaion}=this.state;
        const num1=parseFloat(numbre1);
         const num2=parseFloat(numbre2);
         let result;
         switch (opertaion) {
            case '+':
                result=num1+num2;
                break;
                case '-':
                    result=num1-num2;
                    break;
                    case '*':
                        result=num1*num2;
                        break;
                        case '/':
                            result=num1/num2;
                            break;
         
            default:result='opertaion inconnue';
               
         }
        
        this.setState ({result})}
        render() {const{ numbre1, numbre2,opertaion,result} =this.state;
            return(
       <div>
        <h1>Formulaire</h1>
        <form onSubmit={this.envoyer} id='bb'>
            <input type="number1" name="" id="" onChange={this.change}/> <br /> <br />
            <input type="number" name="" id="" onChange={this.change}/> <br /> <br />
            <select name="calc" id="s" disabled="disabled">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
    
         <button type="submit" id='d'>calculer</button>
         <p id='result'>            </p>
        </form>
       </div>
        );
    
        }
}
export default Calculee ;
