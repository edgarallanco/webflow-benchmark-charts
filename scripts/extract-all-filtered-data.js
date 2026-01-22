// Enhanced script to extract ALL filter combinations from Scale VP benchmark data
// Paste this into the browser console on https://www.scalevp.com/benchmark-survey/
// This will systematically fetch data for all filter combinations and download as JSON

(async function() {
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

  // All filter options extracted from the HTML
  const FILTER_OPTIONS = {
    'growth-rate': ['<=10', '11-20', '21-30', '>30'],
    'arr': [
      'Less than $1M',
      '$1M - $5M',
      '$5M - $20M',
      '$20M - $50M',
      '$50M - $100M',
      '$100M - $250M',
      '$250M - $1B',
      'More than $1B'
    ],
    'number-of-employees': [
      'Less than 10',
      '11 - 25',
      '26 - 100',
      '101 - 250',
      '251 - 1,000',
      '1,001 - 5,000',
      '5,001 - 10,000',
      'More than 10,000'
    ],
    'acv-last-12-months': [
      'Less than $1K',
      '$1K - $5K',
      '$5K - $10K',
      '$10K - $25K',
      '$25K - $50K',
      '$50K - $100K',
      '$100K - $250K',
      '$250K - $1M',
      'More than $1M'
    ],
    'primary-pricing-model': [
      'Hybrid (Subscription + Usage-based)',
      'Usage-based',
      'Subscription'
    ],
    'primary-customer-target-segment': [
      'Mid-Market ($10M-$100M)',
      'Commercial ($100M-$1B)',
      'Enterprise (> $1B)'
    ],
    'primary-solution-type': [
      'eCommerce',
      'Horizontal app',
      'Infrastructure',
      'Security',
      'Software with a hardware component',
      'Vertical app'
    ],
    'incorporated-ai': ['Yes', 'No']
  };

  async function fetchBenchmark(metric, filters) {
    const formData = new FormData();
    formData.append('action', 'get_benchmark_survey_data');
    formData.append('nonce', epic_benchmark_survey_ajax.nonce);
    formData.append('benchmark', metric);
    formData.append('filters', JSON.stringify(filters));

    try {
      const response = await fetch(epic_benchmark_survey_ajax.ajax_url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      return data.success ? data.data : null;
    } catch (error) {
      console.error(`Error fetching ${metric}:`, error);
      return null;
    }
  }

  // Generate all filter combinations to fetch
  function generateFilterCombinations() {
    const combinations = [];

    // 1. Baseline - no filters
    combinations.push({
      label: 'baseline',
      filters: {}
    });

    // 2. Single filter values (one at a time)
    for (const [filterKey, values] of Object.entries(FILTER_OPTIONS)) {
      for (const value of values) {
        combinations.push({
          label: `${filterKey}: ${value}`,
          filters: { [filterKey]: [value] }
        });
      }
    }

    // 3. Common two-filter combinations (ARR + Growth Rate)
    // This captures the most common user queries
    for (const arrValue of FILTER_OPTIONS['arr']) {
      for (const growthValue of FILTER_OPTIONS['growth-rate']) {
        combinations.push({
          label: `arr: ${arrValue} + growth-rate: ${growthValue}`,
          filters: {
            'arr': [arrValue],
            'growth-rate': [growthValue]
          }
        });
      }
    }

    return combinations;
  }

  const combinations = generateFilterCombinations();
  const totalCombinations = combinations.length;
  const totalRequests = METRICS.length * totalCombinations;

  console.log('🚀 Starting FULL benchmark data extraction...');
  console.log(`📊 Metrics: ${METRICS.length}`);
  console.log(`🔍 Filter combinations: ${totalCombinations}`);
  console.log(`📡 Total API calls: ${totalRequests}`);
  console.log(`⏱️  Estimated time: ${Math.ceil(totalRequests * 0.3 / 60)} minutes\n`);

  const results = {};
  let successCount = 0;
  let errorCount = 0;
  let emptyCount = 0;

  for (let i = 0; i < METRICS.length; i++) {
    const metric = METRICS[i];
    results[metric] = {};

    console.log(`\n[${i + 1}/${METRICS.length}] ${metric}`);

    for (let j = 0; j < combinations.length; j++) {
      const combo = combinations[j];
      const progress = `  [${j + 1}/${totalCombinations}]`;

      try {
        const data = await fetchBenchmark(metric, combo.filters);

        if (data && data.percentiles) {
          // Create a key for this filter combination
          const filterKey = JSON.stringify(combo.filters);
          results[metric][filterKey] = {
            percentiles: data.percentiles,
            filters: combo.filters,
            label: combo.label
          };

          console.log(`${progress} ✓ ${combo.label} - p50: ${data.percentiles.p50}`);
          successCount++;
        } else {
          console.log(`${progress} ∅ ${combo.label} - No data`);
          emptyCount++;
        }
      } catch (error) {
        console.log(`${progress} ✗ ${combo.label} - Error: ${error.message}`);
        errorCount++;
      }

      // Wait 300ms between requests to be nice to the server
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }

  console.log(`\n\n✅ Extraction complete!`);
  console.log(`📈 Successful fetches: ${successCount}`);
  console.log(`∅ Empty results: ${emptyCount}`);
  console.log(`✗ Errors: ${errorCount}`);
  console.log(`📊 Total attempts: ${successCount + emptyCount + errorCount}`);

  // Download as JSON file
  const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'scale-benchmark-data-filtered.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('\n💾 Downloaded: scale-benchmark-data-filtered.json');
  console.log('\n📋 Data structure:');
  console.log('  metric -> filterKey -> { percentiles, filters, label }');
  console.log(`  Example: results["Annual Growth Rate"]["{\\"arr\\":[\\"$1M - $5M\\"]}"]`);

  return results;
})();
