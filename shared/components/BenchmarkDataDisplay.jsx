'use client';

import React, { useMemo, useImperativeHandle, forwardRef } from 'react';
import ClientChart from './ClientChart';
import { getChartData, formatValue } from '../data/benchmarkData';

const BenchmarkDataDisplay = forwardRef(({ metricName, metricLabel, metricDescription, format = 'percentage', filters = {} }, ref) => {
  const chartData = getChartData(metricName, filters);
  const chartId = `chart-${metricName.replace(/\s+/g, '-')}`;
  const chartInstanceRef = React.useRef(null);

  // Build ApexCharts options
  const chartOptions = useMemo(() => {
    if (!chartData) return null;

    // Prepare data for ApexCharts
    const categories = chartData.map(d => d.label);
    const values = chartData.map(d => d.value);
    const colors = chartData.map(d => d.type === 'mean' ? '#00c756' : '#9d917a');

    // Calculate min/max values and add headroom for labels
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    // Determine Y-axis bounds based on data
    let yAxisMin, yAxisMax;

    if (format === 'percentage') {
      // For percentages, start at 0 or below if there are negative values
      yAxisMin = minValue < 0 ? Math.floor(minValue / 10) * 10 - 10 : 0;
      yAxisMax = Math.ceil(maxValue / 10) * 10 + 20; // Round up to nearest 10 and add 20 units headroom
    } else {
      // For other formats, use similar logic
      yAxisMin = minValue < 0 ? Math.floor(minValue * 0.9) : 0;
      yAxisMax = Math.ceil(maxValue * 1.2);
    }

    return {
      chart: {
        id: chartId,
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
        background: '#ffffff',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 400,
          animateGradually: {
            enabled: false
          },
          dynamicAnimation: {
            enabled: false, /* Disable animation on data updates to prevent wiggle */
            speed: 350
          }
        }
      },
      annotations: minValue < 0 ? {
        yaxis: [
          {
            y: 0,
            borderColor: '#20211b',
            strokeDashArray: 0,
            borderWidth: 2,
            opacity: 0.8,
            label: {
              borderColor: '#20211b',
              style: {
                color: '#fff',
                background: '#20211b',
                fontSize: '11px',
                fontWeight: 500,
                fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif'
              },
              text: '0% baseline',
              position: 'left',
              offsetX: 0,
              offsetY: 0
            }
          }
        ]
      } : undefined,
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 0,
          horizontal: false,
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
        min: yAxisMin, /* Start at 0 or below for negative values */
        max: yAxisMax, /* Dynamic max with headroom for labels */
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
        offsetY: -28, /* Position 0.5 text height (8px) above bar */
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
        enabled: true,
        theme: 'light',
        style: {
          fontSize: '12px',
          fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif'
        },
        y: {
          formatter: (value) => formatValue(value, format)
        },
        fixed: {
          enabled: false,
          position: 'topRight'
        },
        followCursor: false,
        intersect: true,
        inverseOrder: false,
        custom: undefined
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
  }, [chartData, metricLabel, metricName, format, chartId]);

  // Callback when chart is ready - MUST be before any conditional returns
  const handleChartReady = React.useCallback((chartInstance) => {
    console.log('Chart ready:', chartInstance);
    chartInstanceRef.current = chartInstance;
  }, []);

  // Expose download methods to parent via ref
  useImperativeHandle(ref, () => ({
    download: (downloadFormat) => {
      console.log('Download called with format:', downloadFormat);
      console.log('Chart instance:', chartInstanceRef.current);

      const chart = chartInstanceRef.current;

      if (chart) {
        switch (downloadFormat) {
          case 'SVG':
            console.log('Downloading SVG...');
            // Clear any selection/active states before export
            try {
              chart.hideSeries(); // Hide all series first
              chart.showSeries(); // Show them all again to reset state
            } catch (e) {
              // Ignore if methods don't exist
            }

            // Use paper() method for SVG export which is more reliable
            try {
              const svgData = chart.paper().svg();
              // Clean up the SVG - remove any unwanted elements
              const cleanedSvg = svgData
                .replace(/class="apexcharts-selection-rect"/g, 'class="apexcharts-selection-rect" style="display:none"')
                .replace(/class="apexcharts-xcrosshairs"/g, 'class="apexcharts-xcrosshairs" style="display:none"')
                .replace(/class="apexcharts-ycrosshairs"/g, 'class="apexcharts-ycrosshairs" style="display:none"');

              const blob = new Blob([cleanedSvg], { type: 'image/svg+xml' });
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `${metricName}-benchmark.svg`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            } catch (err) {
              console.error('SVG download error:', err);
            }
            break;
          case 'PNG':
            console.log('Downloading PNG...');
            chart.dataURI().then(({ imgURI }) => {
              const link = document.createElement('a');
              link.href = imgURI;
              link.download = `${metricName}-benchmark.png`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }).catch(err => console.error('PNG download error:', err));
            break;
          case 'CSV':
            console.log('Downloading CSV...');
            // Create CSV from chart data
            const csvData = chartData.map(d => `${d.label},${d.value}`).join('\n');
            const csv = `Percentile,Value\n${csvData}`;
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${metricName}-benchmark.csv`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            break;
        }
      } else {
        console.error('Chart instance not available yet');
      }
    }
  }), [metricName, chartData]);

  // Early return AFTER all hooks are called
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
      </div>

      {/* ApexCharts Bar Chart */}
      <div className="bar-chart-container">
        <ClientChart
          key={`${metricName}-${JSON.stringify(filters)}`} /* Force remount on filter change */
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height={450}
          onChartReady={handleChartReady}
        />
      </div>
    </div>
  );
});

BenchmarkDataDisplay.displayName = 'BenchmarkDataDisplay';

export default BenchmarkDataDisplay;
