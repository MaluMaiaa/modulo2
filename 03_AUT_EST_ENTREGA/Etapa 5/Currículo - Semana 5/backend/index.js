

const hostname = "127.0.0.1";
const port = 3051;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "database.db";
app.use(express.static("../"));
app.use(express.json());


app.get('/user', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM user ORDER BY id COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
  });

