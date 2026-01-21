import React from 'react';
import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import ChurnChart from '../../shared/components/ChurnChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component for Churn Chart
 */
function ChurnChartWebflow({ metric, showExpandIcon }) {
  return (
    <ChurnChart
      selectedMetric={metric}
      showExpandIcon={showExpandIcon}
      showRevenueControls={false}
    />
  );
}

export default declareComponent(ChurnChartWebflow, {
  name: 'ChurnChart',
  description: 'Display churn metrics with expand icon. Metric tabs appear in expanded view.',
  group: 'Benchmark Charts',
  props: {
    metric: props.Variant({
      name: 'Initial Metric',
      options: ['annualized gross', 'annualized retention'],
      defaultValue: 'annualized gross',
    }),
    showExpandIcon: props.Boolean({
      name: 'Show Expand Icon',
      defaultValue: true,
    }),
  },
});
