const Year = 2014;
const month = 3;

const operatingProfit = {
  "2014-03": 118,
  "2014-06": 87,
  "2014-09": 108,
  "2014-12": 146,
};
// 아래는 차트를 표현하기 위한 코드입니다.//
new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: ["2014-03", "2014-06", "2014-09", "2014-12"],
    datasets: [
      {
        data: [118, 87, 108, 146],
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
