const express = require('express');
const path = require('path')
const app = express();

app.use(express.json());


app.use('/', express.static('../test/build'));
app.get('/*', (req, res) => {

    //res.sendFile(__dirname, 'test' , 'build' , 'index.html');
    res.sendFile(path.join('../test/build', 'index.html'))
})

const PORT = process.env.PORT || 6565;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server listening on port ${PORT}`)
    }
})