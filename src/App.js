import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart' 
import Products from './components/Products' 
import NotFound from './components/NotFound'

import './App.css'


const App = () => (
                    
  <BrowserRouter>
   <Switch>
    <Route exact path = "/login" component = {LoginForm}/>
    <ProtectedRoute exact path = "/" component = {Home}/>
    <ProtectedRoute exact path = "/cart" component = {Cart}/>
    <ProtectedRoute exact path = "/products" component = {Products}/>
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
   </Switch>
  </BrowserRouter>

)
export default App