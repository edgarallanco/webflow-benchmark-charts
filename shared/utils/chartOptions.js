import { CHART_COLORS, REVENUE_LABELS } from '../data/chartData';

/**
 * Build ApexCharts options based on chart configuration and selected data
 * @param {Object} chartConfig - The chart configuration object
 * @param {string} metricKey - The selected metric key
 * @param {string} revenueSetup - Either 'range' or 'all'
 * @param {number} revenue - Selected revenue range index (0-6)
 * @returns {Object} ApexCharts options object
 */
export function buildChartOptions(chartConfig, metricKey, revenueSetup = 'all', revenue = 0) {
  const metric = chartConfig.metrics[metricKey];

  // Calculate visible data range (only for charts with multiple revenue ranges)
  const { startIndex, endIndex } = chartConfig.categories === 1
    ? { startIndex: 0, endIndex: 1 }
    : getDataRange(revenueSetup, revenue);

  // Build series data
  const series = Object.keys(metric.series).map(tierName => ({
    name: tierName,
    data: metric.series[tierName].slice(startIndex, endIndex)
  }));

  // Base options
  const options = {
    fill: {
      type: 'solid',
      image: {
        src: [],
        width: undefined,
        height: undefined
      }
    },
    chart: {
      type: chartConfig.type,
      toolbar: {
        show: false
      },
      fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif',
      foreColor: '#20211b',
      animations: {
        enabled: true,
        easing: 'easeInOutCubic',
        speed: 1000,
        animateGradually: {
          enabled: false,
          delay: 250,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 300
        }
      }
    },
    colors: CHART_COLORS,
    series,
    xaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 400,
          colors: '#20211b'
        }
      },
      axisBorder: {
        show: true,
        color: '#e6e1d6'
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 400,
          colors: '#20211b'
        }
      }
    },
    stroke: chartConfig.type === 'bar' ? {
      show: true,
      width: 0,
      colors: CHART_COLORS
    } : {
      width: 7,
      curve: 'straight'
    },
    dataLabels: {
      enabled: chartConfig.type === 'bar',
      style: {
        fontSize: '14px',
        fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 600,
        colors: ['#ffffff']
      },
      offsetY: 0
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px',
        fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif'
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '12px',
      fontFamily: 'Saans-TRIAL, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: 400,
      labels: {
        colors: '#20211b'
      },
      markers: {
        width: 16,
        height: 16,
        radius: 8,
        shape: 'circle',
        offsetX: -4,
        offsetY: 0
      },
      itemMargin: {
        horizontal: 16,
        vertical: 8
      }
    },
    grid: {
      borderColor: '#e6e1d6',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 10
      }
    }
  };

  // Set x-axis categories
  if (chartConfig.categories === 3) {
    options.xaxis.categories = REVENUE_LABELS.slice(startIndex, endIndex);
  } else if (chartConfig.categories === 1) {
    options.xaxis.categories = ["Any Revenue"];
  }

  // Set formatters if defined
  const formatter = metric.formatter || chartConfig.formatter;
  if (formatter) {
    options.yaxis.labels = {
      ...options.yaxis.labels,
      formatter
    };
    if (chartConfig.type === 'bar') {
      options.dataLabels.formatter = formatter;
    }
  }

  // Set tooltip ordering
  if (metric.tooltip_reversed) {
    options.tooltip.inverseOrder = true;
  } else {
    options.tooltip.inverseOrder = false;
  }

  // Set y-axis properties
  if (metric.reversed) {
    options.yaxis.reversed = true;
  }
  if (metric.max !== undefined) {
    options.yaxis.max = metric.max;
  }
  if (metric.min !== undefined) {
    options.yaxis.min = metric.min;
  }

  // Set stroke properties
  if (chartConfig.stroke) {
    options.stroke = chartConfig.stroke;
  }

  return options;
}

/**
 * Calculate the start and end indices for data slicing based on revenue setup
 * @param {string} revenueSetup - Either 'range' or 'all'
 * @param {number} revenue - Selected revenue range index (0-6)
 * @returns {Object} { startIndex, endIndex }
 */
function getDataRange(revenueSetup, revenue) {
  const maxIndex = REVENUE_LABELS.length - 1;

  // When "all" is selected, show ALL 7 ranges
  if (revenueSetup === 'all') {
    return { startIndex: 0, endIndex: REVENUE_LABELS.length };
  }

  // Range mode - show 3 labels centered around selection
  let startIndex, endIndex;

  if (revenue <= 0) {
    startIndex = 0;
    endIndex = 3;
  } else if (revenue >= maxIndex) {
    startIndex = maxIndex - 2;
    endIndex = REVENUE_LABELS.length;
  } else {
    startIndex = revenue - 1;
    endIndex = revenue + 2;
  }

  return { startIndex, endIndex };
}

/**
 * Get all available metric keys for a chart
 * @param {Object} chartConfig - The chart configuration object
 * @returns {Array} Array of metric keys
 */
export function getMetricKeys(chartConfig) {
  return Object.keys(chartConfig.metrics);
}

/**
 * Get metric display name
 * @param {Object} chartConfig - The chart configuration object
 * @param {string} metricKey - The metric key
 * @returns {string} Display name
 */
export function getMetricTitle(chartConfig, metricKey) {
  return chartConfig.metrics[metricKey].title || metricKey;
}

/**
 * Get metric description
 * @param {Object} chartConfig - The chart configuration object
 * @param {string} metricKey - The metric key
 * @returns {string} Description
 */
export function getMetricDescription(chartConfig, metricKey) {
  return chartConfig.metrics[metricKey].description || '';
}
