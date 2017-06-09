import React from 'react';
import Input from './Input';
import TeamHome from './TeamHome';
import TeamAway from './TeamAway';


class InputGroup extends React.Component {


  constructor(props) {
    super(props);

    this.homeTeam = props.homeTeam;
    this.homeLogo = props.homeLogo;

    this.awayTeam = props.awayTeam;
    this.awayLogo = props.awayLogo;

  }

  render() {
    var homeTeam = this.homeTeam;
    var homeLogo = this.homeLogo;

    var awayTeam = this.awayTeam;
    var awayLogo = this.awayLogo;

    return (
      <div className="inputGroup">

        <div className="col-xs-5">
          <div className="col-xs-2"></div>
          <div className="col-xs-6 centerVertically">

            <TeamHome name={homeTeam}
                      logo={homeLogo}/>
          </div>
          <div className="col-xs-4">
            <Input/>
          </div>
        </div>
        <div className="customTextMedium col-xs-2"> vs</div>
        <div className="col-xs-5">
          <div className="col-xs-4">
            <Input/>
          </div>
          <div className="col-xs-6">
            <TeamAway name={awayTeam}
                      logo={awayLogo}/>
          </div>
        </div>
        <div className="col-xs-8"></div>


      </div>
    );
  }
}


export default InputGroup;
