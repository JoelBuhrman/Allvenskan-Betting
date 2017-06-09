import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid navContainer">
            <div className="navbar-header centerParent">
              <a className="navbar-brand centerChildVertically col-xs-2 smallWhiteText" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active navLi centerParent"><a href="#" className="centerChildVertically">Betta</a></li>


              <li className="navLi centerParent">
                <div className="centerChildVertically  col-xs-2"><Link to="/table">
                  <a href="#" className="">Tabell</a>
                </Link></div>
              </li>


              <li className="navLi centerParent"><a href="#" className="centerChildVertically">Poängsystem</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">

              <li className="navLi centerParent"><a href="#" className="centerChildVertically"><span
                className="glyphicon glyphicon-log-in"></span> Logga ut</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
