import React, { Component } from 'react';
import Button from '../../components/button/button';
import '../../index.css';
import styles from './signInContainer.module.css';

class SignInContainer extends Component {
  state = {
    username: '',
    password: '',
    signInAsTenantClicked: false,
    signInAsLandlordClicked: false,
  }

  handleSignInAsTenantClick = () => {
    this.setState({ signInAsTenantClicked: true })
  }

  handleSignInAsLandlordClick = () => {
    this.setState({ signInAsLandlordClicked: true })
  }

  handleGoBackClick = () => {
    this.setState({
      signInAsTenantClicked: false,
      signInAsLandlordClicked: false
    })
  }

  render() {
    const { signInAsLandlordClicked, signInAsTenantClicked } = this.state;

    let inputs = (
      <>
        <Button onClick={this.handleSignInAsTenantClick}>Sign in as a landlord</Button>
        <Button onClick={this.handleSignInAsTenantClick}>Sign in as a tenant</Button>
      </>
    );

    if (signInAsTenantClicked || signInAsLandlordClicked) {
      inputs = (
        <>
          <label className={styles.label}>
            Username: 
            <input className = {styles.textInput} type="text"></input>
          </label>
          <label className={styles.label}>
            Password:
            <input className = {styles.textInput} type="text"></input>
          </label>
          <Button>Sign In</Button>
          <Button onClick = {this.handleGoBackClick}>Go Back</Button>
        </>
      )
    }

    return (
      <main className={styles.main}>
        <div className={styles.form}>
          <h1 className={styles.formTitle}>Property Management</h1>
          <p className={styles.formDescription}>A solution for both landlords and tenants</p>
          <div className={styles.inputs}>
            {inputs}
          </div>
        </div>
      </main>
    );
  }
}

export default SignInContainer;