import { useState } from "react";
import exchangeRate from "./ExchangeRate";
import axios from "axios";

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

  const [chosenCurrency1, setChosenCurrency1] = useState("INR");

  const [chosenCurrency2, setChosenCurrency2] = useState("BTC");

  const [amount, setAmount] = useState(1);

  const [exchangerate, setExchangeRate] = useState(0)

  const [result, setResult] = useState(0)

  

  const convert = async () => {
    

      const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          from_currency: chosenCurrency1,
          function: 'CURRENCY_EXCHANGE_RATE',
          to_currency: chosenCurrency2
        },
        headers: {
          'X-RapidAPI-Key': '4ca78aa6d4mshb107fc4a6741de5p14414cjsnb496ba7048a9',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      }
    
       axios.request(options).then((response) => {
        console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']*amount)
       }).catch((error) => {console.error(error)});


       console.log(exchangerate)
      
        
      };
 


  return (
    <div className="Converter">
      <div className="datacell">
        <table>
          <tbody>
            <tr>
              <td>Primary currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={chosenCurrency1}
                  name="currency-option-1"
                  className="currency-selector1"
                  onChange={(e) => setChosenCurrency1(e.target.value)}
                >
                  {Currencies.map((currency, _index) => (
                    <option key={_index} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Secondary currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  placeholder="Amount"
                  value={result}
                  disabled ={true} 
                />
              </td>
              <td>
                <select
                  name="currency-option-2"
                  className="currency-selector2"
                  value={chosenCurrency2}
                  onChange={(e) => setChosenCurrency2(e.target.value)}
                >
                  {Currencies.map((currency, _index) => (
                    <option key={_index} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="currency-convert" onClick={convert}>
          Convert
        </button>
      </div>
      <exchangeRate />
     
    </div>
  );
}

export default CurrencyConverter;