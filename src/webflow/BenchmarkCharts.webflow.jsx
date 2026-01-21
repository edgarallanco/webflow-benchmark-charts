import React from 'react';
import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import BenchmarkCharts from '../../shared/components/BenchmarkCharts';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component for All Benchmark Charts
 */
function BenchmarkChartsWebflow({ initialRevenueSetup, initialRevenue, showControls }) {
  return (
    <BenchmarkCharts
      initialRevenueSetup={initialRevenueSetup}
      initialRevenue={initialRevenue}
      showControls={showControls}
    />
  );
}

export default declareComponent(BenchmarkChartsWebflow, {
  name: 'BenchmarkCharts',
  description: 'Display all 4 benchmark charts with interactive revenue range controls',
  group: 'Benchmark Charts',
  props: {
    initialRevenueSetup: props.Variant({
      name: 'Initial Revenue Setup',
      options: ['all', 'range'],
      defaultValue: 'all',
    }),
    initialRevenue: props.Number({
      name: 'Initial Revenue',
      defaultValue: 0,
      min: 0,
      max: 6,
      step: 1,
    }),
    showControls: props.Boolean({
      name: 'Show Controls',
      defaultValue: true,
    }),
  },
});
