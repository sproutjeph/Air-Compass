"use client";

import { formatNumberWithCommas } from "@/lib/utils";
// import ReactApexChart from "react-apexcharts";
import { FC, useState } from "react";
import useChartTheme from "./ChartTheme";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DonutChartProps {}

const DonutChart: FC<DonutChartProps> = ({}) => {
  const chartTheme = useChartTheme();

  const [chartData, setChartData] = useState({
    series: [7, 5, 4, 4, 2, 3],
    options: {
      theme: chartTheme,
      chart: {
        type: "donut",
        width: "550px",
        height: "550px",
        background: "inherit",
      },

      colors: [
        "#17C964",
        "#F5A524",
        "#F31260",
        "#006FEE",
        "#F31260",
        "#920B3A",
      ],
      labels: [
        "Good 0-50",
        "Moderate 51-100",
        "Unhealthy Sensitive 101-150",
        "Unhealthy 151-200",
        "Very Unhealthy 200-300",
        "Hazardous 300+",
      ],
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: {
              show: false,
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      legend: {
        position: "right",
        offsetY: 5,
        labels: {
          colors: ["inherit", "inherit", "inherit", "inherit"],
          useSeriesColors: false,
        },
      },
    } as any,
  });

  const totalValue = formatNumberWithCommas(
    chartData.series.reduce((total, current) => total + current, 0)
  );

  return (
    <div
      id="chart"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        maxHeight: "480px",
        maxWidth: "480px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%,-50%)",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <p>{totalValue}</p>
      </div>
    </div>
  );
};

export default DonutChart;
