// Chart configuration and data extracted from original bundle.js
// Revenue range labels used across all charts
export const REVENUE_LABELS = [
  "$0M - $1M",
  "$1M - $2.5M",
  "$2.5M - $5M",
  "$5M - $10M",
  "$10M - $25M",
  "$25M - $50M",
  "$50M - $100M"
];

// Chart colors for the three performance tiers
export const CHART_COLORS = ["#234F41", "#0D71A9", "#E5A819"];

// Percentile tier names
export const TIER_NAMES = {
  GOOD: "Good (50%ile)",
  BETTER: "Better (75%ile)",
  BEST: "Best (90%ile)"
};

// Growth Chart Configuration
export const GROWTH_CHART = {
  default: "y/y arr",
  type: "line",
  categories: 3,
  formatter: (value) => `${value}%`,
  metrics: {
    "y/y arr": {
      title: "Y/Y ARR Growth",
      description: "Growth is the central purpose of a startup. For investors, ARR growth is the most important measure of whether value is being created.",
      tooltip_reversed: true,
      series: {
        [TIER_NAMES.GOOD]: [423, 257, 190, 133, 72, 54, 34],
        [TIER_NAMES.BETTER]: [1046, 520, 325, 205, 122, 84, 56],
        [TIER_NAMES.BEST]: [1932, 911, 590, 362, 172, 120, 90]
      }
    },
    "icagr": {
      title: "iCAGR",
      description: "A Scale Signature metric, the annualized measure of growth of your NNARR vs your ending ARR gives an instantaneous view of your growth rate.",
      tooltip_reversed: true,
      series: {
        [TIER_NAMES.GOOD]: [262, 149, 115, 87, 55, 41, 32],
        [TIER_NAMES.BETTER]: [628, 247, 176, 128, 87, 69, 52],
        [TIER_NAMES.BEST]: [1500, 420, 267, 189, 126, 101, 78]
      }
    },
    "nnarr": {
      title: "NNARR Growth",
      description: 'Measurement of the "Growth of Your Growth" tells you how much more (or less) ARR you are adding this year.',
      tooltip_reversed: true,
      series: {
        [TIER_NAMES.GOOD]: [196, 161, 113, 79, 41, 23, 8],
        [TIER_NAMES.BETTER]: [569, 363, 291, 170, 123, 81, 64],
        [TIER_NAMES.BEST]: [1636, 997, 627, 400, 309, 170, 165]
      }
    },
    "fwd arr": {
      title: "Y/Y Revenue Growth",
      description: "Actual GAAP revenue growth measures the growth of cash actually coming into the business today.",
      tooltip_reversed: true,
      series: {
        [TIER_NAMES.GOOD]: [369, 227, 161, 116, 73, 54, 37],
        [TIER_NAMES.BETTER]: [836, 465, 279, 186, 122, 83, 61],
        [TIER_NAMES.BEST]: [1502, 889, 688, 369, 190, 136, 90]
      }
    }
  }
};

// Burn Chart Configuration
export const BURN_CHART = {
  default: "multiple",
  type: "line",
  categories: 3,
  metrics: {
    "multiple": {
      title: "Burn Multiple",
      description: 'A simple measure of burn relative to results. Burn Multiple measures capital efficiency by dividing Operating Income by Net New ARR, essentially saying "for every dollar in NNARR, you spent $X".',
      tooltip_reversed: false,
      series: {
        [TIER_NAMES.GOOD]: [2.3, 2.3, 2.1, 1.8, 1.5, 1.2, 0.7],
        [TIER_NAMES.BETTER]: [1.1, 1.1, 0.8, 0.7, 0.6, 0.4, 0.2],
        [TIER_NAMES.BEST]: [0.1, 0.1, -0.2, -0.1, -0.6, -0.6, -0.4]
      }
    },
    "rule-of-40": {
      title: "Rule of 40",
      formatter: (value) => `${value}%`,
      description: "A metric derived from GAAP based measures comparing Y/Y Revenue Growth with Operating Margin. While this is useful for later stage and public companies, it's likely less useful for earlier stage startups.",
      tooltip_reversed: true,
      series: {
        [TIER_NAMES.GOOD]: [-116, 0, -28, -18, -7, 0, 12],
        [TIER_NAMES.BETTER]: [376, 233, 105, 73, 34, 29, 38],
        [TIER_NAMES.BEST]: [1037, 682, 429, 194, 106, 71, 57]
      }
    },
    "operating-margin": {
      title: "Operating Margin",
      formatter: (value) => `${value}%`,
      description: "A GAAP based measure used as a proxy for net cash burn. Managing your burn is critical to ensure your runway is long enough to meet your goals.",
      tooltip_reversed: true,
      series: {
        [TIER_NAMES.GOOD]: [-660, -243, -193, -137, -78, -45, -24],
        [TIER_NAMES.BETTER]: [-166, -93, -86, -68, -43, -25, -8],
        [TIER_NAMES.BEST]: [13, -22, -29, -23, -8, -7, 9]
      }
    }
  }
};

// Churn Chart Configuration
export const CHURN_CHART = {
  default: "annualized gross",
  type: "bar",
  categories: 1,
  formatter: (value) => `${value}%`,
  metrics: {
    "annualized gross": {
      title: "Annualized Gross Churn",
      description: "Annualized measure of your customer churn <em>excluding</em> upsell or expansion from your customer base.",
      series: {
        [TIER_NAMES.GOOD]: [-13],
        [TIER_NAMES.BETTER]: [-5],
        [TIER_NAMES.BEST]: [-1]
      }
    },
    "annualized retention": {
      title: "Annualized Retention",
      formatter: (value) => `${value}%`,
      description: "Annualized measure of your customer churn <em>including</em> upsell or expansion from your customer base.",
      series: {
        [TIER_NAMES.GOOD]: [106],
        [TIER_NAMES.BETTER]: [127],
        [TIER_NAMES.BEST]: [165]
      }
    }
  }
};

// Efficiency Chart Configuration
export const EFFICIENCY_CHART = {
  default: "net sales",
  type: "bar",
  categories: 1,
  metrics: {
    "net sales": {
      title: "Net Sales Efficiency",
      description: "Measurement of the efficiency of your entire GTM engine, inclusive of customer churn.",
      series: {
        [TIER_NAMES.GOOD]: [0.7],
        [TIER_NAMES.BETTER]: [1.1],
        [TIER_NAMES.BEST]: [2.2]
      }
    },
    "gross sales": {
      title: "Gross Sales Efficiency",
      description: "Measurement of the efficiency of your GTM acquisition engine without the effects of customer churn.",
      series: {
        [TIER_NAMES.GOOD]: [0.8],
        [TIER_NAMES.BETTER]: [1.3],
        [TIER_NAMES.BEST]: [2.4]
      }
    },
    "magic number": {
      title: "Magic Number",
      description: "A Scale Signature metric, the Magic Number is a GAAP based measure of efficiency, easing the ability to compare across companies.",
      series: {
        [TIER_NAMES.GOOD]: [0.7],
        [TIER_NAMES.BETTER]: [1.3],
        [TIER_NAMES.BEST]: [2.5]
      }
    }
  }
};

// Export all chart configs as a single object for convenience
export const CHARTS = {
  growth: GROWTH_CHART,
  burn: BURN_CHART,
  churn: CHURN_CHART,
  efficiency: EFFICIENCY_CHART
};
