//https://site.financialmodelingprep.com/developer/docs/

// https://financialmodelingprep.com/api/v3/key-metrics-ttm/MMM?limit=40&apikey=YOUR_API_KEY

const fileSystem = require('fs');
require('dotenv').config();

const tickers = ['MMM']
const FINANCIAL_MODELING_PREP_API_KEY = process.env.FINANCIAL_MODELING_PREP_API_KEY;

tickers.forEach(ticker => {

    const url = `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${ticker}?limit=40&apikey=${FINANCIAL_MODELING_PREP_API_KEY}`;
    console.log(url)
    const headers = new Headers({'User-Agent': 'request', 'json': 'true'})
    fetch(url, {headers})
        .then(body => body.json())
        .then((data) => {
            fileSystem.writeFile(`${ticker}.json`, JSON.stringify(data), {flag: 'a+'}, err => {
            })
        })
        .catch(error => {
            console.error({error})
        })

})