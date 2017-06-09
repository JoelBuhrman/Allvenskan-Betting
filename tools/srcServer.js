import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
const port = 3000;
const app = express();
const compiler = webpack(config);


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'betting'
});
connection.connect();


//Handle SQL requests


app.get('/getAllGames', function (req, res) {
  connection.query("select home, t1.away, homeurl, awayurl from (SELECT home, away, url as homeurl FROM Games JOIN Teams ON home = name) t1 left join (select away, url as awayurl from Games join Teams on away = name) t2 on t1.away = t2.away", function (err, result) {
    res.send(result);
  });
});


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {

  if (err) {
    //console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});



