// Real Benchmark Data
// Extracted from Scale VP benchmark survey (175+ companies)
// Source: https://www.scalevp.com/benchmark-survey/
// Data format: metric name -> filter combinations -> percentiles (p10, p25, p50, p75, p90, mean)

import FILTERED_DATA from './benchmarkDataFiltered.json';

// Baseline data (no filters applied) for backwards compatibility
export const MOCK_BENCHMARK_DATA = {
  'Annual Growth Rate': {
    p10: 7,
    p25: 15,
    p50: 27,
    p75: 50,
    p90: 122,
    mean: 67.3
  },
  'Net Revenue Retention Rate': {
    p10: 87.7,
    p25: 98,
    p50: 105.5,
    p75: 115,
    p90: 130,
    mean: 106.7
  },
  'Gross Revenue Retention Rate': {
    p10: 75,
    p25: 85,
    p50: 90,
    p75: 95,
    p90: 100,
    mean: 88.6
  },
  'Blended CAC Ratio': {
    p10: 0.9,
    p25: 1,
    p50: 1.4,
    p75: 1.7,
    p90: 2.6,
    mean: 1.6
  },
  'CAC Payback Period': {
    p10: 6,
    p25: 9.5,
    p50: 15,
    p75: 20.5,
    p90: 36,
    mean: 17.5
  },
  'Sales Cycle Length (Months)': {
    p10: 2,
    p25: 3,
    p50: 5.5,
    p75: 9,
    p90: 14.4,
    mean: 7.5
  },
  'Win Rate Percentage': {
    p10: 12,
    p25: 19.5,
    p50: 25,
    p75: 35,
    p90: 55,
    mean: 29.4
  },
  'Revenue Contribution Percentage by Product-led Growth': {
    p10: 0,
    p25: 0,
    p50: 0,
    p75: 0,
    p90: 20,
    mean: 6.2
  },
  'Revenue Contribution Percentage by Direct Inside Sales': {
    p10: 0,
    p25: 0,
    p50: 20,
    p75: 55,
    p90: 91.2,
    mean: 32
  },
  'Revenue Contribution Percentage by Direct Outside Sales': {
    p10: 0,
    p25: 5,
    p50: 40,
    p75: 80,
    p90: 98,
    mean: 44.4
  },
  'Revenue Contribution Percentage by Channels': {
    p10: 0,
    p25: 0,
    p50: 8,
    p75: 25,
    p90: 50,
    mean: 15.9
  },
  'Quota Attainment Percentage (Annual)': {
    p10: 44.6,
    p25: 62,
    p50: 70,
    p75: 82,
    p90: 94.6,
    mean: 70.7
  },
  'Quota Attainment Percentage (Most Recent Period)': {
    p10: 31,
    p25: 63.5,
    p50: 73.5,
    p75: 88.3,
    p90: 99.8,
    mean: 72.5
  },
  'Quota to Compensation Ratio': {
    p10: 3.2,
    p25: 4,
    p50: 4.5,
    p75: 6,
    p90: 9.5,
    mean: 5.5
  },
  'Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps': {
    p10: 0.3,
    p25: 15,
    p50: 20,
    p75: 41,
    p90: 60,
    mean: 28.6
  },
  'Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps': {
    p10: 0,
    p25: 15,
    p50: 24.5,
    p75: 44,
    p90: 71.8,
    mean: 32.9
  },
  'Percentage of Reps Exceeding Quota (Most Recent Period) - All Sales Reps': {
    p10: 1.1,
    p25: 14,
    p50: 25,
    p75: 50,
    p90: 73.5,
    mean: 33.2
  },
  'Percentage of Reps Exceeding Quota (Most Recent Period) - Fully Ramped Reps': {
    p10: 0.7,
    p25: 15.3,
    p50: 28.5,
    p75: 62.8,
    p90: 90.2,
    mean: 38.1
  },
  'Sales Rep Turnover Rate': {
    p10: 3,
    p25: 10,
    p50: 20,
    p75: 30,
    p90: 58.8,
    mean: 26.2
  },
  'Rep Time to Fully Ramped': {
    p10: 3,
    p25: 5,
    p50: 6,
    p75: 7,
    p90: 10,
    mean: 6.2
  },
  'Pipeline Coverage Ratio': {
    p10: 2,
    p25: 2.5,
    p50: 3,
    p75: 3.8,
    p90: 5,
    mean: 3.3
  },
  'Pipeline From Inbound Hand Raisers': {
    p10: 10,
    p25: 13,
    p50: 25,
    p75: 45,
    p90: 78,
    mean: 34.1
  },
  'Pipeline Contribution Percentage By All Marketing Channels': {
    p10: 6,
    p25: 20,
    p50: 35,
    p75: 50,
    p90: 68.2,
    mean: 36.6
  },
  'Pipeline Contribution Percentage By Outbound SDRs': {
    p10: 0,
    p25: 0,
    p50: 11,
    p75: 25,
    p90: 32.4,
    mean: 17
  },
  'Pipeline Contribution Percentage by Sales Reps': {
    p10: 5,
    p25: 14,
    p50: 30,
    p75: 40,
    p90: 75.8,
    mean: 33.8
  },
  'Pipeline Contribution Percentage By Partners And Channel': {
    p10: 0,
    p25: 0,
    p50: 5,
    p75: 20,
    p90: 30,
    mean: 12.6
  },
  'Marketing Headcount as Percentage of Total GTM Headcount': {
    p10: 4.4,
    p25: 11.1,
    p50: 15.8,
    p75: 21.4,
    p90: 25.4,
    mean: 15.7
  },
  'Sales Headcount as Percentage of Total GTM Headcount': {
    p10: 25.2,
    p25: 36.4,
    p50: 46.7,
    p75: 60.1,
    p90: 72.2,
    mean: 48.8
  },
  'Customer Success Headcount as Percentage of Total GTM Headcount': {
    p10: 0.8,
    p25: 11.7,
    p50: 17.3,
    p75: 26.1,
    p90: 37.5,
    mean: 20.5
  },
  'Ops Headcount as Percentage of Total GTM Headcount': {
    p10: 0,
    p25: 4.6,
    p50: 8.3,
    p75: 11.7,
    p90: 18.4,
    mean: 9.7
  }
};

// Helper function to generate consistent filter key for lookup
function createFilterKey(filters) {
  if (!filters || Object.keys(filters).length === 0) {
    return '{}';
  }

  // Sort keys alphabetically and create consistent JSON string
  const sortedFilters = {};
  Object.keys(filters)
    .sort()
    .forEach(key => {
      sortedFilters[key] = filters[key];
    });

  return JSON.stringify(sortedFilters);
}

// Helper function to get benchmark data for a specific metric with filters
export function getBenchmarkData(metricName, filters = {}) {
  // Check if metric exists in filtered data
  const metricData = FILTERED_DATA[metricName];

  if (!metricData) {
    console.warn(`Metric "${metricName}" not found in benchmark data`);
    return null;
  }

  // Generate filter key to match the JSON structure
  const filterKey = createFilterKey(filters);

  // Look up the data for this filter combination
  const filterResult = metricData[filterKey];

  if (!filterResult) {
    console.warn(`No data found for metric "${metricName}" with filter key:`, filterKey);
    console.info('Available filter keys for this metric:', Object.keys(metricData).slice(0, 5));
    return null;
  }

  // Check if percentiles is empty (no data for this filter combination)
  if (!filterResult.percentiles ||
      Array.isArray(filterResult.percentiles) ||
      Object.keys(filterResult.percentiles).length === 0) {
    console.info(`No benchmark data available for "${metricName}" with filters:`, filterResult.label);
    return null;
  }

  return filterResult.percentiles;
}

// Format value based on metric format type (for display)
export function formatValue(value, format) {
  if (value === null || value === undefined) return 'N/A';

  switch (format) {
    case 'percentage':
      return `${value}%`;
    case 'ratio':
      return value.toFixed(1);
    case 'months':
      return value.toFixed(1);
    default:
      return value.toString();
  }
}

// Get chart data formatted for bar chart
export function getChartData(metricName, filters = {}) {
  const data = getBenchmarkData(metricName, filters);

  if (!data) {
    return null;
  }

  return [
    { label: '10th Percentile', value: data.p10, type: 'percentile' },
    { label: '25th Percentile', value: data.p25, type: 'percentile' },
    { label: '50th Percentile', value: data.p50, type: 'percentile' },
    { label: '75th Percentile', value: data.p75, type: 'percentile' },
    { label: '90th Percentile', value: data.p90, type: 'percentile' },
    { label: 'Mean', value: data.mean, type: 'mean' }
  ];
}

// Get all available filter combinations for a metric (useful for debugging)
export function getAvailableFilters(metricName) {
  const metricData = FILTERED_DATA[metricName];

  if (!metricData) {
    return [];
  }

  // Return all filter combinations that have valid data
  return Object.entries(metricData)
    .filter(([key, result]) => {
      return result.percentiles &&
             !Array.isArray(result.percentiles) &&
             Object.keys(result.percentiles).length > 0;
    })
    .map(([key, result]) => ({
      filterKey: key,
      filters: result.filters,
      label: result.label,
      sampleData: `p50=${result.percentiles.p50}`
    }));
}
