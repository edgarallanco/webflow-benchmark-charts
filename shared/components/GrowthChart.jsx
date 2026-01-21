import React from 'react';
import BenchmarkChartCore from './BenchmarkChartCore';
import { GROWTH_CHART } from '../data/chartData';

export default function GrowthChart({
  revenueSetup = 'all',
  revenue = 0,
  selectedMetric,
  onMetricChange,
  showRevenueControls = true,
  showExpandIcon = true,
  onExpand,
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
      showRevenueControls={showRevenueControls}
      showExpandIcon={showExpandIcon}
      onExpand={onExpand}
      className={className}
    />
  );
}
