const express = require('express')
const path = require('path')

const port = 3002
const app = express()
app.use(express.json());
app.use(express.static("./"));
//app.use(express.static(path.join(__dirname, 'assets')));

app.listen(process.env.PORT || port, () => console.log(`The server is listening on port ${port}`))

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


module.exports = app