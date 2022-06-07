

const hostname = "127.0.0.1";
const port = 3051;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "database.db";
app.use(express.static("../"));
app.use(express.json());


app.get('/user', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM user ORDER BY id COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
  });

  app.post('/insert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "INSERT INTO user (nome, idade) VALUES ('" + req.body.nome + "', " + req.body.idade + ")"
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [req.body.id, req.body.nome, req.body.idade],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); 
    res.end();
});

app.post('/userupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "UPDATE user SET nome = '" + req.body.nome + "' WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); 
});

app.post('/userdelete', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "DELETE FROM user WHERE id =" + req.body.id;
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); 
});







