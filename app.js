// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rutas
var appRoutes = require('./routes/app');
var loginRoutes = require('./routes/login');
var medicoRoutes = require('./routes/medico');
var uploadRoutes = require('./routes/upload');
var usuarioRoutes = require('./routes/usuario');
var imagenesRoutes = require('./routes/imagenes');
var hospitalRoutes = require('./routes/hospital');
var busquedaRoutes = require('./routes/busqueda');

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

//Server index config
// var serverIndex = require('serve-index');
// app.use(express.static(__dirname + '/'));
// app.use('/uploads', serverIndex(__dirname + '/uploads'));

// Rutas
app.use('/hospital', hospitalRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/upload', uploadRoutes);
app.use('/medico', medicoRoutes);
app.use('/img', imagenesRoutes);
app.use('/login', loginRoutes);


app.use('/', appRoutes);

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});