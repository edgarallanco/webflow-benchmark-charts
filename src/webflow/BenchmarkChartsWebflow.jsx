import React from 'react';
import BenchmarkCharts from '../../shared/components/BenchmarkCharts';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for All Benchmark Charts
 * Props will be configured via webflow.json
 */
export default function BenchmarkChartsWebflow({
  initialRevenueSetup = 'all',
  initialRevenue = 0,
  showControls = true
}) {
  return (
    <BenchmarkCharts
      initialRevenueSetup={initialRevenueSetup}
      initialRevenue={initialRevenue}
      showControls={showControls}
    />
  );
}
