import React from 'react';
import EfficiencyChart from '../../shared/components/EfficiencyChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Efficiency Chart
 * Props will be configured via webflow.json
 */
export default function EfficiencyChartWebflow({
  metric = 'net sales'
}) {
  return (
    <EfficiencyChart
      selectedMetric={metric}
    />
  );
}
