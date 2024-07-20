import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Puja from './components/Puja'
import PoojaPackages from './components/PoojaPackages'

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/puja" component={Puja} />
          <Route exact path="/poojapackages" component={PoojaPackages} />
        </Switch>
      </>
    )
  }
}

export default App
// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
