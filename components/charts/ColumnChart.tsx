"use client";

// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";
import React from "react";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart = () => {
  const chartTheme = useChartTheme();

  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: "Good",
        data: [14, 12, 16],
      },
      {
        name: "Moderate",
        data: [14, 12, 16],
      },
      {
        name: "Unhealthy Sensitive",
        data: [14, 12, 16],
      },
      {
        name: "Unhealthy",
        data: [14, 12, 12],
      },
      {
        name: "Very Unhealthy",
        data: [14, 12, 11],
      },
      {
        name: "Hazardous",
        data: [14, 12, 10],
      },
    ],
    options: {
      theme: chartTheme,
      chart: {
        type: "bar",
        background: "inherit",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
          endingShape: "rounded",
        },
      },
      legend: {
        position: "bottom",
        offsetX: 0,
      },
      colors: ["#17C964", "#F5A524", "#006FEE", "#F31260"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return `$ ${val} thousands`;
          },
        },
      },

      grid: {
        show: false,
      },
    } as any,
  });

  return (
    <div
      id="chart"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        height: "100%",
        maxWidth: 880,
        maxHeight: 880,
      }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
      />
    </div>
  );
};

export default ColumnChart;
