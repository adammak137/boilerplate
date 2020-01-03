const axios = require('axios')
export const LOGIN = "LOGIN"
export const FETCHING = "FETCHING"
export const REGISTER = "REGISTER"

const gotLogin = (user) => {
  return {
    type: LOGIN,
    user
  }
}

export const getLogin = (loginInfo) => {
  return (dispatch) => {
    axios.put('/api/auth', { email: loginInfo.email, password: loginInfo.password })
      .then(output => {
        let { data } = output
        dispatch(gotLogin(data))
      })
  }
}

const gotMe = (user) => {
  return {
    type: FETCHING,
    user
  }
}

export const getMe = () => {
  return (dispatch) => {
    axios.get('/api/auth').then(output => {
      let { data } = output
      dispatch(gotMe(data))
    })
  }
}

const registered = (user) => {
  return {
    type: REGISTER,
    user: user[0],
    created: user[1]
  }
}

export const register = (regInfo) => {
  return (dispatch) => {
    axios.post('/api/users', { email: regInfo.email, password: regInfo.password }).then(output => {
      let { data } = output
      if (data[1]) dispatch(getLogin(data[0]))
      data = [{ email: data[0].email, id: data[0].id }, data[1]]
      dispatch(registered(data))
    })
  }
}
