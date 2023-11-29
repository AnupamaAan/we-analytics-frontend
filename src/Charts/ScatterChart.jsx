// import React from 'react';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Scatter } from 'react-chartjs-2';
// import faker from 'faker';
// import chartvalues from './scaterChartValues';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// export const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };
// console.log(chartvalues.Revenue);
// export const data = {
//   datasets: [
//     {
//       label: 'true',
//       data: Array.from({ length: 100 }, () => ({
//         x: faker.datatype.number({ min: -100, max: 100 }),
//         y: faker.datatype.number({ min: -100, max: 100 }),
//       })),
//       backgroundColor: 'rgba(255, 99, 132, 1)',
//     },
//   ],
// };
// console.log(Array.from({ length: 100 }, () => ({
//     x: faker.datatype.number({ min: -100, max: 100 }),
//     y: faker.datatype.number({ min: -100, max: 100 }),
//   })));

// export default function ScaterChart() {
//   return <Scatter options={options} data={data} />;
// }




import React from 'react';
import { Scatter } from 'react-chartjs-2';
import chartvalues from './scaterChartValues';


const data = {
  datasets: [
    {
      label: 'Bounce Rates vs Revenue',
      data: Object.keys(chartvalues.BounceRates).map((key) => ({
        y: chartvalues.BounceRates[key],
        x: chartvalues.Revenue[key],
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjust the color as needed
    },
    {
      label: 'Exit Rates vs Revenue',
      data: Object.keys(chartvalues.ExitRates).map((key) => ({
        y: chartvalues.ExitRates[key],
        x: chartvalues.Revenue[key],
      })),
      backgroundColor: 'rgba(54, 162, 235, 0.6)', // Adjust the color as needed
    },
    {
      label: 'Page Values vs Revenue',
      data: Object.keys(chartvalues.PageValues).map((key) => ({
        y: chartvalues.PageValues[key],
        x: chartvalues.Revenue[key],
      })),
      backgroundColor: 'rgba(255, 206, 86, 0.6)', // Adjust the color as needed
    },
  ],
};
console.log(Object.keys(chartvalues.BounceRates).map((key) => ({
    y: chartvalues.BounceRates[key],
    x: chartvalues.Revenue[key],
  })));
const options = {
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'Revenue',
      },
    },
    y: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Bounce Rates, Exit Rates, Page Values',

      },
    },
  },
};

const ScaterChart = () => {
  return (
    <div className="Scatter">
      <h2 style={{color:'black'}}>Session comparison</h2>
      <Scatter className='ScatterChart' data={data} options={options} />
    </div>
  );
};

export default ScaterChart ;



// import React from 'react';
// import { Scatter } from 'react-chartjs-2';

// const ScatterPlot = ({ data }) => {
//   const chartData = {
//     datasets: [
//       {
//         label: 'Bounce Rates vs Revenue',
//         data: data.map(item => ({ x: item.BounceRates, y: item.Revenue })),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//       {
//         label: 'Exit Rates vs Revenue',
//         data: data.map(item => ({ x: item.ExitRates, y: item.Revenue })),
//         backgroundColor: 'rgba(255, 99, 132, 0.6)',
//       },
//       {
//         label: 'Page Values vs Revenue',
//         data: data.map(item => ({ x: item.PageValues, y: item.Revenue })),
//         backgroundColor: 'rgba(255, 205, 86, 0.6)',
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom',
//         title: {
//           display: true,
//           text: 'Values',
//         },
//       },
//       y: {
//         type: 'linear',
//         position: 'left',
//         title: {
//           display: true,
//           text: 'Revenue',
//         },
//       },
//     },
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;

