import React from 'react';
import { declareComponent, props } from '@webflow/devlink';
import BenchmarkCharts from '../../shared/components/BenchmarkCharts';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for All Benchmark Charts
 */
function BenchmarkChartsWebflow({
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

export default declareComponent(BenchmarkChartsWebflow, {
  initialRevenueSetup: props.enum(['all', 'range'], {
    displayName: 'Initial Revenue Setup',
    description: 'Initial display mode for revenue ranges',
    defaultValue: 'all'
  }),
  initialRevenue: props.number({
    displayName: 'Initial Revenue',
    description: 'Initial revenue range index (0-6)',
    defaultValue: 0,
    min: 0,
    max: 6,
    step: 1
  }),
  showControls: props.boolean({
    displayName: 'Show Controls',
    description: 'Show revenue range controls',
    defaultValue: true
  })
});
