import React from 'react';
import { declareComponent, props } from '@webflow/devlink';
import BurnChart from '../../shared/components/BurnChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Burn Chart
 */
function BurnChartWebflow({
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

export default declareComponent(BurnChartWebflow, {
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
  metric: props.enum(['multiple', 'rule-of-40', 'operating-margin'], {
    displayName: 'Metric',
    description: 'Burn metric to display',
    defaultValue: 'multiple'
  })
});
