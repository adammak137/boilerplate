import React from 'react'
import { connect } from 'react-redux'
import { getLogin } from '../action-creators/user'
import { Redirect } from 'react-router-dom'

class login extends React.Component {

  render() {
    if (this.props.user.userInfo.id > 0 && this.props.user.userInfo.id !== Infinity) {
      return (<Redirect to={'/home'} />)
    } else
      return (
        <form onSubmit={(event) => this.props.getLogin(event)}>
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
    getLogin: (event) => {
      event.preventDefault()
      dispatch(getLogin({ email: event.target.email.value, password: event.target.password.value }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(login)
