import React from 'react';
import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import EfficiencyChart from '../../shared/components/EfficiencyChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component for Efficiency Chart
 */
function EfficiencyChartWebflow({ metric, showExpandIcon }) {
  return (
    <EfficiencyChart
      selectedMetric={metric}
      showExpandIcon={showExpandIcon}
      showRevenueControls={false}
    />
  );
}

export default declareComponent(EfficiencyChartWebflow, {
  name: 'EfficiencyChart',
  description: 'Display efficiency metrics with expand icon. Metric tabs appear in expanded view.',
  group: 'Benchmark Charts',
  props: {
    metric: props.Variant({
      name: 'Initial Metric',
      options: ['net sales', 'gross sales', 'magic number'],
      defaultValue: 'net sales',
    }),
    showExpandIcon: props.Boolean({
      name: 'Show Expand Icon',
      defaultValue: true,
    }),
  },
});
