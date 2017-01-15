var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var Sequelize = require('sequelize');
var sequelize = new Sequelize('application', 'sa', 'stalin', {
  host: 'localhost',
  dialect: 'mysql',
  port:'5555'
})

var User = sequelize.define('users', {
  userName: {
    type: Sequelize.STRING//,
    //field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    validate: {
        notNull: true,
        notEmpty: true
    }
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/users', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  User.findAll({
    attributes: ['userName', 'id']
  }).then(function(result){
    res.send(JSON.stringify(result));
  });
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})