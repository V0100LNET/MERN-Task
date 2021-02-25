import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProyectoState from './context/proyectos/proyectoState';
import NuevaCuenta from "./components/authentication/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import Login from "./components/authentication/Login";
import Error404 from './components/layout/Error404';
import Home from './components/layout/Home';
import React from 'react';
import "./index.css"


function App() {
  //lo que esta dentro del swtich es cada una de las diferemtes paginas
  // lo que esta fuera del switch es lo que se vera en todas las paginasa
  return (
    <div>
      <ProyectoState>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
              <Route exact path="/proyectos" component={Proyectos}/>
              <Route exact path="/error404" component={Error404}/>
          </Switch>
        </Router>
      </ProyectoState>
    </div>
  );
}

export default App;
