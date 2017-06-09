import React from 'react';
import {Link} from 'react-router';
import InputGroup from '../Inputs/InputGroup';
import $ from 'jquery';
import GameStore from '../../stores/GameStore';


class GamesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      games: GameStore.getAll()

    }
    $.get('/getAllGames', function (data) {
      for (var i = 0; i < data.length; i++) {
        GameStore.addGame(data[i].home, data[i].away, data[i].homeurl, data[i].awayurl);
      }
    });

  }

  componentWillMount() {
    GameStore.on("change", () => {
      this.setState({
        games: GameStore.getAll()
      })
    })
  }

  render() {

    const {games} = this.state;
    const gameComponents = games.map((game) => {
      return <InputGroup homeTeam={game.home}
                         awayTeam={game.away}
                         homeLogo={game.homeurl}
                         awayLogo={game.awayurl}/>;
    });


    return (
      <div className="container">
        <div className="customTextMedium">Round 1</div>
        {gameComponents}
        <div className="customTextMedium">
          <Link to="/host" activeClassName="active">
            <button className="myCustomButton">Submit</button>
          </Link>
        </div>


      </div>




    );
  }
}

export default GamesPage;
