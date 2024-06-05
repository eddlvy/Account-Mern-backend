const dotenv = require('dotenv').config({ path: "./config/config.env" });
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./config/db');
const updateGasto = require('./controllers/gastos');
const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRoute');
const MesModel = require('./models/mesModel');
const mesUpdateRouter = require('./routes/mesUpdateRoute');
const auth = require('./controllers/authMiddleware');
const ingresosUpdateRouter = require('./routes/ingresosUpdateRoute');
const ingresosGetRouter = require('./routes/ingresosGetRouter');



connectToDb();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE, OPTIONS");

  next();
});
app.use('/', registerRouter);
app.use('/', loginRouter);
app.use('/', ingresosGetRouter)
app.use('/user/home', auth, mesUpdateRouter)
app.use('/user/home', auth, ingresosUpdateRouter)

app.get('/mes', async (req, res) => {
  try {
    const mes = await MesModel.find();
    res.send(mes)
  } catch (error) {
    res.status(500).json({ error: "Error" })
  }
});
app.post('/user/home/gastos/:mes/:gasto', updateGasto);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})