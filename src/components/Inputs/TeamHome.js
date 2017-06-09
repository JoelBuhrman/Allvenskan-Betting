import React from 'react';

class TeamHome extends React.Component{
  render(){
    return(
      <div className="">
        <div className="col-xs-6 customTextMedium centerVertically"><img className="customImage" src={this.props.logo} alt=""/></div>
        <div className="customTextMedium col-xs-6 centerVertically">{this.props.name}</div>
      </div>
    );
  }
}

export default TeamHome;
