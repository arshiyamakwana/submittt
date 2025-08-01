const express = require('express');
const app = express();
const port = 5000;

const mongodb = require("./db");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

(async () => {
    await mongodb(); // Ensure DB is connected before starting server
    app.use(express.json());
    app.use('/api', require("./Routes/CreateUser"));
    app.use('/api', require("./Routes/DisplayData"))

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
})();
