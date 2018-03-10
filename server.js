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


var testone={
    title: 'THIS IS TEST ONE',
    head: 'TEST-ONE',
    date: '10-MAR-2018',
    content: `
    <div>
    Here we going to executed test one document
    
    
    </div>
    `
    
};



function test(data){
    var title=data.title;
    var head=data.head;
    var date=data.date;
    var content=data.content;
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





app.get('/testone', function (req, res) {
  res.send(test(testone));
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
