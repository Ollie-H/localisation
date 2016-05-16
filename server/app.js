import http from 'http';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

// Middle ware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Api routes
app.post('/api/modules', function (req, res) {
  console.log(req.body);
});

// Catch all other routes and start client app
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

const server = http.createServer(app);
server.listen(port);
console.log("http server listening on %d", port);