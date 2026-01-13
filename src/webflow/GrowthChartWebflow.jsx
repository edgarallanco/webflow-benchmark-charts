import React from 'react';
import { declareComponent, props } from '@webflow/devlink';
import GrowthChart from '../../shared/components/GrowthChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Growth Chart
 */
function GrowthChartWebflow({
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

export default declareComponent(GrowthChartWebflow, {
  revenueSetup: props.enum(['all', 'range'], {
    displayName: 'Revenue Setup',
    description: 'Display all revenue ranges or a specific range',
    defaultValue: 'all'
  }),
  revenue: props.number({
    displayName: 'Revenue Range',
    description: 'Revenue range index (0-6). Only used when Revenue Setup is "range"',
    defaultValue: 0,
    min: 0,
    max: 6,
    step: 1
  }),
  metric: props.enum(['y/y arr', 'icagr', 'nnarr', 'fwd arr'], {
    displayName: 'Metric',
    description: 'Growth metric to display',
    defaultValue: 'y/y arr'
  })
});
