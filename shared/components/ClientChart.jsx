import React, { useEffect, useState } from 'react';

/**
 * Client-side only wrapper for ApexCharts
 * Prevents "window is not defined" errors during build/SSR
 */
export default function ClientChart({ options, series, type, height }) {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    // Only import ApexCharts on the client side
    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  if (!Chart) {
    return <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading chart...</div>;
  }

  return <Chart options={options} series={series} type={type} height={height} />;
}
