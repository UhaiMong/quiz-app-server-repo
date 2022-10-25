const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;
const tutorialData = require("./data/tutorials.json");
const courseName = require("./data/course-name.json");


app.get('/', (req, res) => {
    res.send('Server data is running in port 5000');
});

app.get('/course-name', (req, res) => {
    res.send(courseName);
})

// dynamic fetch with id.
app.get('/tutorial/:id', (req, res) => {
    const id = req.params.id;
    const getSingleTutorial = tutorialData.find(tutorial => tutorial.id == id);
    if (!getSingleTutorial) {
        res.send("No data found");
    }
    res.send(getSingleTutorial);
});

app.listen(port, () => {
    console.log("The server is running on the ", port);
})