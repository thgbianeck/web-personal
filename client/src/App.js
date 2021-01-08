import React from "react";
import "./App.scss";
import { DatePicker } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function App() {
  return (
    <div className="app">
      <h1>Web Personal Cliente</h1>
      <div>
        <DatePicker onChange={onChange} />
        <br />
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <WeekPicker onChange={onChange} placeholder="Select week" />
      </div>
    </div>
  );
}

export default App;
