import React, { Component } from 'react';
class Formulaire extends Component {
    constructor() {
        {super()
        this.state={
            email:'',
            password:'',
            message:'',
            envoye:false,
        }}
        }
        changer=(event)=>{
            const{name,value}=event.target
            this. this.state({[name]:value});
        }
        envoyer=()=>{this.state ({envoyer:true})}
        render() {
            return(
       <div>
        <h1>Formulaire</h1>
        <form onSubmit={this.envoyer} id='bb'>
         email: <input type="email" name="email" id="a" onChange={this.change}/> <br /> <br />
         Password:<input type="password" name="password" id="b"onChange={this.change}/><br /><br />
         Message:<input type="message" name="message" id="c" onChange={this.change}/> <br /><br />
         <button type="submit" id='d'>envoyer</button>
        </form>
       </div>


        );
    
        }
}
export default Formulaire;
