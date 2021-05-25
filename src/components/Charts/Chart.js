import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const amountArray= props.datapoints.map(datapoint => datapoint.value);
    const maxValue= Math.max(...amountArray);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
