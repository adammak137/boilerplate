import React from 'react'
import { Connect, connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getMe } from '../action-creators/user'
import { Welcome } from './home-welcome'

class HomeComponent extends React.Component {
  render() {
    if (this.props.user.userInfo.id === 0) {
      return (<Redirect to="/" />)
    }
    return (
      < Welcome />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
