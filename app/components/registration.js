import React from 'react'
import { connect } from 'react-redux'
import { register, getLogin } from '../action-creators/user'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {

  render() {
    {
      if (this.props.user.userInfo !== Infinity || this.props.user.userInfo !== 0) {
        if (this.props.user.created) {
          return (< Redirect to={"/home"} />)
        }
      }
    }
    return (
      <form onSubmit={(event) => this.props.register(event)}>
        <h1>Please Register</h1>
        {this.props.user.userInfo.id !== 0 ? <h1>Email already in use</h1> : <div></div>}
        <label>
          Email:
        <input type='text' name='email' />
        </label>
        <label>
          Password:
          <input type='password' name='password' />
          <button type='submit'>Submit</button>
        </label>
      </form>
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
    register: (event) => {
      event.preventDefault()
      dispatch(register({ email: event.target.email.value, password: event.target.password.value }))
    },
    getLogin: (event) => {
      event.preventDefault()
      dispatch(getLogin({ email: event.target.email.value, password: event.target.password.value }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
