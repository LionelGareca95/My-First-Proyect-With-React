
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Camaro from './components/Camaro';
import Daryl from './components/Daryl';
import España from './components/España';
import Ironman from './components/Ironman';
import Londres from './components/Londres';
import Rick from './components/Rick';
import Navegacion from './components/Navegacion';

function App() {
  return (
  <Router>
    <div className="container"> 
      <h1 className="text-center mt-3 mb-3 text-white">Galería</h1>
    </div>
    <Route path="/Camaro" component={Camaro} />
    <Route path="/Daryl" component={Daryl} />
    <Route path="/España" component={España} />
    <Route path="/Ironman" component={Ironman} />
    <Route path="/Londres" component={Londres} />
    <Route path="/Rick" component={Rick} />

    <Navegacion></Navegacion>

  </Router>
  );
}

export default App;
