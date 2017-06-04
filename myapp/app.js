var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    var page = 1
    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    //     16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //     29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    //     42, 43, 44, 45, 46, 47, 48, 49, 50]
    var arr = []
    for(var i = 0; i<30; i++){
        arr.push({
            title:`标题${i+1}`,
            content: `文字文字文字文字文字${i+1}`
        })
    }
    var data = { 
        articles: arr.slice(10 * (page - 1), 10 * page),
        totalPage: Math.ceil(arr.length / 10),
        currentPage: page  
     }
    res.render('home', data);
});

app.get('/paged', function (req, res) {
    var page = parseInt(req.query.page || 1)  
    var arr = []
    for(var i = 0; i<30; i++){
        arr.push({
            title:`标题${i+1}`,
            content: `文字文字文字文字文字${i+1}`
        })
    }
    var data = { 
        articles: arr.slice(10 * (page - 1), 10 * page),
        totalPage: Math.ceil(arr.length / 10),
        currentPage: page  
     }
    // res.render('home', data);
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(data));
});

app.listen(3000);
