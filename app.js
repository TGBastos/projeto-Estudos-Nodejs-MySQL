// Importar modulo express
const express = require('express');

// Importar modulo MySQL
const mysql = require('mysql2');

// Importar Express-handlebars
const { engine } = require('express-handlebars');
// App
const app = express();

// Manipulação de dados via rotas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

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

// Rota de Cadastro 
app.post('/cadastrar', function(req, res){
    console.log(req.body);
    res.end();
});

// Servidor
app.listen(8080);