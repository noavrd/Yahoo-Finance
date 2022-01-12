import { useEffect, useState } from 'react';

export default function SingleMarket(props) {
  const [showMore, setShowMore] = useState(false);
  const [plus, setPlus] = useState(true);
  const handle = () => {
    setShowMore(true);
  };

  useEffect(() => {
    if (props.regularMarketChangeFMT[0] === '-') {
      setPlus(false);
    }
  }, []);

  return (
    <div className="single-market">
      <div className="market-details">{props.shortName}</div>
      <div className="market-details">
        <span>Exchange </span>
        <span>{props.exchange}</span>
      </div>
      <div className="market-details">{props.regularMarketPriceFMT}</div>
      <div className={plus ? 'plus market-details' : 'minus market-details'}>
        <span>
          {plus && '+'}
          {props.regularMarketChangeFMT}{' '}
        </span>
        <span>
          ({plus && '+'}
          {props.regularMarketChangePercentFMT})
        </span>
      </div>
      <button className="show-more" onClick={() => handle()}>
        Show More
      </button>
      {showMore && popup(props, setShowMore)}
      <br />
    </div>
  );
}

function popup(props, setShowMore) {
  return (
    <div className="popup-container">
      <button onClick={() => setShowMore(false)} className="close-popup-btn">
        X
      </button>
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
        <span>regularMarketChangeFMT </span>
        <span>{props.regularMarketChangeFMT}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketChangeRAW </span>
        <span>{props.regularMarketChangeRAW}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketChangePercentFMT </span>
        <span>{props.regularMarketChangePercentFMT}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketChangePercentRAW </span>
        <span>{props.regularMarketChangePercentRAW}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketPreviousCloseFMT </span>
        <span>{props.regularMarketPreviousCloseFMT}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketPreviousCloseRAW </span>
        <span>{props.regularMarketPreviousCloseRAW}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketPriceFMT </span>
        <span>{props.regularMarketPriceFMT}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketPriceRAW </span>
        <span>{props.regularMarketPriceRAW}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketTimeFMT </span>
        <span>{props.regularMarketTimeFMT}</span>
      </div>
      <div className="popup-content">
        <span>regularMarketTimeRAW </span>
        <span>{props.regularMarketTimeRAW}</span>
      </div>
      <div className="popup-content">
        <span>shortName </span>
        <span>{props.shortName}</span>
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
  );
}
