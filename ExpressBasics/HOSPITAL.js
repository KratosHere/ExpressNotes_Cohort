/*

Some Conventions need to keep in mind for this project !!::

KidneysArr => {one , two}

healty kidney should be at place one , unhealthy kidney should be in place two ,

Its Not proper error handled , you can modify it and make it!!, Add some checks!!


*/


const express = require('express');

const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()

const app = express();
const port = 5500;


// Database
const USERS_DATA = [{ // Array of Objects!!! (Available Data!!)
    username: "Mukesh",
    kidneys: [{
        healthy: false
    } , {
        healthy: false
    }]
} , 
{
    username: "Sapna",
    kidneys: [{
        healthy: true
    } , {
        healthy: false
    }]
}]


function GetUserData(userSearch) {

    for (let i = 0 ; i < USERS_DATA.length ; i++) {
        let theName = String(userSearch)
        if (USERS_DATA[i].username === theName) {
            return USERS_DATA[i] // An Object
        }

        
    }

    return {
        username: "NotFound",
        kidneys: [{
            healthy: null
        } , {
            healthy: null
        }]
    }

}


// All the logical stuff!!

app.get("/" , (req ,res) => {
    res.send(`
            <html>

                <style>
                    body {
                        background-color: rgb(0,10,40);
                        color: azure;
                    }
                </style>
                <body>
                    <h1>Available Functionalities:</h1>
                    <h2>GET: <a href="http://localhost:${port}/showkidneydata">/showkidneys</a> </h2>
                    <h2>POST: /addusers </h2>
                    <h2>PUT: /makehealthy or /makeunhealhy </h2>
                    <h2>DELETE: /removeonekidney </h2>
                    
                </body>
            
            </html>
        `)
})

app.get("/showkidneydata" , (req , res) => {
    const UserData = GetUserData(req.query.username); // Catching the username from the query param!
    const UserKidneyData = UserData.kidneys;
    /* 
    {
        username: "Sapna",
        kidneys: [{
            healthy: true
        } , {
            healthy: false
        }]
    }
    */

    const numberOfKidneys = UserKidneyData.length;
    let numberOfHealthyKidneys = 0;
    let numberOfUnHealthyKidneys = 0;

    for (let a = 0 ; a < UserKidneyData.length ; a++) {
        if (UserKidneyData[a].healthy === true) {
            numberOfHealthyKidneys += 1;
        }
    }

    for (let b = 0 ; b < UserKidneyData.length ; b++) {
        if (UserKidneyData[b].healthy === false) {
            numberOfUnHealthyKidneys += 1;
        }
    }

    res.json({
        PatientName: UserData.username,
        TotalKidneys: numberOfKidneys,
        HealthyKidneys: numberOfHealthyKidneys,
        UnHealthyKidneys: numberOfUnHealthyKidneys
    })

})

app.post("/adduser" , jsonParser , (req , res) => {
    const userToAdd = req.body;
    USERS_DATA.push(userToAdd);

    res.json({
        msg: "New User Added!"
    })

})

// Update Some Sort of stuff!!

app.put("/makehealthy" , (req , res) => {
    for (let i = 0 ; i < USERS_DATA.length ; i++) {
    
        let secondLoopArr = USERS_DATA[i].kidneys;
        for (let j = 0 ; j < secondLoopArr.length ; j++) {
            secondLoopArr[j].healthy = true;
        }
    }

    res.json({
        msg: "All Kidneys Healthy!!!"
    })

})

app.put("/makeunhealthy" , (req , res) => {
    for (let i = 0 ; i < USERS_DATA.length ; i++) {
    
        let secondLoopArr = USERS_DATA[i].kidneys;
        for (let j = 0 ; j < secondLoopArr.length ; j++) {
            secondLoopArr[j].healthy = false;
        }
    }

    res.json({
        msg: "All Kidneys UnHealthy!!!"
    })

})

// Remove One Kidney!! (or try something better => Removing all the unhealthy kidneys!!)

app.delete("/removeonekidney" , (req , res) => {
    for (let i = 0 ; i < USERS_DATA.length ; i++) {
        USERS_DATA[i].kidneys.pop()
    }

    res.json({
        msg: "One kidney Removed!"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});