// import React from 'react';
// import { PieChart, Pie, ResponsiveContainer } from 'recharts';
// import MonthList from './Month'

// const data01 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];
// const data02 = [
  
//   { name: 'March', value: 10.06 },
//   { name: 'May', value: 19.12 },
//   { name: 'July', value: 3.45 },
//   { name: 'Aug', value: 3.98 },
//   { name: 'Sep', value: 4.50 },
//   { name: 'Oct', value: 6.02 },
//   { name: 'June', value: 1.51 },
//   { name: 'Nov', value: 38.83 },
//   { name: 'Feb', value: 0.15 },
//   { name: 'Dec', value: 11.32 },
// ];

// const Donuts = () => {
//   return (
//         <div style={{display:'flex'}}>
//     <ResponsiveContainer width="100%" height={400}>
//       <PieChart>
//         {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
//         <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={150} fill="#82ca9d" label />
//       </PieChart>
     
//     </ResponsiveContainer>
//     <MonthList />  
//        </div>
//   );
// };

// export default Donuts;


import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feb', value: 1.15},
  { name: 'March', value: 10.06 },
  { name: 'May', value: 19.12 },
  { name: 'Aug', value: 3.98 },
  { name: 'Sep', value: 4.50 },
  { name: 'Oct', value: 6.02 },
  { name: 'June', value: 1.51 },
  { name: 'Nov', value: 38.83 },
  { name: 'July', value: 3.45 },
  { name: 'Dec', value: 11.32 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
// ...

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, payload }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${payload.name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  // ...
  

const Donuts = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Donuts;
