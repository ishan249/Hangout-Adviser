const axios = require('axios');
const express = require('express');
const app = express();
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    res.set("x-requested-with", "XMLHttpRequest");
    res.set("Access-Control-Expose-Headers","Content-Encoding,api_key");
    res.set("origin","http://localhost:3000");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());

app.get("/", (req, res) => {
    axios.get(`https://serpapi.com/search.json?engine=google&q=Coffee&location=Austin%2C+Texas%2C+United+States&google_domain=google.com&gl=us&hl=en&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log("reaching here and printing your error")

            console.log(error.response);
        });
});

app.listen(5000, ()=>{
    console.log("app is listening on port 5000");
});