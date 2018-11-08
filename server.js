const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/gooutgowild'));

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname + '/dist/gooutgowild/index.html'));

});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server started');
});
