
export const ADD_JEANS = "ADD_JEANS"

const addJeans = (name) => {
  return {
    type: ADD_JEANS,
    name
  }
}

export const addingJeans = (jeanName) => {
  return (dispatch) => {
    dispatch(addJeans(jeanName))
  }
}

