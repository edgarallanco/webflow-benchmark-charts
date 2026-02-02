import React, { useEffect, useState } from 'react';

/**
 * Client-side only wrapper for ApexCharts
 * Prevents "window is not defined" errors during build/SSR
 */
export default function ClientChart({ options, series, type, height, onChartReady }) {
  const [Chart, setChart] = useState(null);
  const chartRef = React.useRef(null);

  useEffect(() => {
    // Only import ApexCharts on the client side
    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        try {
          chartRef.current.destroy?.();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  // Use chart events to get the instance when it's ready
  const chartOptions = React.useMemo(() => {
    if (!options) return options;

    return {
      ...options,
      chart: {
        ...options.chart,
        events: {
          ...options.chart?.events,
          mounted: (chartContext) => {
            console.log('Chart mounted, context:', chartContext);
            if (onChartReady && chartContext) {
              onChartReady(chartContext);
            }
          }
        }
      }
    };
  }, [options, onChartReady]);

  if (!Chart) {
    return <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading chart...</div>;
  }

  return <Chart options={chartOptions} series={series} type={type} height={height} />;
}
