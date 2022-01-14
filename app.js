const axios = require('axios').default;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('API server');
});

app.get('/stocks', async (request, response) => {
  let searchText = request.query.searchText;

  const options = {
    method: 'GET',
    url: 'https://yfapi.net/v6/finance/quote/marketSummary',
    params: { modules: 'defaultKeyStatistics,assetProfile' },
    headers: {
      'x-api-key': 'CqQxYjeITx7oDG6fxepN44Cu5n4c15hS7EFnmgwm',
    },
  };
  let allData = [];
  let filterData = [];
  await axios
    .request(options)
    .then((data) => {
      allData = [...data.data.marketSummaryResponse.result];
    })
    .catch((error) => {
      response.status(500).send(error);
    });
  if (searchText) {
    searchText = searchText.toString().toLowerCase();
    for (let i = 0; i < allData.length; i++) {
      if (await allData[i]['exchange'].toLowerCase().includes(searchText)) {
        filterData.push(allData[i]);
      } else if (
        await allData[i]['regularMarketChange']['fmt'].includes(searchText)
      ) {
        filterData.push(allData[i]);
      } else if (
        await allData[i]['regularMarketChangePercent']['fmt'].includes(
          searchText
        )
      ) {
        filterData.push(allData[i]);
      } else if (
        await allData[i]['regularMarketPrice']['fmt'].includes(searchText)
      ) {
        filterData.push(allData[i]);
      } else if (await allData[i]['shortName']) {
        if (await allData[i]['shortName'].toLowerCase().includes(searchText)) {
          filterData.push(allData[i]);
        }
      }
    }

    if (filterData.length === 0) {
      response.status(404).send('No Match Found');
      return;
    } else {
      response.status(200).json(filterData);
      return;
    }
  } else {
    response.send(allData);
    return;
  }
});
module.exports = app;
