import React from 'react';
import BenchmarkChartCore from './BenchmarkChartCore';
import { GROWTH_CHART } from '../data/chartData';

export default function GrowthChart({
  revenueSetup = 'all',
  revenue = 0,
  selectedMetric,
  onMetricChange,
  className = ''
}) {
  return (
    <BenchmarkChartCore
      chartConfig={GROWTH_CHART}
      chartType="growth"
      revenueSetup={revenueSetup}
      revenue={revenue}
      selectedMetric={selectedMetric}
      onMetricChange={onMetricChange}
      className={className}
    />
  );
}
