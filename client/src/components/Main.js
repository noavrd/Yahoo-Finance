import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleMarket from './SingleMarket';

export default function Main() {
  const [data, setData] = useState();
  const [clicked, setClicked] = useState(null);
  useEffect(() => {
    axios
      .get('https://yfapi.net/v6/finance/quote/marketSummary', {
        params: { modules: 'defaultKeyStatistics,assetProfile' },
        headers: {
          'x-api-key': 'UMLv55pR4y3qtq4FIVivA1saV2j1f2vT1rsSWj55',
        },
      })
      .then((result) => setData(result.data.marketSummaryResponse.result))
      .catch((err) => console.log(err));
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
  console.log(data);
  return (
    <div className="main">
      <h1 className="headline">Stock Market</h1>
      <div className="all-market">
        {console.log(data)}
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
                  exchangeDataDelayedBy={single.exchangeDataDelayedBy}
                  exchangeTimezoneName={single.exchangeTimezoneName}
                  exchangeTimezoneShortName={single.exchangeTimezoneShortName}
                  firstTradeDateMilliseconds={single.firstTradeDateMilliseconds}
                  fullExchangeName={single.fullExchangeName}
                  gmtOffSetMilliseconds={single.gmtOffSetMilliseconds}
                  language={single.language}
                  market={single.market}
                  marketState={single.marketState}
                  priceHint={single.priceHint}
                  quoteSourceName={single.quoteSourceName}
                  quoteType={single.quoteType}
                  region={single.region}
                  regularMarketChangeFMT={single.regularMarketChange.fmt}
                  regularMarketChangeRAW={single.regularMarketChange.raw}
                  regularMarketChangePercentFMT={
                    single.regularMarketChangePercent.fmt
                  }
                  regularMarketChangePercentRAW={
                    single.regularMarketChangePercent.raw
                  }
                  regularMarketPreviousCloseFMT={
                    single.regularMarketPreviousClose.fmt
                  }
                  regularMarketPreviousCloseRAW={
                    single.regularMarketPreviousClose.raw
                  }
                  regularMarketPriceFMT={single.regularMarketPrice.fmt}
                  regularMarketPriceRAW={single.regularMarketPrice.raw}
                  regularMarketTimeFMT={single.regularMarketTime.fmt}
                  regularMarketTimeRAW={single.regularMarketTime.raw}
                  shortName={single.shortName}
                  sourceInterval={single.sourceInterval}
                  symbol={single.symbol}
                  tradeable={single.tradeable}
                  triggerable={single.triggerable}
                />
              ))}
          </Carousel>
        )}
      </div>
      {console.log(clicked)}
      {clicked !== null && popup(data[clicked], setClicked)}
    </div>
  );
}

function popup(props, setClicked) {
  return (
    <div className="popup-container">
      {console.log(props)}
      <button onClick={() => setClicked(null)} className="close-popup-btn">
        X
      </button>
      <h1 className="popup-headline">{props.shortName}</h1>
      <div className="details">
        <div className="popup-content">
          <span>Exchange </span>
          <span>{props.exchange}</span>
        </div>
        <div className="popup-content">
          <span>exchangeDataDelayedBy </span>
          <span>{props.exchangeDataDelayedBy}</span>
        </div>
        <div className="popup-content">
          <span>exchangeTimezoneName </span>
          <span>{props.exchangeTimezoneName}</span>
        </div>
        <div className="popup-content">
          <span>exchangeTimezoneShortName </span>
          <span>{props.exchangeTimezoneShortName}</span>
        </div>
        <div className="popup-content">
          <span>firstTradeDateMilliseconds </span>
          <span>{props.firstTradeDateMilliseconds}</span>
        </div>
        <div className="popup-content">
          <span>fullExchangeName </span>
          <span>{props.fullExchangeName}</span>
        </div>
        <div className="popup-content">
          <span>gmtOffSetMilliseconds </span>
          <span>{props.gmtOffSetMilliseconds}</span>
        </div>
        <div className="popup-content">
          <span>language </span>
          <span>{props.language}</span>
        </div>
        <div className="popup-content">
          <span>market </span>
          <span>{props.market}</span>
        </div>
        <div className="popup-content">
          <span>marketState </span>
          <span>{props.marketState}</span>
        </div>
        <div className="popup-content">
          <span>priceHint </span>
          <span>{props.priceHint}</span>
        </div>
        <div className="popup-content">
          <span>quoteSourceName </span>
          <span>{props.quoteSourceName}</span>
        </div>
        <div className="popup-content">
          <span>quoteType </span>
          <span>{props.quoteType}</span>
        </div>
        <div className="popup-content">
          <span>region </span>
          <span>{props.region}</span>
        </div>
        <div className="popup-content">
          <span>Regular Market Change </span>
          <span>{props.regularMarketChange.fmt} / </span>
          <span>{props.regularMarketChange.raw}</span>
        </div>

        <div className="popup-content">
          <span>Regular Market Change Percent </span>
          <span>{props.regularMarketChangePercent.fmt} / </span>
          <span>{props.regularMarketChangePercent.raw}</span>
        </div>

        <div className="popup-content">
          <span>Regular Market Previous Close </span>
          <span>{props.regularMarketPreviousClose.fmt} / </span>
          <span>{props.regularMarketPreviousClose.raw}</span>
        </div>

        <div className="popup-content">
          <span>Regular Market Price </span>
          <span>{props.regularMarketPrice.fmt} / </span>
          <span>{props.regularMarketPrice.raw}</span>
        </div>

        <div className="popup-content">
          <span>Regular Market Time </span>
          <span>{props.regularMarketTime.fmt} / </span>
          <span>{props.regularMarketTime.raw}</span>
        </div>

        <div className="popup-content">
          <span>sourceInterval </span>
          <span>{props.sourceInterval}</span>
        </div>
        <div className="popup-content">
          <span>symbol </span>
          <span>{props.symbol}</span>
        </div>
        <div className="popup-content">
          <span>tradeable </span>
          <span>{props.tradeable}</span>
        </div>
        <div className="popup-content">
          <span>triggerable </span>
          <span>{props.triggerable}</span>
        </div>
      </div>
    </div>
  );
}
