const express = require("express");
const app = express();
const path = require('path');
require('./mongodb');

app.use(express.json());
app.use('/api/usuarios', require(path.join(__dirname, 'routes', 'usuarios.routes')));
app.use('/api/educacion', require(path.join(__dirname, 'routes', 'educacion.routes')));
app.use('/api/experiencia', require(path.join(__dirname, 'routes','experiencia.routes')));
app.use('/api/proyectos', require(path.join (__dirname, 'routes', 'proyectos.routes')));
app.use('/api/skills', require(path.join(__dirname, 'routes', 'skills.routes')));

app.listen(4000, ()=>{
    console.log("escuchando puerto 4000")
})