import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Logout from './Logout';
import SingleMarket from './SingleMarket';

export default function Main() {
  const [data, setData] = useState();
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
      // slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1, // optional, default to 1.
    },
  };
  console.log(data);
  return (
    <div>
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
    </div>
  );
}
