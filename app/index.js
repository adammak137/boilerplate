import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './reducers/store'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Pants from './components/pants-component'
import '../public/index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pants">Pants</Link>
            </li>
          </ul>
        </nav>
        <Home />
      </div>
      <Switch>
        <Route path="/pants" component={Pants} />
        <Route path="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
)
