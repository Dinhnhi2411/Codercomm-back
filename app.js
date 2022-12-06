require(
    "dotenv"
).config()
const cors= require("cors");

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sendResponse } = require('./helpers/utils');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter);

app.use(cors());
const mongoose = require("mongoose")
/* DB connection*/
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log(`DB connected ${mongoURI}`))
  .catch((err) => console.log(err));

//   Error Handlers 
// catch 404 
app.use((req, res, next )=> {
const err = new Error("Not Found")
err.statusCode = 404;
next(err)
});

app.use((err, req, res, next ) => {
    console.log('ERROR', err);
    if(err.isOperational){
        return sendResponse(
            res,
            err.statusCode ? err.statusCode : 500,
            false,
            null,
            { message: err.message},
            err.errorType
        );
    }else{
        return sendResponse(
            res,
            err.statusCode ? err.statusCode : 500,
            false,
            null,
            { message: err.message},
            "Internal Server Error"
        );
    }

});

module.exports = app;
