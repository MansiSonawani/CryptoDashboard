import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
  const Currencies = [
    "BTC",
    "ETH",
    "DASH",
    "CTR",
    "INR",
    "CVC",
    "DOGE",
    "OPT",
    "PBL",
    "SHIB",
  ];
  return (
    <div className="Converter">
      <div className="datacell">
        <table>
          <body>
            <tr>
              <td>Primary currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  placeholder="Amount"
                  value={""}
                />
              </td>
              <td>
                <select
                  name="currency-option-1"
                  className="currency-selector1"
                  value={""}
                >
                  {Currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>))}
                </select>
              </td>
            </tr>
          </body>
        </table>
        <table>
          <body>
            <tr>
              <td>Secondary currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  placeholder="Amount"
                  value={""}
                />
              </td>
              <td>
                <select
                  name="currency-option-2"
                  className="currency-selector2"
                  value={""}
                >
                   {Currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>))}
                </select>
              </td>
            </tr>
          </body>
        </table>
      </div>
      <ExchangeRate />
    </div>
  );
}

export default CurrencyConverter;
