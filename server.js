const express = require('express');
const cors = require('cors');
const app = express();
const parser = require('json-parser');
const {CLIENT_ORIGIN} = require('./config');
const cats = [
	{
		imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
		imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
		name: 'Fluffy',
		sex: 'Female',
		age: 2,
		breed: 'Bengal',
		story: 'Thrown out on the street'
	},
	{
		imageURL:'https://www.funnypica.com/wp-content/uploads/2012/12/Ugly-Cats-25.jpg',
		imageDescription: 'Dark, graying furr, face only a mother could love.',
		name: 'Moe',
		sex: 'Male',
		age: 17,
		breed: '???',
		story: 'Last 12 owners mysteriously died of wild animal attacks.'
	},
	{
		imageURL:'https://img.buzzfeed.com/buzzfeed-static/static/2016-07/29/15/asset/buzzfeed-prod-web01/sub-buzz-16791-1469819248-1.jpg?downsize=715:*&output-format=auto&output-quality=auto',
		imageDescription: 'Big-boned, cantankerous, loves to nom.',
		name: 'Oof',
		sex: 'Female',
		age: 8,
		breed: 'Regular?',
		story: 'Ate last owner\'s Thanksgiving turkey and that was the last straw.'
	},
	{
		imageURL:'https://vignette.wikia.nocookie.net/disney/images/f/f4/Thomasdisney.jpeg/revision/latest/scale-to-width-down/350?cb=20120802224916',
		imageDescription: 'Star of 1970 Disney animated classic, The AristoCats.',
		name: 'O\'Malley',
		sex: 'Male',
		age: 47,
		breed: 'Imaginary/Orange',
		story: 'Recently divorced from Duchess'
	}
];
const dogs = [
	{
		imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
		imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
		name: 'Zeus',
		sex: 'Male',
		age: 3,
		breed: 'Golden Retriever',
		story: 'Owner Passed away'
	},
	{
		imageURL: 'http://cdn.akc.org/akcdoglovers/airedaleThumb.jpg',
		imageDescription: 'Has a beard. I think that\'s normal, though.',
		name: 'Zeus',
		sex: 'Male',
		age: 4,
		breed: 'Airedale Terrier',
		story: 'Come to America in search of a better life'
	},
	{
		imageURL: 'http://cdn.akc.org/akcdoglovers/airedaleThumb.jpg',
		imageDescription: 'Has a beard. I think that\'s normal, though.',
		name: 'Spiros',
		sex: 'Male',
		age: 4,
		breed: 'Airedale Terrier',
		story: 'Come to America in search of a better life'
	},
	{
		imageURL: 'https://i1.wp.com/www.urbandognyc.com/wp-content/uploads/2015/01/brian-family-guy-dog-brought-back-to-life.jpg',
		imageDescription: 'Alcoholic, liberal, failure. SAD!',
		name: 'Brian',
		sex: 'Male',
		age: 19,
		breed: 'Airedale Terrier',
		story: 'Became so insufferable that his family kicked him out.'
	},
];

// app.use(
// 	morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
// 		skip: (req, res) => process.env.NODE_ENV === 'test'
// 	})
// );

app.use(
	cors({
	  origin: CLIENT_ORIGIN
	})
);

app.get('/api/cat', (req, res) => res.json(cats[0]));

app.get('/api/dog', (req, res) => res.json(dogs[0]));

app.delete('/api/cat'), (req, res) => {
	let cat = cats[0].name;
	cats.splice(0, 1);
	console.log(`${cat} successfully adopted.`);
	res.status(204).end();
};

app.listen(8080, () => console.log('App listening on port 8080')); 