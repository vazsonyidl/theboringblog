const fileSystem = require('fs');
const request = require('request');
require('dotenv').config();

const ticker = 'MMM'
const ALPHA_VINTAGE_API_KEY = process.env.ALPHA_VINTAGE_API_KEY;

const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${ALPHA_VINTAGE_API_KEY}`;
console.log(url)
const headers = new Headers({'User-Agent': 'request', 'json': 'true'})
fetch(url, {headers})
    .then(body => body.json())
    .then(data => {
        fileSystem.writeFile(`${ticker}.json`, JSON.stringify(data), {flag: 'a+'}, err => {})
    })
    .catch(error => {
        console.error({error})
    })
