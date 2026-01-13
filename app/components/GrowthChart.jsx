'use client';

import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues with ApexCharts
const GrowthChart = dynamic(
  () => import('../../shared/components/GrowthChart'),
  { ssr: false }
);

export default GrowthChart;
