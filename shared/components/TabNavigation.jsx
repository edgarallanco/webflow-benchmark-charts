import React from 'react';

const BENCHMARK_CATEGORIES = [
  { id: 'overall', label: 'Overall Performance Metrics' },
  { id: 'revenue', label: 'Revenue Contribution Metrics' },
  { id: 'rep-quota', label: 'Rep & Quota Attainment Metrics' },
  { id: 'pipeline', label: 'Pipeline Metrics' },
  { id: 'headcount-ratios', label: 'Headcount Ratios' },
  { id: 'headcount-function', label: 'Headcount by Function' }
];

export default function TabNavigation({ activeTab, onTabChange, className = '' }) {
  return (
    <div className={`tab-navigation ${className}`}>
      <div className="tab-scroll-container">
        {BENCHMARK_CATEGORIES.map(category => (
          <button
            key={category.id}
            className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => onTabChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
