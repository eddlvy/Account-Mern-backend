const dotenv = require('dotenv').config({ path: "./config/config.env" });
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./config/db');
// const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRoute');
const MesModel = require('./models/mesModel');
const mesUpdateRouter = require('./routes/mesUpdateRoute');
const auth = require('./controllers/authMiddleware');
const ingresosUpdateRouter = require('./routes/ingresosUpdateRoute');
const ingresosGetRouter = require('./routes/ingresosGetRouter');
const gastosGetRouter = require('./routes/gastosGetRouter')
const gastosUpdateRouter = require('./routes/gastosUpdateRoute')
const PlanModel = require('./models/planModel');



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
// app.use('/', registerRouter);
app.use('/', loginRouter);
app.use('/', ingresosGetRouter)
app.use('/user/home', auth, mesUpdateRouter)
app.use('/user/home', auth, ingresosUpdateRouter)
app.use('/user/home', auth, gastosGetRouter)
app.use('/user/home', auth, gastosUpdateRouter)


app.get('/mes', async (req, res) => {
  try {
    const mes = await MesModel.find();
    return res.send(mes)
  } catch (error) {
    return res.status(500).json({ error: "Error" })
  }
});
app.get('/plan', async (req, res) => {
  try {
    const plan = await PlanModel.find({}, { _id: 0, __v: 0 });
    return res.send(plan)
  } catch (error) {
    return res.status(500).json({ error: "Error" })
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})