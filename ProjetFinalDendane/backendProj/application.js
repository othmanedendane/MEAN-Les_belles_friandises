const express =require('express');
const app = express();
const mongoose = require('mongoose');
const connection = mongoose.connection;
const bodyParser = require('body-parser');
const friandise = require('./models/modFriandise');
const toto = require('./models/modChoco');
const cors= require('cors');


app.use(cors());
app.use(bodyParser.json());     //Le body-parser nous permet de lire les objets JSON
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.get('/', (req, res)=> {
    res.render('index.ejs', {userName:'n/a', pagetitle:"Test ejs"});
});


app.get('/accueil', (req, res)=> {
    const nom =req.params.nom;
    res.render('accueil.ejs', {userName:'n/a', pagetitle:"accueil"});
});


app.get('/accueil/:nom', (req, res)=> {
    const nom =req.params.nom;
    res.render('accueil.ejs', {userName: nom, pagetitle:"accueil"});
});

let listeChoco = [{brand: 'kit kat',price:10.45},
{brand: 'Mars',price:10.45},
{brand: 'Wunderbar',price:10.45},
{brand: 'Coffe Crisp',price:10.45},
{brand: 'Skittles',price:10.45}];

let listeChips = [{brand: 'BBQ',price:3.45,cie:'Lays'},
{brand: 'Regulier',price:2.45,cie:'Lays'},
{brand: 'Cheddar',price:1.45,cie:'Doritos'},
{brand: 'Sel et vinaigre',price:9.45,cie:'Miss Vickies'}];

app.get('/chocolat',(req,res)=>{
        res.render('chocolat',{choco:listeChoco ,pageTitle: 'Mes chocolats'});
});


app.get('/chocolat2',(req,res)=>{
    res.json(listeChoco);
});


app.get('/friandChoix/:test', (req, res)=> {
    const test =req.params.test;
    if (test === 'chocolat') {
        res.json(listeChoco);
    }
    else if (test === 'chips')
    {
        res.json(listeChips);
    }
    else
    {
        res.send( 'Mauvais choix ! nous ne vendons pas de '+ test + ' !');
    }
});

app.listen(3824, ()=> {
    console.log("j'écoute le port 3824 !!!")
});


mongoose.connect('mongodb://localhost:27017/bdProj',({useUnifiedTopology: true, useNewUrlParser: true }));
//mongoose.connect('mongodb://odendane:odendane@10.30.40.121:27017/odendane',{ useUnifiedTopology: true, useNewUrlParser: true }  );

connection.once('open',() => {
    console.log('Connected to mongoDB');
});

app.post('/newfriandise', (req, res) => {
    console.log('req.body', req.body);
    const friandise3 = new friandise(req.body);
    friandise3.save((err, friandise3) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(friandise3);
    });
});

app.post('/newchocolat', (req, res) => {
    console.log('req.body', req.body);
    const cho = new toto(req.body);
    cho.save((err, cho) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(cho);
    });
});

app.get('/friandises', (req, res) => {

    friandise.find()

    .exec()
    .then(friandise => res.status(200).json(friandise));

});


app.delete('/delfriandise/:id', (req,res) => {

    const id = req.params.id;
    friandise.findByIdAndDelete(id, (err, friandise) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(202).json({ msg: 'friandise avec lid ${​​​​​friandise._id}​​​​​ supprimée'});
    });
});



