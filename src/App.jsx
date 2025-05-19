
import  './App.css'

//import Botton from './components/Btton.jsx';
/*import Titre from './components/Titre.jsx'
import Titre1 from './components/Titre1.jsx'
import Entete from './components/compteur.jsx'
<Tableau items={Animaux} />
const Animaux=["chien","chat","lapin"]
<Botton click={()=>alert("bien")} />

*/
//import Paragraphe1 from './components/Paragraphe1.jsx';
import Objet from './components/Objet.jsx';
function App() { 
  const Style={color:"red",fontSize:"40px", }
  return (<>
    <Objet informations={{nom:"ssss"}} NomStyle={Style}/>
    </>
  )
}
export default App;


