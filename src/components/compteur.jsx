import React from "react";
class app extends this.components {
    constructor()  {

        super();
        this.state={compteur:0}
    };
incrementer=()=>{
this.setstate({compteur:this.state.compteur+1})
}

render() { return(<div>
    <p>la valeur du compteur est :{this.state.compteur}</p>
    <button onClick={this.incrementer}>incrementer</button>
</div>
)
}
}
export default app;
