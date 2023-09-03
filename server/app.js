const express = require("express");
const morgan = require("morgan");

/* Exported Routers === */
const userRouter = require('./routes/userRoutes');
const partyRouter = require("./routes/partyRoutes");
/* Exported Routers === */

const app = express();

// MIDDLEWARES
//console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}
app.use(express.json());


// ROUTES

app.use("/api/v1/user", userRouter);
app.use("/api/v1/party", partyRouter);


// Exporting the ready app
module.exports = app;