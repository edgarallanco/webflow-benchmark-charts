'use client';

import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues with ApexCharts
const EfficiencyChart = dynamic(
  () => import('../../shared/components/EfficiencyChart'),
  { ssr: false }
);

export default EfficiencyChart;
