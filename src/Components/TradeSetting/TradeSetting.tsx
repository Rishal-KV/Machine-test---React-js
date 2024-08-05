import './TradeSettings.css';

const TradeSettings = () => {
  return (
    <div className="trade-settings">
      <div className="trade-settings-header">
        <h2>Minimum Trade Size</h2>
        <div className="toggle-container">
        <span className="toggle-label">customize</span> 
          <label className="switch">
            <input type="checkbox" disabled />
            <span className="slider round"></span>
          </label>
          
        </div>
      </div>
      <p className="trade-settings-description">
        Set the minimum trade size that will be executed in your brokerage account. If the parameter is set to "0.50", our trading server will place trades with a minimum size of 0.50 lot or 50,000 units of base currency. Default recommended value is "0.01".
      </p>
      <div className="trade-settings-controls">
        <div className="control">
          <label>Lot min</label>
          <input type="number" />
        </div>
        <div className="control">
          <label>Lot Max</label>
          <input type="number" />
        </div>
        <div className="control">
          <label>Fixed Stoploss</label>
          <input type="number" />
        </div>
        <div className="control">
          <label>Fixed Take profit</label>
          <input type="number" />
        </div>
        <div className="control">
          <label>Force Exit & Stop</label>
          <input type="number" />
        </div>
        <div className="control">
          <label>Worst deviation</label>
          <input type="number" />
        </div>
      </div>
      <div className="trade-strategy-section">
        <h2 className="trade-strategy-header">Trade Strategies</h2>
        <div className="trade-strategy">
          <div className="strategy">
            <input type="radio" id="copy-trades" name="trade-strategy" />
            <label htmlFor="copy-trades">Copy opened trades and pending orders</label>
          </div>
          <div className="strategy">
            <input type="radio" id="limit-trades" name="trade-strategy" />
            <label htmlFor="limit-trades">Limit quantity of simultaneous trades</label>
          </div>
          <div className="strategy">
            <input type="radio" id="inversed-trading" name="trade-strategy" />
            <label htmlFor="inversed-trading">Inversed Trading</label>
          </div>
          <div className="strategy">
            <input type="radio" id="only-long" name="trade-strategy" />
            <label htmlFor="only-long">Only Long positions</label>
          </div>
          <div className="strategy">
            <input type="radio" id="allow-scalp" name="trade-strategy" />
            <label htmlFor="allow-scalp">Allow Scalp / Technical trade</label>
          </div>
          <div className="strategy">
            <input type="radio" id="allow-day-trade" name="trade-strategy" />
            <label htmlFor="allow-day-trade">Allow day trade/strategy</label>
          </div>
          <div className="strategy">
            <input type="radio" id="allow-swing" name="trade-strategy" />
            <label htmlFor="allow-swing">Allow swing strategy</label>
          </div>
          <div className="strategy">
            <input type="radio" id="allow-fundamental" name="trade-strategy" />
            <label htmlFor="allow-fundamental">Allow position/ Fundamental trade</label>
          </div>
          <div className="strategy">
            <input type="radio" id="only-short" name="trade-strategy" />
            <label htmlFor="only-short">Only Short positions</label>
          </div>
          <div className="strategy">
            <input type="radio" id="long-short" name="trade-strategy" />
            <label htmlFor="long-short">Long & Short positions</label>
          </div>
          <div className="strategy">
            <input type="radio" id="allow-martingale" name="trade-strategy" />
            <label htmlFor="allow-martingale">Allow Martingale</label>
          </div>
          <div className="strategy">
            <input type="radio" id="allow-holding" name="trade-strategy" />
            <label htmlFor="allow-holding">Allow Holding (Term Gain)</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeSettings;
