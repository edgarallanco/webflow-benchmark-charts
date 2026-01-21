import React, { useState } from 'react';
import GrowthChart from './GrowthChart';
import BurnChart from './BurnChart';
import ChurnChart from './ChurnChart';
import EfficiencyChart from './EfficiencyChart';

const REVENUE_OPTIONS = [
  { label: 'All', value: 'all', index: -1 },
  { label: '$0M - $1M', value: '$0M - $1M', index: 0 },
  { label: '$1M - $2.5M', value: '$1M - $2.5M', index: 1 },
  { label: '$2.5M - $5M', value: '$2.5M - $5M', index: 2 },
  { label: '$5M - $10M', value: '$5M - $10M', index: 3 },
  { label: '$10M - $25M', value: '$10M - $25M', index: 4 },
  { label: '$50M - $100M', value: '$50M - $100M', index: 6 }
];

export default function BenchmarkCharts({
  initialRevenueSetup = 'all',
  initialRevenue = 0,
  showControls = true,
  className = ''
}) {
  const [selectedRevenue, setSelectedRevenue] = useState('all');

  const [growthMetric, setGrowthMetric] = useState(null);
  const [burnMetric, setBurnMetric] = useState(null);
  const [churnMetric, setChurnMetric] = useState(null);
  const [efficiencyMetric, setEfficiencyMetric] = useState(null);

  const getRevenueSetupAndIndex = () => {
    const option = REVENUE_OPTIONS.find(opt => opt.value === selectedRevenue);
    if (!option || option.value === 'all') {
      return { revenueSetup: 'all', revenue: 0 };
    }
    return { revenueSetup: 'range', revenue: option.index };
  };

  const { revenueSetup, revenue } = getRevenueSetupAndIndex();

  return (
    <div className={`benchmark-charts ${className}`}>
      {showControls && (
        <div className="layout-revenue-selector">
          <span className="revenue-selector-label">Select Your Company Revenue:</span>

          {/* Desktop: Radio Buttons */}
          <div className="revenue-options revenue-options-desktop">
            {REVENUE_OPTIONS.map((option) => (
              <label key={option.value} className="revenue-option">
                <input
                  type="radio"
                  name="revenue-range"
                  value={option.value}
                  checked={selectedRevenue === option.value}
                  onChange={(e) => setSelectedRevenue(e.target.value)}
                />
                <span className="revenue-option-label">{option.label}</span>
              </label>
            ))}
          </div>

          {/* Mobile: Dropdown */}
          <select
            className="revenue-dropdown revenue-dropdown-mobile"
            value={selectedRevenue}
            onChange={(e) => setSelectedRevenue(e.target.value)}
          >
            {REVENUE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="charts-grid">
        <div className="chart-section">
          <GrowthChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            selectedMetric={growthMetric}
            onMetricChange={setGrowthMetric}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>

        <div className="chart-section">
          <BurnChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            selectedMetric={burnMetric}
            onMetricChange={setBurnMetric}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>

        <div className="chart-section">
          <ChurnChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            selectedMetric={churnMetric}
            onMetricChange={setChurnMetric}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>

        <div className="chart-section">
          <EfficiencyChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            selectedMetric={efficiencyMetric}
            onMetricChange={setEfficiencyMetric}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>
      </div>
    </div>
  );
}
