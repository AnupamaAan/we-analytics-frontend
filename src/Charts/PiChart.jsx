import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function ChartOne() {

    ChartJS.register(ArcElement, Tooltip, Legend);
     const data = {
      labels: ['Feb(0.15%)','March(10.06%)','May(19.12%)','June(1.51%)','July(3.45%)','Aug(3.98%)','Sep(4.50%)','Oct(6.02%)','Nov(39.83%)','Dec(11.32%)'],
      datasets: [
        {
          label: '%',
          // data: [3, 192, 365, 29, 66, 76,98,86,115,760,216],
          data:[0.15,10.06,19.12,1.51,3.45,3.98,4.50,6.02,39.83,11.32],
          backgroundColor: [
            '#7FB3D5',
            '#A3D6A6',
            '#FFD56B',
            '#FFAB89',
            '#FFE680',
            '#99C2FF',
            '#FF99B4',
            '#D98AFF',
            '#B3B3FF',
            '#7FB3D5'

          ],
          borderColor: [
            '#8c8c8c'
          ],
          Text:[
            'jan',
            'feb',
            'march',
            'april',
            'may',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
        maintainAspectRatio: false, // This property allows you to set your own aspect ratio.
        responsive: true,
      };

  return (
    <div className='donut' >
    <h2 className='first-graph'>Month vs Revenue</h2>
      <Doughnut className='chart-one'  options={options} data={data}/>
    </div>
  )
}

export default ChartOne



// import React, { useEffect } from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// function ChartOne() {
//   ChartJS.register(ArcElement, Tooltip, Legend);

//   const data = {
//     labels: ['Feb', 'March', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [0.15,10.06,19.12,1.51,3.45,3.98,4.50,6.02,39.83,11.32],
//         backgroundColor: [
//           '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#FF5733',
//         '#33FF57',
//         '#5733FF',
//         '#A2EB36',
//         '#CE56FF',
//         '#57FF33',
//         '#EB36A2'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // const options = {
//   //   maintainAspectRatio: false,
//   //   responsive: true,
//   //   plugins: {
//   //     legend: {
//   //       display: true,
//   //       position: 'right',
//   //     },
//   //     tooltip: {
//   //       enabled: false,
//   //     },
//   //   },
//   // };

// const options = {
//   tooltips: {
//     callbacks: {
//       label: (tooltipItem, data) => {
//         const dataset = data.datasets[tooltipItem.datasetIndex];
//         const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
//         const currentValue = dataset.data[tooltipItem.index];
//         const percentage = ((currentValue / total) * 100).toFixed(2);
//         return `${data.labels[tooltipItem.index]}: ${percentage}%`;
//       }
//     }
//   }
// };

//   // const options = {
//   //   maintainAspectRatio: false,
//   //   responsive: true,
//   //   plugins: {
//   //     legend: {
//   //       display: true,
//   //       position: 'right',
//   //     },
//   //     tooltip: {
//   //       callbacks: {
//   //         label: (context) => {
//   //           const label = context.label || '';
//   //           const value = context.parsed || 0;
//   //           const percentage = percentages[label];
//   //           return `${label}: ${value} (${percentage}%)`;
//   //         },
//   //       },
//   //     },
//   //     datalabels: {
//   //       display: true,
//   //       color: 'white',
//   //       font: {
//   //         weight: 'bold',
//   //       },
//   //       formatter: (value, context) => {
//   //         const label = context.chart.data.labels[context.dataIndex];
//   //         const percentage = percentages[label];
//   //         return `${value} (${percentage}%)`;
//   //       },
//   //     },
//   //   },
//   // };

//   return (
//     <div className='pi'>
//       <h2 className='first-graph'>Month vs Revenue</h2>
//       <div className='donut'>
//         <Doughnut options={options} data={data} />
//       </div>
//     </div>
//   );
// }

// export default ChartOne;

