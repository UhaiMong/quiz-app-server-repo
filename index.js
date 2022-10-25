const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('Server data is running');
})

app.listen(port, () => {
    console.log("The server is running on the ", port);
})