import React, { Component, Dispatch } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { IApplicationState } from '../types';
import { ApplicationActions, authenticate, signOut } from '../actions/ApplicationActions'
import { rootState } from '../reducers';

//This is the definition of the types this
//component exposes
export interface ISignInProps {
  OnSignIn?: any
  OnSignOut?: any
}

//This is the definition of the types we want
//to get out of the global state
interface StateFromProps {
  Authenticated?: boolean,
  Username?: string
}

//Here we create the component and merge the two type definitons
class SignIn extends Component<ISignInProps & StateFromProps, {}> {

  renderSignedIn() {
    return <p>
      Eingeloggt als {this.props.Username}. 
      <Button variant="primary" onClick={() => this.props.OnSignOut()}>Ausloggen</Button>
      </p>
  }

  renderSignedOut() {
    return <p>
      Nicht eingeloggt. 
      <Button variant="primary"  onClick={() => this.props.OnSignIn()}>Einloggen</Button>
      </p>
  }

  render() {
    return <span>
      {this.props.Authenticated ? this.renderSignedIn() : this.renderSignedOut() }
    </span>
  }
}

const mapStateToProps = (state: rootState): StateFromProps => {
  return {
    Authenticated: state.application.auth.authenticated,
    Username: state.application.auth.username
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ApplicationActions>) => {
  return { 
    OnSignIn: () => dispatch(authenticate("test", "samplePassword")),
    OnSignOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
