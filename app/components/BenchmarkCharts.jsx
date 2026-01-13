'use client';

import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues with ApexCharts
const BenchmarkCharts = dynamic(
  () => import('../../shared/components/BenchmarkCharts'),
  { ssr: false }
);

export default BenchmarkCharts;
