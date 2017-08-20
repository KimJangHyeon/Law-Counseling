var express = require('express');
var app = express();
var router = require('./router/main')(app);
var bodyParser = require('body-parser');

var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'cds'
});
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var sql = 'SELECT * FROM post';

conn.query(sql, function(err, rows, fields){
  if(err){
    console.log(err);
  } else {
    for(var i=0; i<rows.length; i++){
      console.log(rows[i]);
    }
  }
});
 app.get('/board',function(req,res){
        conn.query(sql, function(err, rows, fields){
          if(err){
            console.log(err);
          } else {
            for(var i=0; i<rows.length; i++){
              console.log(rows[i]);
            }
          } 
          res.render('board.ejs' ,{title: rows[0].title});
    }); 
    });
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 0100")
});
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());