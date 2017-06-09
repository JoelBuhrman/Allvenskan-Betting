import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div className="loginAndRegisterBackground col-xs-12">
        <div className="form-group ">
          <label for="usr">Välj ett användarnamn:</label>
          <input type="text" className="form-control" id="usr"/>
        </div>
        <div className="form-group">
          <label for="pwd">Lösenord:</label>
          <input type="password" className="form-control" id="pwd"/>
        </div>
        <div className="form-group">
          <label for="pwd">Upprepa lösenord:</label>
          <input type="password" className="form-control" id="pwd"/>
        </div>
        <button className="logInButton">Registrera</button>
      </div>
    );
  }
}

export default Register;
