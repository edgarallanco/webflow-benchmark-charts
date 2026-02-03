'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { getDisabledFilterOptions } from '../data/benchmarkDataProcessor';

// Filter options based on the reference HTML
const FILTER_OPTIONS = {
  'growth-rate': {
    label: 'Growth Rate',
    options: ['<=10', '11-20', '21-30', '>30']
  },
  'arr': {
    label: 'ARR',
    options: [
      'Less than $1M',
      '$1M - $5M',
      '$5M - $20M',
      '$20M - $50M',
      '$50M - $100M',
      '$100M - $250M',
      '$250M - $1B',
      'More than $1B'
    ]
  },
  'number-of-employees': {
    label: '# of Employees',
    options: [
      'Less than 10',
      '11 - 25',
      '26 - 100',
      '101 - 250',
      '251 - 1,000',
      '1,001 - 5,000',
      '5,001 - 10,000',
      'More than 10,000'
    ]
  },
  'acv-last-12-months': {
    label: 'ACV Last 12 Months',
    options: [
      'Less than $1K',
      '$1K - $5K',
      '$5K - $10K',
      '$10K - $25K',
      '$25K - $50K',
      '$50K - $100K',
      '$100K - $250K',
      '$250K - $1M',
      'More than $1M'
    ]
  },
  'primary-pricing-model': {
    label: 'Primary Pricing Model',
    options: [
      'Hybrid (Subscription + Usage-based)',
      'Usage-based',
      'Subscription'
    ]
  },
  'primary-customer-target-segment': {
    label: 'Customer Segments Served',
    options: [
      'Mid-Market ($10M-$100M)',
      'Commercial ($100M-$1B)',
      'Enterprise (> $1B)'
    ]
  },
  'primary-solution-type': {
    label: 'Primary Solution Type',
    options: [
      'eCommerce',
      'Horizontal app',
      'Infrastructure',
      'Security',
      'Software with a hardware component',
      'Vertical app'
    ]
  },
  'incorporated-ai': {
    label: 'Selling AI Solution',
    options: ['Yes', 'No']
  }
};

export default function BenchmarkFilters({ filters, onFiltersChange, className = '' }) {
  const [localFilters, setLocalFilters] = useState(filters);

  // Calculate disabled options based on current local filters
  const disabledOptions = useMemo(() => {
    return getDisabledFilterOptions(localFilters);
  }, [localFilters]);

  const handleOptionToggle = (filterKey, option) => {
    const currentValues = localFilters[filterKey] || [];
    const newValues = currentValues.includes(option)
      ? currentValues.filter(v => v !== option)
      : [...currentValues, option];

    setLocalFilters({
      ...localFilters,
      [filterKey]: newValues.length > 0 ? newValues : undefined
    });
  };

  const clearAllFilters = () => {
    setLocalFilters({});
  };

  const applyFilters = () => {
    onFiltersChange(localFilters);
    // Parent component will handle closing the overlay
  };

  const hasActiveFilters = Object.values(localFilters).some(arr => arr && arr.length > 0);

  return (
    <div className={`benchmark-filters-panel ${className}`}>
      {/* Filter Grid - All Visible */}
      <div className="filters-panel-grid">
        {Object.entries(FILTER_OPTIONS).map(([filterKey, config]) => {
          const selectedValues = localFilters[filterKey] || [];

          return (
            <div key={filterKey} className="filter-column">
              <div className="filter-column-header">{config.label}</div>
              <div className="filter-column-options">
                {config.options.map(option => {
                  const isDisabled = disabledOptions[filterKey]?.includes(option);
                  return (
                    <label key={option} className="filter-checkbox-option">
                      <input
                        type="checkbox"
                        checked={selectedValues.includes(option)}
                        onChange={() => handleOptionToggle(filterKey, option)}
                        disabled={isDisabled}
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="filters-panel-actions">
        <button className="filter-clear-button" onClick={clearAllFilters}>
          Clear
        </button>
        <button className="filter-apply-button" onClick={applyFilters}>
          Apply
        </button>
      </div>
    </div>
  );
}
