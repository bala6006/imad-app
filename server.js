var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pool=require('pg').Pool;
var config={
    user:'gbala6006',
    database:'gbala6006',
    host:'db.imad.hasura.io',
    port:'5432',
    password:process.env.DB.PASSWORD
    
};
var counter=0;
var names=[];
app.get('/counter/:n',function(req,res)
{
   // counter=counter+1;
    //res.send(counter.toString());
     var nam=req.params.n;
   names.push(nam);
   res.send(JSON.stringfy(names));
});

var names=[];
app.get('/submit/:name',function(req,res)
{
   var nam=req.params.name;
   names.push(nam);
   res.send(JSON.stringfy(names));
    
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


var first={
testone: {
    title: 'THIS IS TEST ONE',
    head: 'TEST-ONE',
    date: '10-MAR-2018',
    content: `
    <div>
    Here we going to executed test one document
    </div>`
},
testtwo: {

title: 'THIS IS TEST TWO',
    head: 'TEST-TWO',
    date: '11-MAR-2018',
    content: `
    <div>
    Here we going to executed test two document
    </div>`
    
},
testthree:{
    title:'THIS IS A TEST THREE',
    head:'TEST-THREE',
    date: '13-03-2018',
    content:`
    div>
    here we going to excuted the test three
    </div>`
}

};

function test(da){
    var title=da.title;
    var head=da.head;
    var date=da.date;
    var content=da.content;
var htmltest=`
<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
    <div align=center>
        <table border=5% align=center>
            <tr>
                <td>
                    <a href='/'>HOME</a>
                </td>
            </tr>
        </table>
        <div>
           <h4>${head}</h4>
        </div>
        
        <div>
            ${date}
        </div>&nbsp;
        <DIV>
             ${content}
        </DIV>
        </div>
    </body>
</html>
`;
return htmltest;
}
var pool=new Pool('config');
app.get('/test-db',function(req,res){
    pool.query('select * from user',function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringfy(result));
        }
        
    });
    //here itself we going to create SQL query
    
});

app.get('/:testing', function (req, res) {
    var testing=req.params.testing;
  res.send(test(first[testing]));
});

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'test.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
