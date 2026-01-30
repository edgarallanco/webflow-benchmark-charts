import React, { useEffect, useState } from 'react';

/**
 * Client-side only wrapper for ApexCharts
 * Prevents "window is not defined" errors during build/SSR
 */
export default function ClientChart({ options, series, type, height, onChartReady }) {
  const [Chart, setChart] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    // Only import ApexCharts on the client side
    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  // Wait for container to be sized before rendering chart
  useEffect(() => {
    if (!Chart) return;

    // Small delay to ensure container is fully rendered and sized
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [Chart]);

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

  if (!Chart || !isReady) {
    return (
      <div
        ref={containerRef}
        style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Loading chart...
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height }}>
      <Chart options={chartOptions} series={series} type={type} height={height} />
    </div>
  );
}
