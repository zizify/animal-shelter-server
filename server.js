const express = require('express');
const cors = require('cors');
const app = express();
const parser = require('json-parser');
const {PORT, CLIENT_ORIGIN} = require('./config');
const {cats, dogs} = require('./animal-data.js');

app.use(
	cors({
	  origin: CLIENT_ORIGIN
	})
);

app.get('/api/cat', (req, res) => res.json(cats.peek()));

app.get('/api/dog', (req, res) => res.json(dogs.peek()));

app.delete('/api/cat', (req, res) => {
	cats.dequeue();
	res.status(204).end();
});

app.delete('/api/dog', (req, res) => {
	dogs.dequeue();
	res.status(204).end();
});

app.listen(PORT || 8080, () => console.log('App listening on port 8080')); 