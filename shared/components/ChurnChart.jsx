import React from 'react';
import BenchmarkChartCore from './BenchmarkChartCore';
import { CHURN_CHART } from '../data/chartData';

export default function ChurnChart({
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
      chartConfig={CHURN_CHART}
      chartType="churn"
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
