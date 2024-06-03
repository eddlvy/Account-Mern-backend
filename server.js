const dotenv = require('dotenv').config({ path: "./config/config.env" });
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const connectToDb = require('./config/db');
const ingresosUpdate = require('./controllers/ingresos');
const updateGasto = require('./controllers/gastos');
const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRoute');



connectToDb();

const port = process.env.PORT;
app.use(express.json());
app.use(session({ secret: `${process.env.SECRET}`, resave: true, saveUninitialized: true }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE, OPTIONS");

  next();
});
app.use('/', registerRouter);
app.use('/', loginRouter);


app.use('/user', function auth(req, res, next) {
  if (req.session.authorization) {
    token = req.session.authorization['token'];
    jwt.verify(token, `${process.env.SECRET_KEY}`, (error, user) => {
      if (!error) {
        req.user = user;
        next()
      } else {
        return res.status(403).json({ error: "Usuario no Registrado" })
      }
    })
  } else {
    return res.status(403).json({ error: "Usuario no Autenticado " })
  }
})

app.get('/', (req, res) => {
  res.json({ message: "Hello from server" })
});




app.post('/user/home/ingresos', ingresosUpdate);

app.post('/user/home/gastos/:mes/:gasto', updateGasto);





app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})