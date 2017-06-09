import {EventEmitter} from "events";

class GameStore extends EventEmitter {
  constructor() {
    super();
    this.games = [];
  }


  getAll() {
    return this.games;
  }

  addGame(home, away, homeurl, awayurl) {
    this.games.push({
      home, away, homeurl, awayurl
    });

    this.emit("change");
  }
}

const gameStore = new GameStore;

export default gameStore;
