import React from 'react';
import GrowthChart from '../../shared/components/GrowthChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Growth Chart
 * Props will be configured via webflow.json
 */
export default function GrowthChartWebflow({
  revenueSetup = 'all',
  revenue = 0,
  metric = 'y/y arr'
}) {
  return (
    <GrowthChart
      revenueSetup={revenueSetup}
      revenue={revenue}
      selectedMetric={metric}
    />
  );
}
