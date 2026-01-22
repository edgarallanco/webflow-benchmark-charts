// Paste this into the browser console on https://www.scalevp.com/benchmark-survey/
// This will extract all benchmark data and download it as a JSON file

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

  async function fetchBenchmark(metric) {
    const formData = new FormData();
    formData.append('action', 'get_benchmark_survey_data');
    formData.append('nonce', epic_benchmark_survey_ajax.nonce);
    formData.append('benchmark', metric);
    formData.append('filters', JSON.stringify({}));

    const response = await fetch(epic_benchmark_survey_ajax.ajax_url, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    return data.success ? data.data : null;
  }

  console.log('🚀 Starting benchmark data extraction...');
  console.log(`📊 Fetching ${METRICS.length} metrics...\n`);

  const results = {};
  let successCount = 0;

  for (const metric of METRICS) {
    console.log(`Fetching: ${metric}`);

    try {
      const data = await fetchBenchmark(metric);

      if (data && data.percentiles) {
        results[metric] = data.percentiles;
        console.log(`  ✓ p10: ${data.percentiles.p10}, p25: ${data.percentiles.p25}, p50: ${data.percentiles.p50}, p75: ${data.percentiles.p75}, p90: ${data.percentiles.p90}, mean: ${data.percentiles.mean}`);
        successCount++;
      } else {
        console.log(`  ✗ No data returned`);
      }
    } catch (error) {
      console.log(`  ✗ Error: ${error.message}`);
    }

    // Wait 300ms between requests to be nice to the server
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  console.log(`\n✅ Extraction complete!`);
  console.log(`📈 Successfully fetched: ${successCount}/${METRICS.length} metrics`);

  // Download as JSON file
  const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'scale-benchmark-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('💾 Downloaded: scale-benchmark-data.json');
  console.log('\n📋 Preview of extracted data:');
  console.log(JSON.stringify(results, null, 2).substring(0, 500) + '...');

  return results;
})();
