/* eslint-disable no-unused-vars */
import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';

function Area() {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 450,
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        foreColor: '#fff',
        toolbar: {
          show: false
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.3,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        fillSeriesColor: false,
        theme: false,
        custom({ series, seriesIndex, dataPointIndex, w }) {
          return (
            `<div class="bg-[#3b3b3b] flex flex-col gap-1 p-3">` +
            `<span class="text-white/50 text-xs">${w.globals.labels[dataPointIndex]}</span>` +
            `<span class="text-white/80 text-sm font-bold">$${series[seriesIndex][dataPointIndex]}</span>` +
            `</div>`
          );
        },
        style: {
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif'
        }
      },
      grid: {
        show: false
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
        border: 0,
        markers: {
          width: 10,
          height: 10,
          radius: 50
        },
        itemMargin: {
          horizontal: 8,
          vertical: 8
        }
      },
      series: [
        {
          name: 'Ingresos',
          data: [200000, 430000, 605000, 340000, 210000, 500000, 470000],
          color: '#CBEF65'
        },
        {
          name: 'Sales',
          data: [300000, 6218, 616, 6526, 6356, 6256, 6056],
          color: '#EA512E'
        }
      ],
      xaxis: {
        categories: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        labels: {
          style: {
            colors: ['#fff'],
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif'
          }
        },
        axisBorder: {
          color: '#F3F4F6'
        },
        axisTicks: {
          color: '#F3F4F6'
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#fff'],
            fontSize: '14px',
            fontWeight: 500
          },
          formatter(value) {
            return `$${value}`;
          }
        }
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            xaxis: {
              labels: {
                show: false
              }
            },
            yaxis: {
              labels: {
                show: false
              }
            }
          }
        }
      ]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
  }, []);

  return (
    <div className="">
      <div ref={chartRef} />
    </div>
  );
}

export default Area;
