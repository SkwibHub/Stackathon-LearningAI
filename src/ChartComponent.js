const ChartComponent = evaluationHistory => {
  const makeLabels = length => {
    let labelArray = [];
    for (let i = 0; i < evaluationHistory.length; i++) {
      labelArray.push('');
    }
    return labelArray;
  };

  const data = {
    labels: makeLabels(evaluationHistory.length),
    datasets: [
      {
        label: 'WIN HISTORY',
        backgroundColor: 'rgb(0, 0, 255)',
        borderColor: 'rgb(0, 0, 255)',
        borderWidth: 1,
        data: evaluationHistory
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            callback: function(label, index, labels) {
              return label;
            }
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            callback: function(label, index, labels) {
              return label;
            },
            fontSize: 18,
            fontColor: 'black'
          },
          display: true
        }
      ]
    }
  };
  return [data, options];
};

export default ChartComponent;
