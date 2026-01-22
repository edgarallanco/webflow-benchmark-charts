// Script to extract all benchmark data from the live Scale VP site
// Run with: node scripts/extract-benchmark-data.js

const fs = require('fs');

// All metrics from the reference files
const METRICS = [
  'Annual Growth Rate',
  'Net Revenue Retention Rate',
  'Gross Revenue Retention Rate',
  'Blended CAC Ratio',
  'CAC Payback Period',
  'Sales Cycle Length (Months)',
  'Win Rate Percentage',
  'Revenue Contribution Percentage by Product-led Growth',
  'Revenue Contribution Percentage by Direct Inside Sales',
  'Revenue Contribution Percentage by Direct Outside Sales',
  'Revenue Contribution Percentage by Channels',
  'Quota Attainment Percentage (Annual)',
  'Quota Attainment Percentage (Most Recent Period)',
  'Quota to Compensation Ratio',
  'Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps',
  'Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps',
  'Percentage of Reps Exceeding Quota (Most Recent Period) - All Sales Reps',
  'Percentage of Reps Exceeding Quota (Most Recent Period) - Fully Ramped Reps',
  'Sales Rep Turnover Rate',
  'Rep Time to Fully Ramped',
  'Pipeline Coverage Ratio',
  'Pipeline From Inbound Hand Raisers',
  'Pipeline Contribution Percentage By All Marketing Channels',
  'Pipeline Contribution Percentage By Outbound SDRs',
  'Pipeline Contribution Percentage by Sales Reps',
  'Pipeline Contribution Percentage By Partners And Channel',
  'Marketing Headcount as Percentage of Total GTM Headcount',
  'Sales Headcount as Percentage of Total GTM Headcount',
  'Customer Success Headcount as Percentage of Total GTM Headcount',
  'Ops Headcount as Percentage of Total GTM Headcount',
  'Marketing Headcount',
  'Marketing Ops Headcount',
  'SDR Headcount',
  'Sales Rep Headcount',
  'Sales Engineer Headcount',
  'Sales Manager Headcount',
  'Sales Ops Headcount',
  'Customer Success Headcount',
  'Customer Success Ops Headcount',
  'RevOps Headcount',
  'Partners and Channel Headcount'
];

// You'll need to get the nonce from the live page
// Visit https://www.scalevp.com/benchmark-survey/
// Open browser console and run: console.log(epic_benchmark_survey_ajax.nonce)
const NONCE = 'YOUR_NONCE_HERE'; // Replace with actual nonce

const ENDPOINT = 'https://www.scalevp.com/wp-admin/admin-ajax.php';

async function fetchBenchmarkData(metric, filters = {}) {
  const formData = new URLSearchParams();
  formData.append('action', 'get_benchmark_survey_data');
  formData.append('nonce', NONCE);
  formData.append('benchmark', metric);
  formData.append('filters', JSON.stringify(filters));

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      return data.data;
    } else {
      console.error(`Error fetching ${metric}:`, data);
      return null;
    }
  } catch (error) {
    console.error(`Network error for ${metric}:`, error);
    return null;
  }
}

async function extractAllData() {
  const results = {};

  console.log('Starting data extraction...');
  console.log(`Fetching ${METRICS.length} metrics...\n`);

  for (const metric of METRICS) {
    console.log(`Fetching: ${metric}`);

    // Fetch with no filters (aggregate data)
    const data = await fetchBenchmarkData(metric, {});

    if (data && data.percentiles) {
      results[metric] = data.percentiles;
      console.log(`  ✓ p10: ${data.percentiles.p10}, p50: ${data.percentiles.p50}, p90: ${data.percentiles.p90}`);
    } else {
      console.log(`  ✗ Failed to fetch`);
    }

    // Be nice to the server - wait 500ms between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Save to file
  const outputPath = './shared/data/extractedBenchmarkData.json';
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\n✓ Data extraction complete!`);
  console.log(`✓ Saved to: ${outputPath}`);
  console.log(`✓ Total metrics: ${Object.keys(results).length}`);
}

// Run the extraction
extractAllData().catch(console.error);
