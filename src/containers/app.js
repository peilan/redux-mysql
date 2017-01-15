import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Users from '../components/users'
import * as usersActions from '../actions/usersActions'

class App extends Component {
  render() {
    const { users } = this.props
    const { getUsers  } = this.props.usersActions

    return <div>
      <Users 
        source={users.source}
        fetching={users.fetching}
        getUsers={getUsers} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)