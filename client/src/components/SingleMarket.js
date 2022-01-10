export default function SingleMarket(props) {
  return (
    <div>
      <div className="market-details">
        <span>Exchange </span>
        <span>{props.exchange}</span>
      </div>
      <div className="market-details">
        <span>Short Name </span>
        <span>{props.shortName}</span>
      </div>
      <div className="market-details">
        <span>Regular Market Price </span>
        <span>{props.regularMarketPriceFMT}</span>
      </div>
      <div className="market-details">
        <span>regular Market Change </span>
        <span>{props.regularMarketChangeFMT}</span>
      </div>
      <div className="market-details">
        <span>Regular Market Change Percent </span>
        <span>({props.regularMarketChangePercentFMT})</span>
      </div>
      <br />
    </div>
  );
}
