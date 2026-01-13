import React from 'react';
import { declareComponent, props } from '@webflow/devlink';
import EfficiencyChart from '../../shared/components/EfficiencyChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Efficiency Chart
 */
function EfficiencyChartWebflow({
  metric = 'net sales'
}) {
  return (
    <EfficiencyChart
      selectedMetric={metric}
    />
  );
}

export default declareComponent(EfficiencyChartWebflow, {
  metric: props.enum(['net sales', 'gross sales', 'magic number'], {
    displayName: 'Metric',
    description: 'Efficiency metric to display',
    defaultValue: 'net sales'
  })
});
