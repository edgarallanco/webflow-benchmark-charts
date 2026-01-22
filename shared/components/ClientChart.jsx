import React, { useEffect, useState, forwardRef } from 'react';

/**
 * Client-side only wrapper for ApexCharts
 * Prevents "window is not defined" errors during build/SSR
 */
const ClientChart = forwardRef(({ options, series, type, height }, ref) => {
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

  return <Chart ref={ref} options={options} series={series} type={type} height={height} />;
});

ClientChart.displayName = 'ClientChart';

export default ClientChart;
