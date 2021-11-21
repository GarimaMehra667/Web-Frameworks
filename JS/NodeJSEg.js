var myHttp = require('http');   //object of http
var myserver = myHttp.createServer(httpReqRes);

function httpReqRes(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("<h1>This is my page</h1>");
    res.write("<p>The text in the paragraph.</p>");
    res.write('{"coord":{"lon":77.2167,"lat":28.6667},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":303.2,"feels_like":310.2,"temp_min":303.2,"temp_max":303.2,"pressure":1009,"humidity":84},"visibility":1800,"wind":{"speed":2.06,"deg":140},"clouds":{"all":75},"dt":1632718993,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1632703314,"sunset":1632746542},"timezone":19800,"id":1273294,"name":"Delhi","cod":200}');
    res.end();
}

myserver.listen(8888);