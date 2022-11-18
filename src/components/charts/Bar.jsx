import React from 'react';
import { BarChart } from '@tremor/react';

function Bar() {
  const chartdata = [
    {
      name: 'Amphibians',
      'Number of threatened species': 2488
    },
    {
      name: 'Birds',
      'Number of threatened species': 1445
    },
    {
      name: 'Crustaceans',
      'Number of threatened species': 743
    }
  ];

  const dataFormatter = (number) =>
    `$ ${Intl.NumberFormat('us').format(number).toString()}`;
  return (
    <BarChart
      data={chartdata}
      dataKey="name"
      categories={['Number of threatened species']}
      colors={['emerald']}
      valueFormatter={dataFormatter}
      marginTop="mt-6"
      yAxisWidth="w-12"
    />
  );
}

export default Bar;
