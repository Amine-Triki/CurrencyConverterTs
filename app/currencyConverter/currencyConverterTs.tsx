import { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter: React.FC = () => {
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(0);
  const [currency1, setCurrency1] = useState<string>("TND");
  const [currency2, setCurrency2] = useState<string>("EUR");
  const [rates, setRates] = useState<Record<string, number>>({});

  const API_KEY: string | undefined = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency1}`
        );
        setRates(response.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
  }, [currency1, API_KEY]);

  useEffect(() => {
    if (rates[currency2]) {
      setAmount2(parseFloat((amount1 * rates[currency2]).toFixed(2)));
    }
  }, [amount1, currency2, rates]);

  const handleAmount1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount1(value);
    if (rates[currency2]) {
      setAmount2(parseFloat((value * rates[currency2]).toFixed(2)));
    }
  };

  const handleAmount2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount2(value);
    if (rates[currency2]) {
      setAmount1(parseFloat((value / rates[currency2]).toFixed(2)));
    }
  };

  return (
    <main className="flex justify-center items-center">
      <div className="converter">
        <h2>Currency Converter</h2>
        <div className="input-group border-2">
          <input type="number" value={amount1} onChange={handleAmount1Change} />
          <select value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group border-2">
          <input type="number" value={amount2} onChange={handleAmount2Change} />
          <select value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </main>
  );
};

export default CurrencyConverter;