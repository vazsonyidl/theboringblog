//https://site.financialmodelingprep.com/developer/docs/

// https://financialmodelingprep.com/api/v3/key-metrics-ttm/MMM?limit=40&apikey=YOUR_API_KEY

const fileSystem = require('fs');
require('dotenv').config();

const FINANCIAL_MODELING_PREP_API_KEY = process.env.FINANCIAL_MODELING_PREP_API_KEY;


const IBKR_TICKERS = ['MMM', 'BEN', 'BAC', 'C', 'WBA', 'LEG', 'PG'];
const T212_TICKERS = ['NEP', 'DUK', 'EBTC', 'MPW', 'UVV', 'ABM', 'ADM', 'NLY', 'STWD', 'PSA', 'JNJ', 'BK', 'ARCC', 'HRZN', 'IRM', 'AFL'];

const METRICS = {
    DEBT_TO_EQUITY: 'debtToEquityTTM',
    PAYOUT_RATIO: 'payoutRatioTTM',
    COVERAGE: 'interestCoverageTTM',
    PRICE_TO_SALES_RATIO: 'priceToSalesRatioTTM',
    PRICE_TO_BOOK_RATIO: 'pbRatioTTM',
    RETURN_ON_EQUITY: 'roeTTM',
    RETURN_ON_INVESTED_CAPITAL: 'roicTTM',
    DEBT_TO_ASSETS: 'debtToAssetsTTM',
    PRICE_TO_EARNINGS_RATIO: 'peRatioTTM',
}

const convertJSONToCSV = (data) => {
    return Object.keys(data).map(key => `${key},${data[key]}`).join('\n');
}
T212_TICKERS.forEach(ticker => {

    const url = `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${ticker}?limit=40&apikey=${FINANCIAL_MODELING_PREP_API_KEY}`;
    console.log(url)
    const headers = new Headers({'User-Agent': 'request', 'json': 'true'})

    fetch(url, {headers})
        .then(body => body.json())
        .then((data) => {
            const filteredData = data.map(ttmData => {
                return Object.values(METRICS).reduce((accumulator, key) => {
                    accumulator[key] = ttmData[key];
                    return accumulator;
                }, {})
            });

            const csvData = convertJSONToCSV(filteredData[0]);

            fileSystem.writeFile(`${ticker}.csv`, csvData, {flag: 'a+'}, err => {
            })
        })
        .catch(error => {
            console.error({error})
        })

})