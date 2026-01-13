'use client';

import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues with ApexCharts
const ChurnChart = dynamic(
  () => import('../../shared/components/ChurnChart'),
  { ssr: false }
);

export default ChurnChart;
