
import Header from "./header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {Button} from "react-bootstrap";

function App() {
  return (

    <>
    <div className="App">
    <Header/>
    <ItemListContainer greeting={'Bienvenidos'}/>
   
   
    
  
    </div>
 
    </>
    
  );
}

export default App;
