import {BrowserRouter, Switch, Route} from "react-router-dom"

import './App.css';

import Navbar from './components/Navbar'
import ThermalLib from './pages/ThermalLib'

import ThermalLibDocs from './pages/docs/ThermalLibDocs'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ThermalLib} />
        <Route path="/thermal-lib-docs" component={ThermalLibDocs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
