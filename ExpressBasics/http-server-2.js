const express = require('express');
const app = express();
const port = 5500;

function calculateSumUpto(N) {
    let SUM = 0;

    if (N < 0) { // Negative!
        for (let i = 0; i >= N; i--) {
            SUM += i
        }
    }
    else {
        for (let i = 0 ; i <= N ; i++) {
            SUM += i;
        }
    }

    return SUM
}

function calculateSum(a,b) {

    let num1 = parseFloat(a)
    let num2 = parseFloat(b)

    return num1 + num2

}

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
                    <h1>Hello World Welcome to the Homepage of HttpServer-2!!!</h1>
                </body>
            </html>

        `);
});

app.get("/sumUpto", (req, res) => {
    
    // Query Param , Route is only untills question mark comes! , after that there are query parameters!

    const n = req.query.n; // Catching/getting the query params!!
    const answer = calculateSumUpto(n)
    res.send(`
        
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to the Website</title>

                <style>

                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Poppins', sans-serif;
                        color: white;
                    }

                    body {

                        background-color: rgb(6, 0, 48);
                    }

                    .box {

                        margin-top: 100px;
                        width: 500px;
                        height: 500px;
                        background-color: rgb(0, 169, 225);
                        border-radius: 10px;
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

                        display: flex;
                        justify-content: center;
                        align-items: center;

                    }

                    .main-box {
                        display: flex;
                        justify-content: center;
                    }

                </style>

            </head>
            <body>
                <div class="main-box">
                    <div class="box">
                        <h1>Answer: ${answer.toString()}</h1>
                    </div>
                </div>
            </body>
        </html>
        
    `)

})


app.get("/sum" , (req , res) => {
    const a = req.query.a;
    const b = req.query.b;

    const answer = calculateSum(a,b)

    res.send(`
        
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to the Website</title>

                <style>

                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Poppins', sans-serif;
                        color: white;
                    }

                    body {

                        background-color: rgb(6, 0, 48);
                    }

                    .box {

                        margin-top: 100px;
                        width: 500px;
                        height: 500px;
                        background-color: rgb(0, 169, 225);
                        border-radius: 10px;
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

                        display: flex;
                        justify-content: center;
                        align-items: center;

                    }

                    .main-box {
                        display: flex;
                        justify-content: center;
                    }

                </style>

            </head>
            <body>
                <div class="main-box">
                    <div class="box">
                        <h1>Answer: ${answer.toString()}</h1>
                    </div>
                </div>
            </body>
        </html>
        
    `)

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});