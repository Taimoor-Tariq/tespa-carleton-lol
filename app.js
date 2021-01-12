require('dotenv-flow').config();
const
    express = require('express'),
    app = express(),
    port = 3000

app
    .use(express.urlencoded( {extended: true} ))
    .use(require('body-parser').json())
    .use(express.static("public"))
    .use(require('./routes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})