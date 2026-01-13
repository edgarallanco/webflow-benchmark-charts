import React from 'react';
import { declareComponent, props } from '@webflow/devlink';
import ChurnChart from '../../shared/components/ChurnChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component wrapper for Churn Chart
 */
function ChurnChartWebflow({
  metric = 'annualized gross'
}) {
  return (
    <ChurnChart
      selectedMetric={metric}
    />
  );
}

export default declareComponent(ChurnChartWebflow, {
  metric: props.enum(['annualized gross', 'annualized retention'], {
    displayName: 'Metric',
    description: 'Churn metric to display',
    defaultValue: 'annualized gross'
  })
});
