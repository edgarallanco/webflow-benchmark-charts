import React from 'react';
import BenchmarkChartCore from './BenchmarkChartCore';
import { EFFICIENCY_CHART } from '../data/chartData';

export default function EfficiencyChart({
  selectedMetric,
  onMetricChange,
  className = ''
}) {
  return (
    <BenchmarkChartCore
      chartConfig={EFFICIENCY_CHART}
      chartType="efficiency"
      revenueSetup="all"
      revenue={0}
      selectedMetric={selectedMetric}
      onMetricChange={onMetricChange}
      className={className}
    />
  );
}
