import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { buildChartOptions, getMetricKeys, getMetricTitle, getMetricDescription } from '../utils/chartOptions';

/**
 * BenchmarkChartCore - Pure React chart component (no Next.js dependencies)
 * Can be used by both Next.js app and Code Components
 */
export default function BenchmarkChartCore({
  chartConfig,
  chartType,
  revenueSetup = 'all',
  revenue = 0,
  selectedMetric,
  onMetricChange,
  className = ''
}) {
  const [currentMetric, setCurrentMetric] = useState(
    selectedMetric || chartConfig.default
  );

  useEffect(() => {
    if (selectedMetric && selectedMetric !== currentMetric) {
      setCurrentMetric(selectedMetric);
    }
  }, [selectedMetric, currentMetric]);

  const options = buildChartOptions(
    chartConfig,
    currentMetric,
    revenueSetup,
    revenue
  );

  const metricKeys = getMetricKeys(chartConfig);

  const handleMetricChange = (newMetric) => {
    setCurrentMetric(newMetric);
    if (onMetricChange) {
      onMetricChange(newMetric);
    }
  };

  const description = getMetricDescription(chartConfig, currentMetric);

  return (
    <div className={`benchmark-chart ${className}`}>
      {metricKeys.length > 1 && (
        <div className="metric-selector">
          {metricKeys.map(key => (
            <button
              key={key}
              className={`metric-button ${currentMetric === key ? 'active' : ''}`}
              onClick={() => handleMetricChange(key)}
            >
              {getMetricTitle(chartConfig, key)}
            </button>
          ))}
        </div>
      )}

      {description && (
        <div
          className="chart-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      <div className="chart-container">
        <Chart
          options={options}
          series={options.series}
          type={chartConfig.type}
          height={350}
        />
      </div>
    </div>
  );
}
