import React from 'react';
import { getBenchmarkData, formatValue } from '../data/benchmarkData';

const REVENUE_RANGES = [
  '<$1M',
  '$1M-$2.5M',
  '$2.5M-$5M',
  '$5M-$10M',
  '$10M-$25M',
  '$25M-$50M',
  '$50M-$100M',
  '>$100M'
];

export default function BenchmarkDataDisplay({ metricName, metricLabel, metricDescription, format = 'percentage', filters = {} }) {
  const data = getBenchmarkData(metricName, filters);

  if (!data) {
    return (
      <div className="benchmark-data-display">
        <div className="no-data-message">
          <p>No data available for this metric.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="benchmark-data-display">
      {/* Metric Header */}
      <div className="metric-header">
        <h2 className="metric-title">{metricLabel}</h2>
        {metricDescription && (
          <p className="metric-description">{metricDescription}</p>
        )}
      </div>

      {/* Data Table */}
      <div className="data-table-container">
        <table className="benchmark-table">
          <thead>
            <tr>
              <th className="revenue-column">Revenue Range</th>
              <th className="percentile-column p50-column">
                <div className="percentile-header">
                  <span className="percentile-label">Good</span>
                  <span className="percentile-value">50th %ile</span>
                </div>
              </th>
              <th className="percentile-column p75-column">
                <div className="percentile-header">
                  <span className="percentile-label">Better</span>
                  <span className="percentile-value">75th %ile</span>
                </div>
              </th>
              <th className="percentile-column p90-column">
                <div className="percentile-header">
                  <span className="percentile-label">Best</span>
                  <span className="percentile-value">90th %ile</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {REVENUE_RANGES.map(range => {
              const rangeData = data[range];
              if (!rangeData) return null;

              return (
                <tr key={range}>
                  <td className="revenue-cell">{range}</td>
                  <td className="percentile-cell p50-cell">
                    {formatValue(rangeData.p50, format)}
                  </td>
                  <td className="percentile-cell p75-cell">
                    {formatValue(rangeData.p75, format)}
                  </td>
                  <td className="percentile-cell p90-cell">
                    {formatValue(rangeData.p90, format)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="benchmark-legend">
        <div className="legend-item">
          <span className="legend-marker p50-marker"></span>
          <span className="legend-label">Good (50th percentile) - Median performance</span>
        </div>
        <div className="legend-item">
          <span className="legend-marker p75-marker"></span>
          <span className="legend-label">Better (75th percentile) - Top quartile</span>
        </div>
        <div className="legend-item">
          <span className="legend-marker p90-marker"></span>
          <span className="legend-label">Best (90th percentile) - Top decile</span>
        </div>
      </div>
    </div>
  );
}
