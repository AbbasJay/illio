import React, { useState } from "react";

import ShowGraph from "./components/graph";
import Header from "./components/header";

import { DailyStockData, ChartData } from "./types";

import "./App.css";

// const BASE_URL =
//   "https://eodhistoricaldata.com/api/eod/MCD.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&period=d";

const App = () => {
  const [chartData, setChartData] = useState<Array<ChartData>>([]);
  const [ticker] = useState<string>("MCD");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  const getChartData = async () => {
    // const fetchStockData = async () => {
    //   try {
    //     const responseData = await fetch(
    //       `${BASE_URL}&from=${dateFrom}&to=${dateTo}&fmt=json`
    //     );
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // const response = await fetchStockData()

    const response: DailyStockData[] = [
      {
        date: "2020-01-02",
        open: 198,
        high: 200.8,
        low: 197.81,
        close: 200.79,
        adjusted_close: 194.7044,
        volume: 3554837,
      },
      {
        date: "2020-01-03",
        open: 199.39,
        high: 200.55,
        low: 198.85,
        close: 200.08,
        adjusted_close: 194.0161,
        volume: 2767663,
      },
      {
        date: "2020-01-06",
        open: 199.6,
        high: 202.7673,
        low: 199.35,
        close: 202.33,
        adjusted_close: 196.1977,
        volume: 4660792,
      },
      {
        date: "2020-01-07",
        open: 201.87,
        high: 202.68,
        low: 200.51,
        close: 202.63,
        adjusted_close: 196.4887,
        volume: 4054726,
      },
      {
        date: "2020-01-08",
        open: 202.62,
        high: 206.69,
        low: 202.2,
        close: 205.91,
        adjusted_close: 199.6693,
        volume: 5286482,
      },
      {
        date: "2020-01-09",
        open: 206.86,
        high: 209.3748,
        low: 206.1,
        close: 208.35,
        adjusted_close: 202.0353,
        volume: 5974942,
      },
      {
        date: "2020-01-10",
        open: 208.44,
        high: 208.95,
        low: 207.2688,
        close: 207.27,
        adjusted_close: 200.9881,
        volume: 2336721,
      },
      {
        date: "2020-01-13",
        open: 207.38,
        high: 207.78,
        low: 205.76,
        close: 206.51,
        adjusted_close: 200.251,
        volume: 2784618,
      },
    ];

    if (response.length) {
      let chartData: ChartData[] = [["date", "close"]];

      response.forEach((chartItem) => {
        chartData.push([chartItem.date, chartItem.close]);
      });
      setChartData(chartData);
    }
  };

  return (
    <div className="App">
      <Header
        ticker={ticker}
        dateFrom={dateFrom}
        dateTo={dateTo}
        setDateFrom={(value: string) => setDateFrom(value)}
        setDateTo={(value: string) => setDateTo(value)}
      ></Header>

      <button className={"search-button"} onClick={getChartData}>
        Search
      </button>

      <ShowGraph chartData={chartData} />
    </div>
  );
};

export default App;
