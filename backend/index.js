const express = require("express") 

const app = express();

app.get('/', (req, res) => {

    return res.send(`Hello Server`);
})

app.listen(8000, () => console.log('My server started'));
