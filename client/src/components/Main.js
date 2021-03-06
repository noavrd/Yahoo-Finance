import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleMarket from './SingleMarket';
import '../styles/loader.css';
import '../styles/popup.css';

export default function Main() {
  const [data, setData] = useState();
  const [clicked, setClicked] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [loaderData, setLoaderData] = useState(false);

  // const [search, setSearch] = useState('');

  useEffect(async () => {
    setError('');
    await axios
      .get('http://localhost:3001/stocks')
      .then((result) => {
        setData(result.data);
        setLoader(false);
      })
      .catch((err) => setError(err));
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  async function search(value) {
    setLoaderData(true);

    setError('');
    setData([]);
    console.log(value);
    await axios
      .get(`http://localhost:3001/stocks?searchText=${value}`)
      .then((response) => {
        setData(response.data);
        setError('');
        setLoaderData(false);
      })
      .catch((err) => {
        setError('No Match Found');
        console.log(err);
        setLoaderData(false);
      });
  }
  if (loader) {
    return (
      <div className="main">
        <h1 className="headline">Stock Market</h1>
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <h1 className="headline">Stock Market</h1>
        <div className="search">
          <input
            className="filter"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="search..."
          />
          <button
            className="filter-btn"
            id="search-btn"
            onClick={() => search(searchValue)}>
            Search
          </button>
          <button
            className="filter-btn"
            id="all-data-btn"
            onClick={() => search('')}>
            Show All
          </button>
        </div>
        <div className="all-markets">
          {loaderData && <div className="loader"></div>}
          {error !== '' && <div className="no-match">{error}</div>}
          {data && (
            <Carousel
              responsive={responsive}
              infinite={true}
              keyBoardControl={true}>
              {data &&
                data.map((single, i) => (
                  <SingleMarket
                    index={i}
                    setClicked={setClicked}
                    key={i}
                    exchange={single.exchange}
                    regularMarketChangeFMT={single.regularMarketChange.fmt}
                    regularMarketChangePercentFMT={
                      single.regularMarketChangePercent.fmt
                    }
                    regularMarketPriceFMT={single.regularMarketPrice.fmt}
                    shortName={single.shortName}
                  />
                ))}
            </Carousel>
          )}
        </div>
        {clicked !== null && popup(data[clicked], setClicked)}
      </div>
    );
  }
}

function popup(props, setClicked) {
  const change = (elem) => {
    if (elem[0] === '-') {
      return 'minus';
    }
    return 'plus';
  };
  return (
    <div className="popup-container">
      <button onClick={() => setClicked(null)} className="close-popup-btn">
        X
      </button>
      <div>
        <span className="popup-headline">{props.shortName}</span>
        <span>({props.symbol})</span>
      </div>
      <div className="details">
        <div className="popup-content second-headline">
          {/* <span>Exchange </span> */}
          <span>{props.fullExchangeName} - </span>
          <span>Region </span>
          <span>{props.region} </span>
          <span> - Time zone: </span>
          <span>{props.exchangeTimezoneName} - </span>
          <span> {props.exchangeTimezoneShortName}</span>
          {/* <span>{props.exchange}</span> */}
        </div>

        <div className="popup-content">
          <div>
            <span>Price </span>
            <span>{props.regularMarketPrice.fmt} </span>
            <span>({props.regularMarketPrice.raw})</span>
          </div>
          <div>
            <span>Previous Close </span>
            <span>{props.regularMarketPreviousClose.fmt} / </span>
            <span>{props.regularMarketPreviousClose.raw}</span>
          </div>
        </div>

        <div className="popup-content">
          <div>
            <span>Change </span>
            <span className={change(props.regularMarketChange.fmt)}>
              {props.regularMarketChange.fmt}{' '}
            </span>
            <span>/ </span>
            <span className={change(props.regularMarketChange.fmt)}>
              {props.regularMarketChange.raw}
            </span>
          </div>
          <div>
            <span>Change Percent </span>
            <span className={change(props.regularMarketChangePercent.fmt)}>
              {props.regularMarketChangePercent.fmt}{' '}
            </span>
            <span>/ </span>
            <span className={change(props.regularMarketChangePercent.fmt)}>
              {props.regularMarketChangePercent.raw}
            </span>
          </div>
        </div>
        <div className="popup-content">
          <div>
            <span>Market: </span>
            <span>{props.market} - </span>
            <span>language: </span>
            <span>{props.language}</span>
          </div>
          <div>
            <span>Market Time </span>
            <span>{props.regularMarketTime.fmt} / </span>
            <span>{props.regularMarketTime.raw}</span>
          </div>
        </div>

        <div className="popup-content">
          <div>
            <span>Quote Type: </span>
            <span>{props.quoteType}</span>
          </div>
          <div>
            <span>Source Interval: </span>
            <span>{props.sourceInterval}</span>
          </div>
          <div>
            <span>State: </span>
            <span>{props.marketState}</span>
          </div>
          <div>
            <span>Exchange Data Delayed By: </span>
            <span>{props.exchangeDataDelayedBy}</span>
          </div>
          <div>
            <span>First Trade Date Milliseconds: </span>
            <span>{props.firstTradeDateMilliseconds}</span>
          </div>
          <div>
            <span>GMT Off Set Milliseconds: </span>
            <span>{props.gmtOffSetMilliseconds}</span>
          </div>
        </div>

        <div className="popup-content">
          <span>headSymbol </span>
          <i
            className={`symbols fa fa-${
              props.headSymbol === false ? 'times minus' : 'check plus'
            }`}
            aria-hidden="true"></i>
          <span>Tradeable </span>
          <i
            className={`symbols fa fa-${
              props.tradeable === false ? 'times minus' : 'check plus'
            }`}></i>
          <span>Triggerable </span>

          <i
            className={`symbols fa fa-${
              props.triggerable === false ? 'times minus' : 'check plus'
            }`}></i>
          <span>contractSymbol </span>

          <i
            className={`symbols fa fa-${
              props.contractSymbol === false ? 'times minus' : 'check plus'
            }`}></i>
        </div>
      </div>
    </div>
  );
}
