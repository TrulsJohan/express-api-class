import express from 'express';
import cors from 'cors';

const app = express(); //creating server

//how middleware is weritten, this allow all origins on requests
/*app.use((req, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});*/
app.use(cors());

app.use(express.json()); //makes reading json data from requests easier

const animals = [];
const movies = [];

app.get('/', (req, res) => {
    //get request
    res.send('hello world');
});

app.get('/json', (req, res) => {
    res.status(200).json({ test: 'hello' });
});

app.get('/animals', (req, res) => {
    res.status(200).json(animals);
});

app.post('/animals', (req, res) => {
    //posts animals to api
    if (req.body.animal && req.body.name) {
        animals.push(req.body);
        res.status(201).json({ msg: 'Content recieved' });
    } else {
        res.status(400).json({ msg: 'Bad request' });
    }

    console.log(req.body);
});

app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

app.post('/movies', (req, res) => {
    if (req.body.name && req.body.title) {
        movies.push(req.body);
        res.status(201).json({ msg: 'Content Recieved', data: req.body });
    } else {
        res.status(400).json({ msg: 'Bad request' });
    }
});

app.listen(3000, () => {
    //telling the server what port to listen to
    console.log('server started');
});
