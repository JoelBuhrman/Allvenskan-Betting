// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Navbar from './Navbar';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid noPadding">
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
