import { useTheme } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const DoughnutChart = ({ height, color = [] }) => {
  const theme = useTheme();

  const option = {
    legend: {
      show: true,
      itemGap: 30,
      icon: "square",
      bottom: 0,
      textStyle: {
        fontSize: 13,
        color: 'white',
        fontFamily: 'Poppins-Regular',
      },
    },
    tooltip: { show: false, trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
    xAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],
    yAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],

    label: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontFamily: 'Poppins-Regular',
    },

    series: [
      {
        name: "Traffic Rate",
        type: "pie",
        radius: ["45%", "72.55%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          show: false,
          position: "center",
        },

        data: [
          { value: 25, name: "BTC" },
          { value: 15, name: "ETH" },
          { value: 5, name: "VHA Token" },
          { value: 55, name: "Others" },
        ],

        emphasis: {
          itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)" },
          label: {
            show: true,
            formatter: "{b} \n{c} ({d}%)",
            fontFamily: 'Poppins-Regular',
            color: 'white',
            fontSize: 14,
          },
        },
      },
    ],
  };

  return <ReactEcharts 
            style={{ height: height }}
            option={{ ...option, color: [...color] }} />;
};

export default DoughnutChart;
