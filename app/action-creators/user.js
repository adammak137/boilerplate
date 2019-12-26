const axios = require('axios')
export const LOGIN = "LOGIN"

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
