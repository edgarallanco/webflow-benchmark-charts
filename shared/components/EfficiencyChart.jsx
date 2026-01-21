import React from 'react';
import BenchmarkChartCore from './BenchmarkChartCore';
import { EFFICIENCY_CHART } from '../data/chartData';

export default function EfficiencyChart({
  revenueSetup = 'all',
  revenue = 0,
  selectedMetric,
  onMetricChange,
  showRevenueControls = false,
  showExpandIcon = true,
  onExpand,
  className = ''
}) {
  return (
    <BenchmarkChartCore
      chartConfig={EFFICIENCY_CHART}
      chartType="efficiency"
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
