// https://www.alphavantage.co
const fileSystem = require('fs');
require('dotenv').config();

const tickers = ['MMM', 'BEN', 'NEP', 'DUK', 'EBTC']
const ALPHA_VINTAGE_API_KEY = process.env.ALPHA_VINTAGE_API_KEY;

tickers.forEach(ticker => {

    const url = `https://www.alphavantage.co/query?function=EARNINGS&symbol=${ticker}&apikey=${ALPHA_VINTAGE_API_KEY}`;
    // const url = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${ticker}&apikey=${ALPHA_VINTAGE_API_KEY}`;
    // const url = `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${ticker}&apikey=${ALPHA_VINTAGE_API_KEY}`;
    console.log(url)
    const headers = new Headers({'User-Agent': 'request', 'json': 'true'})
    fetch(url, {headers})
        .then(body => body.json())
        .then((data) => {
            fileSystem.writeFile(`${ticker}_income.json`, JSON.stringify(data), {flag: 'a+'}, err => {
            })
        })
        .catch(error => {
            console.error({error})
        })

})
