import React from 'react';
import { declareComponent } from '@webflow/react';
import BenchmarkChartsLayout from '../../shared/components/BenchmarkChartsLayout';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component for Benchmark Charts Layout
 * Displays all 4 charts with a single revenue control at the top
 */
function BenchmarkChartsLayoutWebflow() {
  return <BenchmarkChartsLayout />;
}

export default declareComponent(BenchmarkChartsLayoutWebflow, {
  name: 'BenchmarkChartsLayout',
  description: 'Complete layout with all 4 benchmark charts and shared revenue control',
  group: 'Benchmark Charts',
  props: {},
});
