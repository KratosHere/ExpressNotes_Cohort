const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => {
    res.send(`
        
        <html>
            <style>

                body {
                    background-color: rgb(0,10,40);
                    color: azure;
                }

            </style>
            <body>
                <h1>Home Route!</h1>
            </body>
        </html>
        
        `);
});


app.post("/chatgpt", jsonParser, (req, res) => {
    console.log(`\n This is Your Auth: ${req.headers.authorization}`)
    console.log(`This Was Your Question: ${req.body.Question}`);

    res.send({
        answer: "2 + 2 = 4"
    })
})

app.get("/mobile", (req, res) => {
    res.send(`
        <html>
            <style>

                body {
                    background-color: rgb(0,10,40);
                    color: azure;
                }

            </style>
            <body>
                <h1>Hello There Mobile!</h1>
            </body>
        </html>
        `)
})

app.get("/parameter/:theParam" , (req , res) => {
    const theParameter = req.params.theParam;
    res.send(`Passed Parameter: ${theParameter}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});