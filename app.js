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
  const searchText = request.query.searchText;
  const options = {
    method: 'GET',
    url: 'https://yfapi.net/v6/finance/quote/marketSummary',
    params: { modules: 'defaultKeyStatistics,assetProfile' },
    headers: {
      'x-api-key': 'QoWb8SxCay4gXIKJHUmbr1T6CCudvYmeaQujztBr',
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
    console.log(22222);

    for (let i = 0; i < allData.length; i++) {
      console.log(allData[i]['exchange'].toLowerCase());
      if (
        (await allData[i]['exchange'].toLowerCase().indexOf(searchText)) !== -1
      ) {
        filterData.push(allData[i]);
        console.log('enterrr');
      } else if (
        (await allData[i]['regularMarketChange']['fmt']
          .toLowerCase()
          .indexOf(searchText)) !== -1
      ) {
        filterData.push(allData[i]);
      } else if (
        (await allData[i]['regularMarketChangePercent']['fmt']
          .toLowerCase()
          .indexOf(searchText)) !== -1
      ) {
        filterData.push(allData[i]);
      } else if (
        (await allData[i]['regularMarketPrice']['fmt']
          .toLowerCase()
          .indexOf(searchText)) !== -1
      ) {
        filterData.push(allData[i]);
      } else if (
        (await allData[i]['shortName'].toLowerCase().indexOf(searchText)) !== -1
      ) {
        filterData.push(allData[i]);
      }
    }
    console.log(filterData);
    if (filterData.length === 0) {
      console.log(33333);

      await response.status(404).send('No Match Found');
      return;
    }

    await response.status(200).json(filterData);
  } else {
    console.log(111111111);
    await response.send(allData);
    return;
  }
});
module.exports = app;
