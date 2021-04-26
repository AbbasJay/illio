import React from "react";

import "./styles.css";

interface IProps {
  ticker: string;
  dateFrom: string;
  dateTo: string;
  setDateFrom: (value: string) => void;
  setDateTo: (value: string) => void;
}

const Header = ({
  ticker,
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
}: IProps) => {
  return (
    <div className={"header"}>
      <div className={"header__ticker"}>
        <span>{"Ticker"}</span>
        <input value={ticker} readOnly />
      </div>

      <div className={"header__from"}>
        <span>{"From"}</span>
        <input
          className={"date-from-input"}
          type="date"
          onChange={(e) => setDateFrom(e.target.value)}
          value={dateFrom}
        />
      </div>

      <div className={"header__to"}>
        <span>{"To"}</span>
        <input
          className={"date-to-input"}
          type="date"
          onChange={(e) => setDateTo(e.target.value)}
          value={dateTo}
        />
      </div>
    </div>
  );
};

export default Header;
