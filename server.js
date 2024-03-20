const express = require("express");
const dotenv=require('dotenv')
const colors=require('colors')
const morgan=require('morgan')
const cors=require('cors');
const connectDB = require("./config/db");
dotenv.config()
 
connectDB();
const app = express();

app.use(express.json())//Enable parsing of JSON bodies in incoming requests.
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/test',  require("./routes/testRoutes"));//Mount the routes defined in testRoutes.js under the /api/v1/test endpoint.
app.use('/api/v1/auth',  require("./routes/authRoutes"));
app.use('/api/v1/inventory',  require("./routes/inventoryRoutes"));
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Node server is running at ${process.env.DEV_MODE} modeOn Port ${process.env.PORT}`.bgBlue.white);
});
