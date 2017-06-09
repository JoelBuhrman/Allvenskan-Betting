import React from 'react';
import $ from 'jquery';
import Login from './Login';
import Register from './Register';


class StartPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {login: true};
    this.clickedRegister = this.clickedRegister.bind(this);
    this.clickedLogin = this.clickedLogin.bind(this);
  }

  clickedLogin() {
    this.setState({login: true});
    $("#register").removeClass("active");
    $("#login").addClass("active");
  }

  clickedRegister() {
    this.setState({login: false});
    $("#login").removeClass("active");
    $("#register").addClass("active");

  }


  render() {
    const login = this.state.login;
    let loginOrRegister = null;
    if (login) {
      loginOrRegister = <Login/>;
    }
    else {
      loginOrRegister = <Register/>;
    }


    return (
      <div className="centerParent">

        <div className="centerChild col-md-5 col-xs-12">
          <div className="centerParent">
            <div className="centerChild col-xs-8">
              <div className="col-xs-6">
                <div onClick={this.clickedLogin} className="smallWhiteText pointer">Logga in</div>
                <div id="login" className="active"></div>
              </div>

              <div className="col-xs-6">
                <div onClick={this.clickedRegister} className="smallWhiteText pointer">Registrera</div>
                <div id="register" className=""></div>
              </div>
            </div>
          </div>
          {loginOrRegister}
        </div>
      </div>

    );
  }
}


export default StartPage;
