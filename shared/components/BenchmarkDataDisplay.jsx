'use client';

import React, { useMemo } from 'react';
import ClientChart from './ClientChart';
import { getChartData, formatValue } from '../data/benchmarkData';

export default function BenchmarkDataDisplay({ metricName, metricLabel, metricDescription, format = 'percentage', filters = {}, showDownloadMenu = false, onDownloadMenuToggle }) {
  const chartData = getChartData(metricName, filters);
  const chartRef = React.useRef(null);

  // Build ApexCharts options
  const chartOptions = useMemo(() => {
    if (!chartData) return null;

    // Prepare data for ApexCharts
    const categories = chartData.map(d => d.label);
    const values = chartData.map(d => d.value);
    const colors = chartData.map(d => d.type === 'mean' ? '#00c756' : '#9d917a');

    return {
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
          export: {
            csv: {
              filename: `${metricName}-benchmark`,
              headerCategory: 'Percentile',
              headerValue: 'Value'
            },
            svg: {
              filename: `${metricName}-benchmark`
            },
            png: {
              filename: `${metricName}-benchmark`
            }
          }
        },
        fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif',
        foreColor: '#20211b',
        animations: {
          enabled: true,
          easing: 'easeInOutCubic',
          speed: 800
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: colors,
      series: [{
        name: metricLabel,
        data: values
      }],
      xaxis: {
        categories: categories,
        labels: {
          style: {
            fontSize: '12px',
            fontWeight: 500,
            colors: '#9d917a',
            fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '12px',
            fontWeight: 500,
            colors: '#9d917a',
            fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif'
          },
          formatter: (value) => formatValue(value, format)
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '16px',
          fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 500,
          colors: ['#20211b']
        },
        formatter: (value) => formatValue(value, format),
        background: {
          enabled: false
        }
      },
      tooltip: {
        theme: 'light',
        style: {
          fontSize: '12px',
          fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif'
        },
        y: {
          formatter: (value) => formatValue(value, format)
        }
      },
      legend: {
        show: false
      },
      grid: {
        borderColor: '#e6e1d6',
        strokeDashArray: 0,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          top: 10,
          right: 20,
          bottom: 0,
          left: 10
        }
      }
    };
  }, [chartData, metricLabel, metricName, format]);

  if (!chartData) {
    return (
      <div className="benchmark-data-display-chart">
        <div className="metric-header-chart">
          <div className="metric-header-content">
            <h2 className="metric-title-chart">{metricLabel}</h2>
          </div>
          {metricDescription && (
            <p className="metric-description-chart">{metricDescription}</p>
          )}
        </div>
        <div className="no-data-message">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '16px' }}>
            <circle cx="24" cy="24" r="20" stroke="#9d917a" strokeWidth="2" fill="none"/>
            <path d="M24 16V26" stroke="#9d917a" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="24" cy="30" r="1.5" fill="#9d917a"/>
          </svg>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#20211b', marginBottom: '8px' }}>
            No data available
          </h3>
          <p style={{ fontSize: '14px', color: '#9d917a', maxWidth: '400px', textAlign: 'center', lineHeight: '1.5' }}>
            This filter combination doesn't have enough survey responses to show benchmark data. Try adjusting your filters to see results.
          </p>
        </div>
      </div>
    );
  }

  // Download handlers
  const handleDownload = (format) => {
    if (chartRef.current && chartRef.current.chart) {
      const chart = chartRef.current.chart;

      switch (format) {
        case 'SVG':
          chart.dataURI().then(({ imgURI }) => {
            const link = document.createElement('a');
            link.href = imgURI;
            link.download = `${metricName}-benchmark.svg`;
            link.click();
          });
          break;
        case 'PNG':
          chart.dataURI().then(({ imgURI }) => {
            const link = document.createElement('a');
            link.href = imgURI;
            link.download = `${metricName}-benchmark.png`;
            link.click();
          });
          break;
        case 'CSV':
          // Create CSV from chart data
          const csvData = chartData.map(d => `${d.label},${d.value}`).join('\n');
          const csv = `Percentile,Value\n${csvData}`;
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${metricName}-benchmark.csv`;
          link.click();
          URL.revokeObjectURL(url);
          break;
      }

      if (onDownloadMenuToggle) {
        onDownloadMenuToggle(false);
      }
    }
  };

  return (
    <div className="benchmark-data-display-chart">
      {/* Metric Header */}
      <div className="metric-header-chart">
        <div className="metric-header-content">
          <h2 className="metric-title-chart">{metricLabel}</h2>
          {metricDescription && (
            <p className="metric-description-chart">{metricDescription}</p>
          )}
        </div>

        {/* Download Menu Dropdown */}
        {onDownloadMenuToggle && (
          <div className="download-dropdown-container-inline">
            {showDownloadMenu && (
              <>
                <div className="download-menu-backdrop" onClick={() => onDownloadMenuToggle(false)}></div>
                <div className="download-menu">
                  <div className="download-menu-header">File Format</div>
                  <button className="download-menu-item" onClick={() => handleDownload('SVG')}>
                    SVG
                  </button>
                  <button className="download-menu-item" onClick={() => handleDownload('PNG')}>
                    PNG
                  </button>
                  <button className="download-menu-item" onClick={() => handleDownload('CSV')}>
                    CSV
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ApexCharts Bar Chart */}
      <div className="bar-chart-container">
        <ClientChart
          ref={chartRef}
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height={450}
        />
      </div>
    </div>
  );
}
