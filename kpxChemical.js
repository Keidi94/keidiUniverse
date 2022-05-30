const Year = 2014;
const month = 3;

const operatingProfit = {
  "2014-03": 118,
  "2014-06": 87,
  "2014-09": 108,
  "2014-12": 146,
};

const chart_labels = Object.keys(operatingProfit);
const chart_data = Object.values(operatingProfit);

// 아래는 차트를 표현하기 위한 코드입니다.//
new Chart(document.getElementById("Chart_OperatingProfit"), {
  type: "line",
  data: {
    labels: chart_labels,
    datasets: [
      {
        data: chart_data,
        label: "OperatingProfit",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "KPX케미칼",
    },
  },
});
