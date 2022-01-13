import { useEffect, useState } from 'react';

export default function SingleMarket(props) {
  // const [showMore, setShowMore] = useState(false);
  const [plus, setPlus] = useState(true);
  const handle = () => {
    props.setClicked(props.index);
    console.log(props.index);
  };

  useEffect(() => {
    if (props.regularMarketChangeFMT[0] === '-') {
      setPlus(false);
    }
  }, []);

  return (
    <div className="single-market">
      <div className="market-details market-name">{props.shortName}</div>
      <div className="market-details">
        <span>Exchange: </span>
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
      <br />
    </div>
  );
}
