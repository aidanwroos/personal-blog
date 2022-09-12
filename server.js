var PORT = 8000;

var http = require('http');

const fs = require('fs');

const path = './public/blog-data.json';

//var blog_json_file = require('./public/blog-data.json');

const Person = {
    "name" : "Aian",
    "age" : 1,
    "sex" : "mal"
};

const data = JSON.stringify(Person);


fs.readFile(path, 'utf-8', (err, jsonString) => {
    if (err) {
        console.log(err)
    }
    else {
        const json_data = JSON.parse(jsonString);
        console.log(json_data.name);
        console.log(json_data.age);
        console.log(json_data.sex);

        fs.writeFile(path, data, (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        }) 
    } 
});


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end('Hello World!');
    
}).listen(PORT);
