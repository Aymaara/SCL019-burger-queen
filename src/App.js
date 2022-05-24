
// 
import Menu from './componentes/Menu.js';
// import Home from './componentes/Home.js';
import Cocina from './componentes/Cocina.js';
import './filesCss/App.css';
import Welcome from './componentes/Welcome';
//import './filesCss/App.css';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
     <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Welcome />} />
       <Route path="/Menu" element={<Menu/>} />
       <Route path="/Cocina" element={<Cocina/>} />
       
     </Routes>
 
  );
}

export default App;


//<code>src/App.js</code>
