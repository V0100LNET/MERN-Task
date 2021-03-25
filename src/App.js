import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NuevaCuenta from "./components/authentication/NuevaCuenta";
import ProyectoState from './context/proyectos/proyectoState';
import AuthState from './context/autenticacion/authState';
import RutaPrivada from './components/rutas/RutaPrivada';
import Proyectos from "./components/proyectos/Proyectos";
import AlertaState from './context/alertas/alertaState';
import Login from "./components/authentication/Login";
import TareaState from './context/tareas/tareaState';
import Error404 from './components/layout/Error404';
import Home from './components/layout/Home';
import React from 'react';
import "./index.css"
import tokenAuth from './config/token';


//Revisar si tenemos un token
const token_1 = localStorage.getItem('token_1');
if(token_1){
  tokenAuth(token_1);
}

function App() {
  //lo que esta dentro del swtich es cada una de las diferemtes paginas
  // lo que esta fuera del switch es lo que se vera en todas las paginasa
  return (
    <div>
      <ProyectoState>
        <TareaState>
          <AlertaState>
            <AuthState>
              <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
                    <RutaPrivada exact path="/proyectos" component={Proyectos}/>
                    <Route exact path="/error404" component={Error404}/>
                </Switch>
              </Router>
            </AuthState>
          </AlertaState>
        </TareaState>
      </ProyectoState>
    </div>
  );
}

export default App;
