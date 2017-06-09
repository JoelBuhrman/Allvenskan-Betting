import React from 'react';
import {Link} from 'react-router';
class Login extends React.Component {
  render() {
    return (
      <div className="loginAndRegisterBackground col-xs-12">
        <div className="form-group ">
          <label for="usr">Användarnamn:</label>
          <input type="text" className="form-control" id="usr"/>
        </div>
        <div className="form-group">
          <label for="pwd">Lösenord:</label>
          <input type="password" className="form-control" id="pwd"/>
        </div>
        <Link to="/home" activeClassName="active"><button className="logInButton">Logga in</button></Link>
      </div>
    );
  }
}

export default Login;
