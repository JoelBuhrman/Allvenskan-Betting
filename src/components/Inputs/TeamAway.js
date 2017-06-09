import React from 'react';

class TeamAway extends React.Component{
  render(){
    return(
      <div className="">
        <div className="customTextMedium col-xs-6">{this.props.name}</div>
        <div className="col-xs-6 customTextMedium"><img className="customImage" src={this.props.logo} alt=""/></div>
      </div>
    );
  }
}

export default TeamAway;
