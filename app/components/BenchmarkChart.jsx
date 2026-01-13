'use client';

import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues with ApexCharts
const BenchmarkChartCore = dynamic(
  () => import('../../shared/components/BenchmarkChartCore'),
  { ssr: false }
);

export default BenchmarkChartCore;
