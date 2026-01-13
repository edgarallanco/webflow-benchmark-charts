import React from 'react';
import BenchmarkChartCore from './BenchmarkChartCore';
import { CHURN_CHART } from '../data/chartData';

export default function ChurnChart({
  selectedMetric,
  onMetricChange,
  className = ''
}) {
  return (
    <BenchmarkChartCore
      chartConfig={CHURN_CHART}
      chartType="churn"
      revenueSetup="all"
      revenue={0}
      selectedMetric={selectedMetric}
      onMetricChange={onMetricChange}
      className={className}
    />
  );
}
