// Mock Benchmark Data
// This simulates the data that would come from the WordPress AJAX endpoint
// Data format: metric name -> revenue range -> percentiles

export const MOCK_BENCHMARK_DATA = {
  'Annual Growth Rate': {
    '<$1M': { p50: 180, p75: 320, p90: 580 },
    '$1M-$2.5M': { p50: 257, p75: 520, p90: 911 },
    '$2.5M-$5M': { p50: 195, p75: 385, p90: 720 },
    '$5M-$10M': { p50: 145, p75: 285, p90: 520 },
    '$10M-$25M': { p50: 95, p75: 180, p90: 340 },
    '$25M-$50M': { p50: 65, p75: 120, p90: 210 },
    '$50M-$100M': { p50: 45, p75: 85, p90: 155 },
    '>$100M': { p50: 30, p75: 55, p90: 95 }
  },
  'Net Revenue Retention Rate': {
    '<$1M': { p50: 95, p75: 105, p90: 118 },
    '$1M-$2.5M': { p50: 98, p75: 110, p90: 125 },
    '$2.5M-$5M': { p50: 100, p75: 112, p90: 130 },
    '$5M-$10M': { p50: 102, p75: 115, p90: 135 },
    '$10M-$25M': { p50: 105, p75: 118, p90: 140 },
    '$25M-$50M': { p50: 108, p75: 120, p90: 145 },
    '$50M-$100M': { p50: 110, p75: 125, p90: 150 },
    '>$100M': { p50: 112, p75: 128, p90: 155 }
  },
  'Gross Revenue Retention Rate': {
    '<$1M': { p50: 85, p75: 90, p90: 95 },
    '$1M-$2.5M': { p50: 88, p75: 92, p90: 97 },
    '$2.5M-$5M': { p50: 90, p75: 94, p90: 98 },
    '$5M-$10M': { p50: 92, p75: 95, p90: 99 },
    '$10M-$25M': { p50: 93, p75: 96, p90: 99 },
    '$25M-$50M': { p50: 94, p75: 97, p90: 99 },
    '$50M-$100M': { p50: 95, p75: 98, p90: 99 },
    '>$100M': { p50: 96, p75: 98, p90: 100 }
  },
  'Blended CAC Ratio': {
    '<$1M': { p50: 1.8, p75: 1.2, p90: 0.8 },
    '$1M-$2.5M': { p50: 1.5, p75: 1.0, p90: 0.6 },
    '$2.5M-$5M': { p50: 1.3, p75: 0.9, p90: 0.5 },
    '$5M-$10M': { p50: 1.2, p75: 0.8, p90: 0.5 },
    '$10M-$25M': { p50: 1.0, p75: 0.7, p90: 0.4 },
    '$25M-$50M': { p50: 0.9, p75: 0.6, p90: 0.3 },
    '$50M-$100M': { p50: 0.8, p75: 0.5, p90: 0.3 },
    '>$100M': { p50: 0.7, p75: 0.4, p90: 0.2 }
  },
  'CAC Payback Period': {
    '<$1M': { p50: 18, p75: 12, p90: 8 },
    '$1M-$2.5M': { p50: 16, p75: 11, p90: 7 },
    '$2.5M-$5M': { p50: 14, p75: 10, p90: 6 },
    '$5M-$10M': { p50: 13, p75: 9, p90: 6 },
    '$10M-$25M': { p50: 12, p75: 8, p90: 5 },
    '$25M-$50M': { p50: 11, p75: 7, p90: 4 },
    '$50M-$100M': { p50: 10, p75: 7, p90: 4 },
    '>$100M': { p50: 9, p75: 6, p90: 3 }
  },
  'Sales Cycle Length (Months)': {
    '<$1M': { p50: 2.5, p75: 1.8, p90: 1.2 },
    '$1M-$2.5M': { p50: 3.2, p75: 2.4, p90: 1.6 },
    '$2.5M-$5M': { p50: 3.8, p75: 2.9, p90: 2.0 },
    '$5M-$10M': { p50: 4.5, p75: 3.5, p90: 2.5 },
    '$10M-$25M': { p50: 5.2, p75: 4.0, p90: 3.0 },
    '$25M-$50M': { p50: 6.0, p75: 4.8, p90: 3.6 },
    '$50M-$100M': { p50: 6.8, p75: 5.5, p90: 4.2 },
    '>$100M': { p50: 7.5, p75: 6.2, p90: 4.8 }
  },
  'Win Rate Percentage': {
    '<$1M': { p50: 18, p75: 25, p90: 35 },
    '$1M-$2.5M': { p50: 20, p75: 28, p90: 38 },
    '$2.5M-$5M': { p50: 22, p75: 30, p90: 40 },
    '$5M-$10M': { p50: 24, p75: 32, p90: 42 },
    '$10M-$25M': { p50: 26, p75: 34, p90: 45 },
    '$25M-$50M': { p50: 28, p75: 36, p90: 48 },
    '$50M-$100M': { p50: 30, p75: 38, p90: 50 },
    '>$100M': { p50: 32, p75: 40, p90: 52 }
  }
};

// Helper function to get benchmark data for a specific metric
export function getBenchmarkData(metricName, filters = {}) {
  const data = MOCK_BENCHMARK_DATA[metricName];

  if (!data) {
    return null;
  }

  // If no filters, return all data
  if (Object.keys(filters).length === 0) {
    return data;
  }

  // For now, just return all data
  // In a real implementation, this would filter based on growth rate, ARR, etc.
  return data;
}

// Format value based on metric format type
export function formatValue(value, format) {
  if (value === null || value === undefined) return 'N/A';

  switch (format) {
    case 'percentage':
      return `${value}%`;
    case 'ratio':
      return value.toFixed(2);
    case 'months':
      return `${value} months`;
    default:
      return value.toString();
  }
}
