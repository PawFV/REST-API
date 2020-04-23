require('dotenv').config()

const express = require('express'); // Llama librería Express
const app = express() // Variable para configurar servidor
const mongoose = require('mongoose'); // Llama librería mongoDB


mongoose.connect(process.env.DATABASE_URL, {
    'useUnifiedTopology': true,
    'useNewUrlParser': true
}) //establece la conexion al servidor

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('MongoDB Online :] !'));

app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter)

app.listen(3000, () => console.log('Node Online!'));
