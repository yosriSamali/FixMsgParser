var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const FIXParser = require('fixparser');
const fixParser = new FIXParser.default();

// set the view engine to ejs
// app.set('view engine', require('ejs').renderFile)
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/add', (req, res) => {
    const fix_message = fixParser.parse(req.body.name);
    const fix_pairs = Array.from(fix_message[0].data);
    const userValue = {
        tag : tag,
        value : value,
        size: fix_pairs.length,
        fix_pairs: fix_pairs
    }
    res.render('mypage.html', {
        user: userValue
        })
})

app.listen(5000,function(){
    console.log('server running on port 5000');
})
