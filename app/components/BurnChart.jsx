'use client';

import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues with ApexCharts
const BurnChart = dynamic(
  () => import('../../shared/components/BurnChart'),
  { ssr: false }
);

export default BurnChart;
