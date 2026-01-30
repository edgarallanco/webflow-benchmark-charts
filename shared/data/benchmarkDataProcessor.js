// Benchmark Data Processor
// Computes statistics from raw survey responses based on filters

import FULL_DATA from './benchmarkDataFull.json' with { type: 'json' };

// Mapping of metric names to field names in the raw data
const METRIC_FIELD_MAP = {
  'Annual Growth Rate': 'Annual Growth Rate',
  'Net Revenue Retention Rate': 'Net Revenue Retention Rate',
  'Gross Revenue Retention Rate': 'Gross Revenue Retention Rate',
  'Blended CAC Ratio': 'Blended CAC Ratio',
  'CAC Payback Period': 'CAC Payback Period',
  'Sales Cycle Length (Months)': 'Sales Cycle Length (Months)',
  'Win Rate Percentage': 'Win Rate Percentage',
  'Revenue Contribution Percentage by Product-led Growth': 'Revenue Contribution Percentage by Product-led Growth',
  'Revenue Contribution Percentage by Direct Inside Sales': 'Revenue Contribution Percentage by Direct Inside Sales',
  'Revenue Contribution Percentage by Direct Outside Sales': 'Revenue Contribution Percentage by Direct Outside Sales',
  'Revenue Contribution Percentage by Channels': 'Revenue Contribution Percentage by Channels',
  'Quota Attainment Percentage (Annual)': 'Quota Attainment Percentage (Annual)',
  'Quota Attainment Percentage (Most Recent Period)': 'Quota Attainment Percentage (Most Recent Period)',
  'Quota to Compensation Ratio': 'Quota to Compensation Ratio',
  'Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps': 'Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps',
  'Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps': 'Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps',
  'Percentage of Reps Exceeding Quota (Most Recent Period) - All Sales Reps': 'Percentage of Reps Exceeding Quota (Most Recent Period) - All Sales Reps',
  'Percentage of Reps Exceeding Quota (Most Recent Period) - Fully Ramped Reps': 'Percentage of Reps Exceeding Quota (Most Recent Period) - Fully Ramped Reps',
  'Sales Rep Turnover Rate': 'Sales Rep Turnover Rate',
  'Rep Time to Fully Ramped': 'Rep Time to Fully Ramped',
  'Pipeline Coverage Ratio': 'Pipeline Coverage Ratio',
  'Pipeline From Inbound Hand Raisers': 'Pipeline From Inbound Hand Raisers',
  'Pipeline Contribution Percentage By All Marketing Channels': 'Pipeline Contribution Percentage By All Marketing Channels',
  'Pipeline Contribution Percentage By Outbound SDRs': 'Pipeline Contribution Percentage By Outbound SDRs',
  'Pipeline Contribution Percentage by Sales Reps': 'Pipeline Contribution Percentage by Sales Reps',
  'Pipeline Contribution Percentage By Partners And Channel': 'Pipeline Contribution Percentage By Partners And Channel',
  'Marketing Headcount as Percentage of Total GTM Headcount': 'Marketing Headcount as Percentage of Total GTM Headcount',
  'Sales Headcount as Percentage of Total GTM Headcount': 'Sales Headcount as Percentage of Total GTM Headcount',
  'Customer Success Headcount as Percentage of Total GTM Headcount': 'Customer Success Headcount as Percentage of Total GTM Headcount',
  'Ops Headcount as Percentage of Total GTM Headcount': 'Ops Headcount as Percentage of Total GTM Headcount',
  'Marketing Headcount': 'Marketing Headcount',
  'Marketing Ops Headcount': 'Marketing Ops Headcount',
  'SDR Headcount': 'SDR Headcount',
  'Sales Rep Headcount': 'Sales Rep Headcount',
  'Sales Engineer Headcount': 'Sales Engineer Headcount',
  'Sales Manager Headcount': 'Sales Managers Headcount',
  'Sales Ops Headcount': 'Sales Ops Headcount',
  'Customer Success Headcount': 'Customer Success Headcount',
  'Customer Success Ops Headcount': 'Customer Success Ops Headcount',
  'RevOps Headcount': 'RevOps Headcount',
  'Partners and Channel Headcount': 'Partners And Channel Headcount'
};

// Filter mapping from UI filter keys to data field names
const FILTER_FIELD_MAP = {
  'growth-rate': 'Growth Rate',
  'arr': 'ARR',
  'number-of-employees': 'Number of Employees',
  'acv-last-12-months': 'Average ACV',
  'primary-pricing-model': 'Primary Pricing Model',
  'primary-customer-target-segment': 'Primary Customer Target Segment',
  'primary-solution-type': 'Primary Solution Type',
  'incorporated-ai': 'Incorporated AI'
};

// Helper to parse numeric values from strings
function parseNumericValue(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'number') return value;

  // Handle string numbers
  const str = String(value).trim();
  if (str === 'FALSE' || str === 'NULL') return null;

  // Remove commas and parse
  const cleaned = str.replace(/,/g, '');
  const num = parseFloat(cleaned);

  return isNaN(num) ? null : num;
}

// Mapping from filter values to data values
const FILTER_VALUE_MAP = {
  'growth-rate': {
    '<=10': 'Less than 10%',
    '11-20': 'Between 11 and 20%',
    '21-30': 'Between 21 and 30%',
    '>30': 'Greater than 30%'
  }
};

// Helper to check if a record matches the filter criteria
function recordMatchesFilters(record, filters) {
  // No filters means all records match
  if (!filters || Object.keys(filters).length === 0) return true;

  // Check each filter
  for (const [filterKey, filterValues] of Object.entries(filters)) {
    if (!filterValues || filterValues.length === 0) continue;

    const fieldName = FILTER_FIELD_MAP[filterKey];
    if (!fieldName) continue;

    // Special handling for growth rate - map filter values to data values
    if (filterKey === 'growth-rate') {
      const recordValue = record[fieldName];
      if (!recordValue) return false;
      const valueMap = FILTER_VALUE_MAP['growth-rate'];
      const mappedValues = filterValues.map(fv => valueMap[fv]).filter(Boolean);
      const matches = mappedValues.includes(recordValue);
      if (!matches) return false;
    }
    // Special handling for customer segments - use boolean columns to match old behavior
    // Check the boolean column directly (e.g., "Enterprise (> $1B)" column)
    else if (filterKey === 'primary-customer-target-segment') {
      const matches = filterValues.some(fv => {
        // Check the boolean column with the exact segment name
        return record[fv] === 'TRUE';
      });
      if (!matches) return false;
    }
    // Special handling for incorporated AI
    else if (filterKey === 'incorporated-ai') {
      const recordValue = record[fieldName];
      if (!recordValue) return false;
      const matches = filterValues.some(fv => {
        if (fv === 'Yes' && recordValue === 'Yes') return true;
        if (fv === 'No' && recordValue === 'No') return true;
        return false;
      });
      if (!matches) return false;
    }
    // Direct string matching for other filters
    else {
      const recordValue = record[fieldName];
      if (!recordValue) return false;
      const matches = filterValues.includes(recordValue);
      if (!matches) return false;
    }
  }

  return true;
}

// Calculate percentile from sorted array
function calculatePercentile(sortedValues, percentile) {
  if (sortedValues.length === 0) return null;
  if (sortedValues.length === 1) return sortedValues[0];

  const index = (percentile / 100) * (sortedValues.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  const weight = index - lower;

  return sortedValues[lower] * (1 - weight) + sortedValues[upper] * weight;
}

// Calculate mean from array
function calculateMean(values) {
  if (values.length === 0) return null;
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

// Main function to compute statistics for a metric with filters
export function computeBenchmarkStatistics(metricName, filters = {}) {
  // Get the field name for this metric
  const fieldName = METRIC_FIELD_MAP[metricName];
  if (!fieldName) {
    console.warn(`Metric "${metricName}" not found in field mapping`);
    return null;
  }

  // Filter records based on criteria
  const matchingRecords = FULL_DATA.filter(record => recordMatchesFilters(record, filters));

  // Extract numeric values for this metric
  const values = matchingRecords
    .map(record => parseNumericValue(record[fieldName]))
    .filter(val => val !== null && !isNaN(val));

  // Need at least 5 data points for meaningful statistics
  if (values.length < 5) {
    console.info(`Not enough data for "${metricName}" with filters (found ${values.length} records, need at least 5)`);
    return null;
  }

  // Sort values
  const sortedValues = values.sort((a, b) => a - b);

  // Calculate statistics
  return {
    p10: Math.round(calculatePercentile(sortedValues, 10) * 10) / 10,
    p25: Math.round(calculatePercentile(sortedValues, 25) * 10) / 10,
    p50: Math.round(calculatePercentile(sortedValues, 50) * 10) / 10,
    p75: Math.round(calculatePercentile(sortedValues, 75) * 10) / 10,
    p90: Math.round(calculatePercentile(sortedValues, 90) * 10) / 10,
    mean: Math.round(calculateMean(sortedValues) * 10) / 10,
    sampleSize: values.length
  };
}

// Get available filter combinations (for debugging)
export function getDataCoverage() {
  return {
    totalRecords: FULL_DATA.length,
    availableMetrics: Object.keys(METRIC_FIELD_MAP),
    availableFilters: Object.keys(FILTER_FIELD_MAP)
  };
}
