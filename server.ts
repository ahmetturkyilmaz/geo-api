import geoRouter from "./src/routes/GeoRouter";

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const cors = require('cors');

const exceptionHandler = require('./src/middleware/error')

// Load env vars
dotenv.config({path: './config/config.env'});


const app = express();

app.use(cors());

app.use(morgan('dev'));

//Body Parser
app.use(express.json());

//Mount Routers
app.use('/api', geoRouter);

app.use(exceptionHandler);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`server listening on ${process.env.PORT} mode on port ${PORT}`)
);

/*// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    // server.close(() => process.exit(1));
});*/
