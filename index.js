var express = require('express');
var ip = require('ip');
var exec = require('child_process').exec;
var app = express();

//Share folder /dist as static website content
app.use('/', express.static(__dirname + '/dist'));

//on get request on /shutdown URL turn off PC
app.get('/shutdown', function(req, res) {
    exec('shutdown /s /t 1');
    res.redirect('/');
});

//on get request on /restart URL restert PC
app.get('/restart', function(req, res) {
    exec('shutdown /r /t 1');
    res.redirect('/');
});

//set port for listening
app.set('port', 5000);
//set address for listening
app.listen(app.get('port'), ip.address());

console.log('Server is started on: ' +  ip.address() + ':' + app.get('port'));
