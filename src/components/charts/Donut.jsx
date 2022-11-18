import React from 'react';
import { DonutChart, Legend } from '@tremor/react';

function Donut() {
  const categories = [
    {
      name: 'Shonen',
      sales: 200000
    },
    {
      name: 'Josei',
      sales: 130000
    },
    {
      name: 'Shojo',
      sales: 320000
    },
    {
      name: 'Seinen',
      sales: 500000
    },
    {
      name: 'Kodomo',
      sales: 50000
    }
  ];

  const valueFormatter = (value) => `$${value}`;

  return (
    <span>
      <DonutChart
        data={categories}
        width="100%"
        category="sales"
        dataKey="name"
        valueFormatter={valueFormatter}
        marginTop="mt-6"
        colors={['lime', 'amber', 'cyan', 'teal', 'pink']}
      />
      <Legend
        categories={categories.map((category) => category.name)}
        marginTop="mt-6"
        colors={['lime', 'amber', 'cyan', 'teal', 'pink']}
      />
    </span>
  );
}

export default Donut;
