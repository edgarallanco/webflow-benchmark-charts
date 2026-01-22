// Test script to verify filter lookup works correctly
// Run with: node shared/data/testFilterLookup.js

import { getBenchmarkData } from './benchmarkData.js';

console.log('Testing benchmark data filter lookup...\n');

// Test 1: Baseline (no filters)
console.log('Test 1: Baseline (no filters)');
const baseline = getBenchmarkData('Annual Growth Rate', {});
console.log('Result:', baseline ? `✓ p50=${baseline.p50}` : '✗ No data');

// Test 2: Single filter - ARR
console.log('\nTest 2: Single filter - ARR: $1M - $5M');
const arrFilter = getBenchmarkData('Annual Growth Rate', { 'arr': ['$1M - $5M'] });
console.log('Result:', arrFilter ? `✓ p50=${arrFilter.p50}` : '✗ No data');

// Test 3: Two filters - ARR + Growth Rate
console.log('\nTest 3: Two filters - ARR: $1M - $5M + Growth Rate: 21-30');
const twoFilters = getBenchmarkData('Annual Growth Rate', {
  'arr': ['$1M - $5M'],
  'growth-rate': ['21-30']
});
console.log('Result:', twoFilters ? `✓ p50=${twoFilters.p50}` : '✗ No data');

// Test 4: Filter with no data
console.log('\nTest 4: Filter combination with no data - Growth Rate: <=10');
const noData = getBenchmarkData('Annual Growth Rate', { 'growth-rate': ['<=10'] });
console.log('Result:', noData ? `✓ p50=${noData.p50}` : '✗ No data (expected)');

// Test 5: Non-existent metric
console.log('\nTest 5: Non-existent metric');
const noMetric = getBenchmarkData('Fake Metric', {});
console.log('Result:', noMetric ? `✓ Found data` : '✗ No data (expected)');

console.log('\n✅ All tests complete!');
