import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'
import { addBand } from '../actions/addBand'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch(addBand(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
