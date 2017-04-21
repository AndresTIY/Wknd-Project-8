import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'
import Start from './start_view.js'




class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <Start />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
// onHeaderClicked ({ history }) {
//   return <h1 onClick={() => history.push('/start')}>Whoa!</h1>
// }
