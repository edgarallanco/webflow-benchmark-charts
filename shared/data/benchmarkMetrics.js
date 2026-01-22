// Benchmark Survey Metrics Configuration
// Extracted from Scale VP benchmark survey page

export const BENCHMARK_CATEGORIES = {
  'overall-performance-metrics': {
    id: 'overall-performance-metrics',
    label: 'Overall Performance Metrics',
    metrics: [
      {
        name: 'Annual Growth Rate',
        label: 'Annual Growth Rate',
        description: 'Year-over-year ARR growth rate, expressed as a percentage',
        format: 'percentage'
      },
      {
        name: 'Net Revenue Retention Rate',
        label: 'Net Revenue Retention Rate',
        description: 'Existing ARR plus expansion minus churn / contraction, divided by existing ARR, expressed as a percentage (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Gross Revenue Retention Rate',
        label: 'Gross Revenue Retention Rate',
        description: 'Existing ARR minus churn / contraction, divided by existing ARR, expressed as a percentage (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Blended CAC Ratio',
        label: 'Blended CAC Ratio',
        description: 'Fully-loaded S&M expenses divided by new logo and expansion ARR (for the last quarter)',
        format: 'ratio'
      },
      {
        name: 'CAC Payback Period',
        label: 'CAC Payback Period (Months)',
        description: 'Fully-loaded S&M expenses for new logo acquisition divided by gross margin from new logo ARR, expressed in months (for the last quarter)',
        format: 'months'
      },
      {
        name: 'Sales Cycle Length (Months)',
        label: 'Sales Cycle Length (Months)',
        description: 'Average length of time from SQO creation to Closed:Won deal, expressed in months',
        format: 'months'
      },
      {
        name: 'Win Rate Percentage',
        label: 'Win Rate Percentage',
        description: 'Percentage of SQOs that converted to Closed:Won deals (for the last quarter)',
        format: 'percentage'
      }
    ]
  },
  'revenue-contribution-metrics': {
    id: 'revenue-contribution-metrics',
    label: 'Revenue Contribution Metrics',
    metrics: [
      {
        name: 'Revenue Contribution Percentage by Product-led Growth',
        label: 'Revenue Contribution Percentage by Product-led Growth',
        description: 'Percentage of revenue from PLG (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Revenue Contribution Percentage by Direct Inside Sales',
        label: 'Revenue Contribution Percentage by Direct Inside Sales',
        description: 'Percentage of revenue from inside sales (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Revenue Contribution Percentage by Direct Outside Sales',
        label: 'Revenue Contribution Percentage by Direct Outside Sales',
        description: 'Percentage of revenue from outside sales (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Revenue Contribution Percentage by Channels',
        label: 'Revenue Contribution Percentage by Partners and Channel',
        description: 'Percentage of revenue from channel partners (for the last quarter)',
        format: 'percentage'
      }
    ]
  },
  'rep-quota': {
    id: 'rep-quota',
    label: 'Rep & Quota Attainment Metrics',
    metrics: [
      {
        name: 'Quota Attainment Percentage (Annual)',
        label: 'Quota Attainment Percentage (Annual)',
        description: 'Overall sales attainment (for the last year)',
        format: 'percentage'
      },
      {
        name: 'Quota Attainment Percentage (Most Recent Period)',
        label: 'Quota Attainment Percentage (Most Recent Period)',
        description: 'Overall sales attainment (for the last quota period)',
        format: 'percentage'
      },
      {
        name: 'Quota to Compensation Ratio',
        label: 'Quota to Compensation Ratio',
        description: 'Average ratio of quota to on-target rep earnings (for the last year)',
        format: 'ratio'
      },
      {
        name: 'Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps',
        label: 'Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps',
        description: 'Percentage of all reps exceeding quota (for the last year)',
        format: 'percentage'
      },
      {
        name: 'Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps',
        label: 'Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps',
        description: 'Percentage of fully ramped reps exceeding quota (for the last year)',
        format: 'percentage'
      },
      {
        name: 'Sales Rep Turnover Rate',
        label: 'Annual Sales Rep Turnover Rate',
        description: 'Rep departures over the last year divided by total number of reps one year ago, expressed as a percentage',
        format: 'percentage'
      },
      {
        name: 'Rep Time to Fully Ramped',
        label: 'Time for Rep to Fully Ramp (Months)',
        description: 'Average time for new reps to fully ramp, expressed in months (for the last year)',
        format: 'months'
      }
    ]
  },
  'pipeline': {
    id: 'pipeline',
    label: 'Pipeline Metrics',
    metrics: [
      {
        name: 'Pipeline Coverage Ratio',
        label: 'Pipeline Coverage Ratio',
        description: 'Pipeline at the start of last quarter divided by new ARR closed in quarter',
        format: 'ratio'
      },
      {
        name: 'Pipeline From Inbound Hand Raisers',
        label: 'Percentage of Pipeline From Inbound Hand Raisers',
        description: 'Percentage of pipeline from inbounds across all sources (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Pipeline Contribution Percentage By All Marketing Channels',
        label: 'Pipeline Contribution Percentage by All Marketing Channels',
        description: 'Percentage of pipeline generated by marketing (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Pipeline Contribution Percentage By Outbound SDRs',
        label: 'Pipeline Contribution Percentage by Outbound SDRs',
        description: 'Percentage of pipeline generated by outbound SDRs (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Pipeline Contribution Percentage by Sales Reps',
        label: 'Pipeline Contribution Percentage by Sales Reps',
        description: 'Percentage of pipeline generated by sales reps (for the last quarter)',
        format: 'percentage'
      },
      {
        name: 'Pipeline Contribution Percentage By Partners And Channel',
        label: 'Pipeline Contribution Percentage by Partners and Channel',
        description: 'Percentage of pipeline generated by channel partners (for the last quarter)',
        format: 'percentage'
      }
    ]
  },
  'headcount-ratios': {
    id: 'headcount-ratios',
    label: 'Headcount Ratios',
    metrics: [
      {
        name: 'Marketing Headcount as Percentage of Total GTM Headcount',
        label: 'Marketing Headcount as Percentage of Total GTM Headcount',
        description: '',
        format: 'percentage'
      },
      {
        name: 'Sales Headcount as Percentage of Total GTM Headcount',
        label: 'Sales Headcount as Percentage of Total GTM Headcount',
        description: '',
        format: 'percentage'
      },
      {
        name: 'Customer Success Headcount as Percentage of Total GTM Headcount',
        label: 'Customer Success Headcount as Percentage of Total GTM Headcount',
        description: '',
        format: 'percentage'
      },
      {
        name: 'Ops Headcount as Percentage of Total GTM Headcount',
        label: 'Ops Headcount as Percentage of Total GTM Headcount',
        description: '',
        format: 'percentage'
      }
    ]
  },
  'headcount-function': {
    id: 'headcount-function',
    label: 'Headcount by Function',
    metrics: []
  }
};
