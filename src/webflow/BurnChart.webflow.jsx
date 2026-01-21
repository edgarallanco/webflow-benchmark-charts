import React from 'react';
import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import BurnChart from '../../shared/components/BurnChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component for Burn Chart
 */
function BurnChartWebflow({ metric, showExpandIcon }) {
  return (
    <BurnChart
      selectedMetric={metric}
      showRevenueControls={true}
      showExpandIcon={showExpandIcon}
    />
  );
}

export default declareComponent(BurnChartWebflow, {
  name: 'BurnChart',
  description: 'Display burn metrics with expand icon. Revenue controls appear in expanded view.',
  group: 'Benchmark Charts',
  props: {
    metric: props.Variant({
      name: 'Initial Metric',
      options: ['multiple', 'rule-of-40', 'operating-margin'],
      defaultValue: 'multiple',
    }),
    showExpandIcon: props.Boolean({
      name: 'Show Expand Icon',
      defaultValue: true,
    }),
  },
});
