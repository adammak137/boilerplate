import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import store from './reducers/store'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { getMe } from './action-creators/user'
import Pants from './components/pants-component'
import Home from './components/home'
import Login from './components/login'
import Register from './components/registration'
import '../public/index.css'

class Main extends React.Component {
  componentDidMount() {
    this.props.getMe()
  }
  render() {
    if (this.props.user === Infinity) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/register'> Register </Link>
              </li>
              <li>
                <Link to="/pants">Pants</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path="/pants" component={Pants} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => dispatch(getMe())
  }
}

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Main)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Wrapper />
    </Router>
  </Provider>,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
)
