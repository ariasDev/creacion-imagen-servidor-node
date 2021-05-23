require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();

const routeIndex = require('./routes/routeIndex');

app.use(cors());
app.use(routeIndex);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor corriendo exitoamente y escuchando en el puerto ${process.env.SERVER_PORT}`);
})