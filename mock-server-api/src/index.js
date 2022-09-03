let express = require('express');
let http = require('http');
let xmlparser = require('express-xml-bodyparser');
var xml_object = require('object-to-xml');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded());
app.use(xmlparser());


app.post('/contrata/produto', function (req, res, next) {
    console.log(req.body);
    res.type('application/xml');
    res.send(xml_object(req.body));
});


server.listen(3000);
