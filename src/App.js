import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Products" component={Products}/>
          <Route path="/Reports" component={Reports}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
