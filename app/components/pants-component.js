import React from 'react'
import { connect } from 'react-redux'
import { addingJeans } from '../action-creators/jeans'


class Pants extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.addJeans('Leggings')}>Add Leggings</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pants: state.pants
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addJeans: (name) => dispatch(addingJeans(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pants)
