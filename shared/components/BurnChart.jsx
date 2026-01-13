import React from 'react';
import BenchmarkChartCore from './BenchmarkChartCore';
import { BURN_CHART } from '../data/chartData';

export default function BurnChart({
  revenueSetup = 'all',
  revenue = 0,
  selectedMetric,
  onMetricChange,
  className = ''
}) {
  return (
    <BenchmarkChartCore
      chartConfig={BURN_CHART}
      chartType="burn"
      revenueSetup={revenueSetup}
      revenue={revenue}
      selectedMetric={selectedMetric}
      onMetricChange={onMetricChange}
      className={className}
    />
  );
}
