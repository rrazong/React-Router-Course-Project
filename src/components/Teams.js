import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {getTeam} from '../api';

class Teams extends Component {
  componentDidMount() {
    getTeam()
      .then(() => {

      })
  }

  render() {

    return (
      <div className='container two-column'>
        Teams
      </div>
    )
  }
}

export default Teams