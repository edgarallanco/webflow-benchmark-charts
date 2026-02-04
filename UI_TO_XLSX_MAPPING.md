# UI to XLSX Data Mapping

This document shows how UI elements map to the authoritative xlsx data source.

## Filter Mappings

### UI Filter → XLSX Field Name

| UI Filter Key | XLSX Field Name |
|---------------|-----------------|
| `growth-rate` | `Growth Rate` |
| `arr` | `ARR` |
| `number-of-employees` | `Number of Employees` |
| `acv-last-12-months` | `Average ACV` |
| `primary-pricing-model` | `Primary Pricing Model` |
| `primary-customer-target-segment` | `Primary Customer Target Segment` |
| `primary-solution-type` | `Primary Solution Type` |
| `incorporated-ai` | `Incorporated AI` |

### Filter Options → XLSX Data Values

#### Growth Rate Filter
| UI Value | XLSX Data Value | Record Count |
|----------|----------------|--------------|
| `<=10` | `Less than 10%` | 36 |
| `11-20` | `Between 11 and 20%` | 33 |
| `21-30` | `Between 21 and 30%` | 34 |
| `>30` | `Greater than 30%` | 72 |

#### ARR Filter
| UI Value | XLSX Data Value | Record Count |
|----------|----------------|--------------|
| `Less than $1M` | `Less than $1M` | 14 |
| `$1M - $5M` | `$1M - $5M` | 25 |
| `$5M - $20M` | `$5M - $20M` | 46 |
| `$20M - $50M` | `$20M - $50M` | 23 |
| `$50M - $100M` | `$50M - $100M` | 14 |
| `$100M - $250M` | `$100M - $250M` | 28 |
| `$250M - $1B` | `$250M - $1B` | 13 |
| `More than $1B` | `More than $1B` | 12 |

#### Number of Employees Filter
| UI Value | XLSX Data Value | Record Count |
|----------|----------------|--------------|
| `Less than 10` | `Less than 10` | 9 |
| `11 - 25` | `11 - 25` | 12 |
| `26 - 100` | `26 - 100` | 45 |
| `101 - 250` | `101 - 250` | 41 |
| `251 - 1,000` | `251 - 1,000` | 44 |
| `1,001 - 5,000` | `1,001 - 5,000` | 15 |
| `5,001 - 10,000` | `5,001 - 10,000` | 3 |
| `More than 10,000` | `More than 10,000` | 0 |

#### Average ACV Filter
| UI Value | XLSX Data Value | Record Count |
|----------|----------------|--------------|
| `Less than $1K` | `Less than $1K` | 4 |
| `$1K - $5K` | `$1K - $5K` | 11 |
| `$5K - $10K` | `$5K - $10K` | 17 |
| `$10K - $25K` | `$10K - $25K` | 26 |
| `$25K - $50K` | `$25K - $50K` | 34 |
| `$50K - $100K` | `$50K - $100K` | 30 |
| `$100K - $250K` | `$100K - $250K` | 36 |
| `$250K - $1M` | `$250K - $1M` | 11 |
| `More than $1M` | `More than $1M` | 6 |

#### Primary Pricing Model Filter
| UI Value | XLSX Data Value | Record Count |
|----------|----------------|--------------|
| `Hybrid (Subscription + Usage-based)` | `Hybrid (Subscription + Usage-based)` | 53 |
| `Usage-based` | `Usage-based` | 17 |
| `Subscription` | `Subscription` | 105 |

#### Primary Customer Target Segment Filter
| UI Value | XLSX Data Value | Record Count | Notes |
|----------|----------------|--------------|-------|
| `Mid-Market ($10M-$100M)` | Contains `Mid-Market ($10M-$100M)` | 73 | Multi-select field |
| `Commercial ($100M-$1B)` | Contains `Commercial ($100M-$1B)` | 99 | Multi-select field |
| `Enterprise (> $1B)` | Contains `Enterprise (> $1B)` | 102 | Multi-select field |

**Note**: Customer segments use substring matching because respondents can select multiple segments. The XLSX field may contain values like `"Mid-Market ($10M-$100M), Commercial ($100M-$1B)"`.

#### Primary Solution Type Filter
| UI Value | XLSX Data Value | Record Count |
|----------|----------------|--------------|
| `eCommerce` | `eCommerce` | 7 |
| `Horizontal app` | `Horizontal app` | 65 |
| `Infrastructure` | `Infrastructure` | 18 |
| `Security` | `Security` | 10 |
| `Software with a hardware component` | `Software with a hardware component` | 16 |
| `Vertical app` | `Vertical app` | 59 |

#### Incorporated AI Filter
| UI Value | XLSX Data Value | Record Count |
|----------|----------------|--------------|
| `Yes` | `Yes` | 112 |
| `No` | `No` | 63 |

## Metric Mappings

### UI Metric Name → XLSX Field Name

#### Overall Performance Metrics
| UI Metric Name | XLSX Field Name | Format |
|----------------|----------------|--------|
| `Annual Growth Rate` | `Annual Growth Rate` | percentage |
| `Net Revenue Retention Rate` | `Net Revenue Retention Rate` | percentage |
| `Gross Revenue Retention Rate` | `Gross Revenue Retention Rate` | percentage |
| `Blended CAC Ratio` | `Blended CAC Ratio` | ratio |
| `CAC Payback Period` | `CAC Payback Period (Months)` | months |
| `Sales Cycle Length (Months)` | `Sales Cycle Length (Months)` | months |
| `Win Rate Percentage` | `Win Rate Percentage` | percentage |

#### Revenue Contribution Metrics
| UI Metric Name | XLSX Field Name | Format |
|----------------|----------------|--------|
| `Revenue Contribution Percentage by Product-led Growth` | `Revenue Contribution Percentage by Product-led Growth` | percentage |
| `Revenue Contribution Percentage by Direct Inside Sales` | `Revenue Contribution Percentage by Direct Inside Sales` | percentage |
| `Revenue Contribution Percentage by Direct Outside Sales` | `Revenue Contribution Percentage by Direct Outside Sales` | percentage |
| `Revenue Contribution Percentage by Channels` | `Revenue Contribution Percentage by Partners and Channel` | percentage |

#### Rep & Quota Attainment Metrics
| UI Metric Name | XLSX Field Name | Format |
|----------------|----------------|--------|
| `Quota Attainment Percentage (Annual)` | `Quota Attainment Percentage (Annual)` | percentage |
| `Quota Attainment Percentage (Most Recent Period)` | `Quota Attainment Percentage (Most Recent Period)` | percentage |
| `Quota to Compensation Ratio` | `Quota to Compensation Ratio` | ratio |
| `Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps` | `Percentage of Reps Exceeding Quota (Last Fiscal Year) - All Sales Reps` | percentage |
| `Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps` | `Percentage of Reps Exceeding Quota (Last Fiscal Year) - Fully Ramped Reps` | percentage |
| `Percentage of Reps Exceeding Quota (Most Recent Period) - All Sales Reps` | `Percentage of Reps Exceeding Quota (Most Recent Period) - All Sales Reps` | percentage |
| `Percentage of Reps Exceeding Quota (Most Recent Period) - Fully Ramped Reps` | `Percentage of Reps Exceeding Quota (Most Recent Period) - Fully Ramped Reps` | percentage |
| `Sales Rep Turnover Rate` | `Annual Sales Rep Turnover Rate` | percentage |
| `Rep Time to Fully Ramped` | `Time for Rep to Fully Ramp (Months)` | months |

#### Pipeline Metrics
| UI Metric Name | XLSX Field Name | Format |
|----------------|----------------|--------|
| `Pipeline Coverage Ratio` | `Pipeline Coverage Ratio` | ratio |
| `Pipeline From Inbound Hand Raisers` | `Percentage of Pipeline From Inbound Hand Raisers` | percentage |
| `Pipeline Contribution Percentage By All Marketing Channels` | `Pipeline Contribution Percentage By All Marketing Channels` | percentage |
| `Pipeline Contribution Percentage By Outbound SDRs` | `Pipeline Contribution Percentage By Outbound SDRs` | percentage |
| `Pipeline Contribution Percentage by Sales Reps` | `Pipeline Contribution Percentage by Sales Reps` | percentage |
| `Pipeline Contribution Percentage By Partners And Channel` | `Pipeline Contribution Percentage By Partners And Channel` | percentage |

#### Headcount Ratios
| UI Metric Name | XLSX Field Name | Format | Special Handling |
|----------------|----------------|--------|------------------|
| `Marketing Headcount as Percentage of Total GTM Headcount` | `Marketing Headcount as Percentage of Total GTM Headcount` | percentage | ×100 multiplier |
| `Sales Headcount as Percentage of Total GTM Headcount` | `Sales Headcount as Percentage of Total GTM Headcount` | percentage | ×100 multiplier |
| `Customer Success Headcount as Percentage of Total GTM Headcount` | `Customer Success Headcount as Percentage of Total GTM Headcount` | percentage | ×100 multiplier |
| `Ops Headcount as Percentage of Total GTM Headcount` | `Ops Headcount as Percentage of Total GTM Headcount` | percentage | ×100 multiplier |
| `Partners and Channel Headcount as a Percentage of Total GTM Headcount` | `Partners and Channel Headcount as a Percentage of Total GTM Headcount` | percentage | ×100 multiplier |
| `SDR to Sales Rep Ratio` | `SDR to Sales Rep Ratio` | ratio | - |
| `Sales Engineer to Sales Rep Ratio` | `Sales Engineer to Sales Rep Ratio` | ratio | - |
| `Customer Success to Sales Rep Ratio` | `Customer Success to Sales Rep Ratio` | ratio | - |

**Note**: Headcount ratio percentages are stored as decimals (0.157) in the XLSX and multiplied by 100 for display (15.7%).

#### Headcount by Function
| UI Metric Name | XLSX Field Name | Format |
|----------------|----------------|--------|
| `Marketing Headcount` | `Marketing Headcount` | number |
| `Marketing Ops Headcount` | `Marketing Ops Headcount` | number |
| `SDR Headcount` | `SDR Headcount` | number |
| `Sales Rep Headcount` | `Sales Rep Headcount` | number |
| `Sales Engineer Headcount` | `Sales Engineer Headcount` | number |
| `Sales Manager Headcount` | `Sales manager headcount` | number |
| `Sales Ops Headcount` | `Sales Ops Headcount` | number |
| `Customer Success Headcount` | `Customer Success Headcount` | number |
| `Customer Success Ops Headcount` | `Customer Success Ops Headcount` | number |
| `RevOps Headcount` | `RevOps Headcount` | number |
| `Partners and Channel Headcount` | `Partners And Channel Headcount` | number |

**Note**: "Sales Manager Headcount" maps to `Sales manager headcount` (lowercase 'm') in XLSX.

## XLSX Sheet Structure

The authoritative XLSX file contains 5 sheets:

### 1. Raw data
- **175 records** (survey responses)
- **98 fields** (all survey questions)
- Headers in row 3, data starts row 4
- Source for all calculations

### 2. Numerical questions
- **45 metrics** with pre-calculated statistics
- Shows p10, p25, p50, p75, p90, mean for each metric
- Used for validation only (we calculate live from raw data)

### 3. Categorical questions
- **10 categories** with frequency distributions
- Shows N and % of respondents for each option
- Categories: Growth Rate, ARR, Number of Employees, Average ACV, Primary Pricing Model, Primary Customer Target Segment, Primary Solution Type, Incorporated AI, User Department, Title Level

### 4. Validations
- **12 validation lists** for filter dropdowns
- Defines allowed values for each filter category
- Format: Column headers in row 2, options in rows 4+

### 5. Filters
- **12 filter definitions** with defaults
- Defines which filters are available and their settings

## Data Processing Flow

```
User selects filters in UI
    ↓
UI filter keys mapped to XLSX field names
    ↓
UI filter values mapped to XLSX data values
    ↓
Raw data (175 records) filtered by criteria
    ↓
Extract values for requested metric (using field mapping)
    ↓
Apply special handling (×100 for headcount ratios)
    ↓
Calculate statistics (p10, p25, p50, p75, p90, mean)
    ↓
Display in chart
```

## Special Cases

### 1. Customer Segment Filtering
Uses **substring matching** because respondents can select multiple segments:
- XLSX value: `"Mid-Market ($10M-$100M), Commercial ($100M-$1B)"`
- Matches both: `Mid-Market ($10M-$100M)` AND `Commercial ($100M-$1B)` filters

### 2. Growth Rate Value Mapping
UI uses compact notation, XLSX uses full labels:
- UI: `<=10` → XLSX: `Less than 10%`
- UI: `11-20` → XLSX: `Between 11 and 20%`
- UI: `21-30` → XLSX: `Between 21 and 30%`
- UI: `>30` → XLSX: `Greater than 30%`

### 3. Headcount Ratio Multiplier
These 5 metrics stored as decimals, need ×100:
- Marketing Headcount as Percentage of Total GTM Headcount
- Sales Headcount as Percentage of Total GTM Headcount
- Customer Success Headcount as Percentage of Total GTM Headcount
- Ops Headcount as Percentage of Total GTM Headcount
- Partners and Channel Headcount as Percentage of Total GTM Headcount

Example: XLSX `0.157` → Display `15.7%`

## Verification

All mappings verified with 100% accuracy:
- ✓ 17,150 data cells match XLSX
- ✓ 57 categorical option counts match XLSX
- ✓ All filter options match XLSX validations sheet
- ✓ All calculations match XLSX numerical questions sheet
