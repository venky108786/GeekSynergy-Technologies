import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
// import Home from './components/Home'
// import Products from './components/Products'
// import Cart from './components/Cart'
// import NotFound from './components/NotFound'
// import ProtectedRoute from './components/ProtectedRoute'

import SinUp from './components/SinUp'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={SinUp} />
  </Switch>
)

export default App
