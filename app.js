// Importar modulo express
const express = require('express');

// Importar modulo MySQL
const mysql = require('mysql2');

// Importar Express-handlebars
const { engine } = require('express-handlebars');

// Configuração de conexeção
const conexecao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'C@sa6881',
    database: 'projeto'
});

// Tste de conexao
conexecao.connect(function (erro) {
    if (erro) throw erro;
    console.log('Conexao efetuada com sucesso!');
})

// App
const app = express();

// Adicionar bootstrap
    app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// Adicionar css
    app.use('/css', express.static('./css'));

// Configuração express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Rota principal

app.get('/', function (req, res) {
    res.render('formulario');
});

// Servidor
app.listen(8080);