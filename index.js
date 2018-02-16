const Express = require('express');
const app = Express();

app.use(Express.static(__dirname+ '/public'));

/*

app.get('/somethingActuallyMeaningful', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/Untitled.png', function(req, res){
	res.sendFile(__dirname + '/public/Untitled.png');
});

app.get('/ageofwar.swf', function(req, res){
	res.sendFile(__dirname + '/public/ageofwar.swf');
});

app.get('/colorpicker.gif', function(req, res){
	res.sendFile(__dirname + '/public/colorpicker.gif');
});
*/

console.log('DIR: ' + __dirname);

app.listen(80);

