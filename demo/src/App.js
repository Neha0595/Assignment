import React from 'react';
import logo from './assets/googleLogo.png';
import './App.css';
import { GoogleLogin } from 'react-google-login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click here to login with Google',
      showGoogleLoginButton: true,
    };
  }

  responseGoogleSuccess = response => {
    this.setState({
      message: 'Congratulations Login Successful',
      showGoogleLoginButton: false,
    });
  };

  responseGoogleFail = response => {
    this.setState({
      message: 'Sorry! Login UnSuccessful! Try Again..',
      showGoogleLoginButton: true,
    });
  };

  render() {
    const { message, showGoogleLoginButton } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message}</p>
          {showGoogleLoginButton && (
            <GoogleLogin
              clientId="693482368528-668ai0igsqmseiucrvumr7igg36altce.apps.googleusercontent.com"
              buttonText="Continue Login with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleFail}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
