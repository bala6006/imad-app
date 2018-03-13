var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
