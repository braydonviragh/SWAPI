import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/Home';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Person from './components/Person';
import Planet from './components/Planet';
import Starship from './components/Starship';

const App = () => {
    return (
        <Router className="App__container">
            <Navbar/>
            <Landing/>
            <Switch>
                <Route path='/' exact component= {Person}/>
                <Route path='/Planets' component={Planet}/>
                <Route path='/Starships' component={Starship}/>
            </Switch>
        </Router>
    )
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
