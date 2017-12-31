import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      googleSignInState: false,
      facebookSignInState: false
    };
  }


  render() {

    let loginString = "";

    if (this.state.googleSignInState) {
      loginString += "Google login successful";
    }

    if (this.state.facebookSignInState) {
      loginString += "facebook login successful";
    }

    const responseGoogle = (response) => {
      console.log(response);
      this.setState({googleSignInState: true});
    }

    const responseFacebook = (response) => {
      console.log(response);
      this.setState({facebookSignInState: true});
    }

    const componentClicked = () => {
      console.log("I'm pressed");
    }
    //Docs at: https://www.npmjs.com/package/react-google-login
    //Doc at: https://www.npmjs.com/package/react-facebook-login
    //Doc at: https://www.youtube.com/watch?v=Ins-7Ze29IQ&t=140s
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>

        <GoogleLogin
          clientId="61648028215-3subklgs3qkdhncobhu9rkclqe8k1k75.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}/>

        <FacebookLogin
          appId="1598164776936304"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}/>

        <p>{loginString}</p>
      </div>
    );
  }
}

export default App;
