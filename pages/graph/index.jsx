import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Header from 'components/header/Header';
import { navigationElements } from 'constants/navigation.const';
import { useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts';
import { URLSearchParams } from 'url';

const quoteOptions = [
  { label: 'Apple', quote: 'AAPL' },
  { label: 'Walgreen Boots Alliance', quote: 'WBA' },
];

const periodOptions = [
  { value: '5y', label: '5 years' },
  { value: '2y', label: '2 years' },
  { value: '1y', label: '1 year' },
  { value: 'ytd', label: 'Year to date' },
];

export default function GraphPage() {
  const [data, setData] = useState(null);
  const [quote, setQuote] = useState('');
  const [period, setPeriod] = useState('ytd');

  const fetchDividend = () => {
    const query = Object.entries({ period, quote }).map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ).join('&');

    fetch(`/api/dividend?${query}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r.data);
        setData(r.data);
      });
  };

  const onQuoteChange = (event, option) => {
    setQuote(option?.quote);
  };

  const onPeriodChange = (event) => {
    setPeriod(event?.target?.value);
  };

  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>
        <section style={{ display: 'flex' }}>
          <Autocomplete
            disablePortal
            id="quoteOptions"
            options={quoteOptions}
            sx={{ width: 300 }}
            onChange={(e, option) => onQuoteChange(e, option)}
            clearOnEscape
            renderInput={(props) => (
              <TextField {...props} label="Select quote" />
            )}
          />

          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="search-period-length-label">Period</InputLabel>
            <Select
              labelId="search-period-length-label"
              id="search-period-length"
              label="Period"
              value={period}
              onChange={(event) => onPeriodChange(event)}
            >
              {periodOptions.map((periodOption) => (
                <MenuItem key={periodOption.value} value={periodOption.value}>
                  {periodOption.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={fetchDividend}>Fetch</Button>
        </section>

        {data ? (
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="paymentDate" />
            <YAxis />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        ) : null}
      </main>
    </>
  );
}
