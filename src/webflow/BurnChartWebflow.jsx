import React from 'react';
import BurnChart from '../../shared/components/BurnChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Burn Chart
 * Props will be configured via webflow.json
 */
export default function BurnChartWebflow({
  revenueSetup = 'all',
  revenue = 0,
  metric = 'multiple'
}) {
  return (
    <BurnChart
      revenueSetup={revenueSetup}
      revenue={revenue}
      selectedMetric={metric}
    />
  );
}
