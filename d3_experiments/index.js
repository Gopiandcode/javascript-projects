const express = require('express');
const path = require('path');
const app = express();


app.use('/static',  express.static(path.join(__dirname, './frontend/dist')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './frontend/dist/index.html'))
});


app.get('*', (req,res) => {
    res.redirect('/');
})



app.listen(80, () => {
    console.log("Express app listening on port " + 80);
})