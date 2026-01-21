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

export default function BenchmarkChartsLayout({ className = '' }) {
  const [selectedRevenue, setSelectedRevenue] = useState('all');

  const getRevenueSetupAndIndex = () => {
    const option = REVENUE_OPTIONS.find(opt => opt.value === selectedRevenue);
    if (!option || option.value === 'all') {
      return { revenueSetup: 'all', revenue: 0 };
    }
    return { revenueSetup: 'range', revenue: option.index };
  };

  const { revenueSetup, revenue } = getRevenueSetupAndIndex();

  return (
    <div className={`benchmark-charts-layout ${className}`}>
      {/* Subtle Divider */}
      <div className="layout-divider"></div>

      {/* Header Section */}
      <div className="layout-header">
        <h2 className="layout-title">Performance Benchmarks</h2>
        <p className="layout-description">
          See where you stand. Compare your Growth, Burn, Churn, and Efficiency against more than 1,000 private companies at your stage.
        </p>
      </div>

      {/* Revenue Selector */}
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

      {/* Charts Grid */}
      <div className="charts-grid">
        <div className="chart-item">
          <GrowthChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>
        <div className="chart-item">
          <BurnChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>
        <div className="chart-item">
          <ChurnChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>
        <div className="chart-item">
          <EfficiencyChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            showRevenueControls={false}
            showExpandIcon={true}
          />
        </div>
      </div>
    </div>
  );
}
