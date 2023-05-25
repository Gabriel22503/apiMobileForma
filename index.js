const router = require('./Routes/get.route');

const express = require("express");
const app = express();
const port = 3000;
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use("/api", router
)
app.listen(port, ()=> {
    console.log('oui')
})