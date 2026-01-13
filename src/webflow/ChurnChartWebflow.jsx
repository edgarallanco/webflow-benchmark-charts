import React from 'react';
import ChurnChart from '../../shared/components/ChurnChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Churn Chart
 * Props will be configured via webflow.json
 */
export default function ChurnChartWebflow({
  metric = 'annualized gross'
}) {
  return (
    <ChurnChart
      selectedMetric={metric}
    />
  );
}
