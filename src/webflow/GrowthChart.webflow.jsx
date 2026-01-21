import React from 'react';
import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import GrowthChart from '../../shared/components/GrowthChart';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component for Growth Chart
 */
function GrowthChartWebflow({ metric, showExpandIcon }) {
  return (
    <GrowthChart
      selectedMetric={metric}
      showRevenueControls={true}
      showExpandIcon={showExpandIcon}
    />
  );
}

export default declareComponent(GrowthChartWebflow, {
  name: 'GrowthChart',
  description: 'Display growth metrics with expand icon. Revenue controls appear in expanded view.',
  group: 'Benchmark Charts',
  props: {
    metric: props.Variant({
      name: 'Initial Metric',
      options: ['y/y arr', 'icagr', 'nnarr', 'fwd arr'],
      defaultValue: 'y/y arr',
    }),
    showExpandIcon: props.Boolean({
      name: 'Show Expand Icon',
      defaultValue: true,
    }),
  },
});
