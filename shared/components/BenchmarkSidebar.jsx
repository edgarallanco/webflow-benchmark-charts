'use client';

import React, { useState } from 'react';
import { BENCHMARK_CATEGORIES } from '../data/benchmarkMetrics';

export default function BenchmarkSidebar({
  activeCategory,
  selectedMetric,
  onCategoryChange,
  onMetricSelect,
  className = ''
}) {
  const [expandedCategories, setExpandedCategories] = useState({
    'overall-performance-metrics': true
  });
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (categoryId) => {
    // Single selection - close all others, toggle this one
    setExpandedCategories(prev => {
      const isCurrentlyExpanded = prev[categoryId];
      return {
        [categoryId]: !isCurrentlyExpanded
      };
    });
  };

  return (
    <div className={`benchmark-sidebar ${className}`}>
      {/* Header */}
      <div className="sidebar-header">
        <h2 className="sidebar-title">Choose Your Benchmark</h2>
        <button
          className="filters-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span>Filters</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Top Divider */}
      <div className="sidebar-divider"></div>

      {/* Category List */}
      <div className="category-list">
        {Object.values(BENCHMARK_CATEGORIES).map(category => {
          const isExpanded = expandedCategories[category.id];
          const hasMetrics = category.metrics && category.metrics.length > 0;

          return (
            <div key={category.id} className="category-section">
              <button
                className="category-header"
                onClick={() => {
                  toggleCategory(category.id);
                  if (hasMetrics) {
                    onCategoryChange(category.id);
                  }
                }}
              >
                <span className="category-title">{category.label}</span>
                {hasMetrics && (
                  <svg
                    className={`category-icon ${isExpanded ? 'expanded' : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              {isExpanded && hasMetrics && (
                <div className="metric-list">
                  {category.metrics.map(metric => {
                    const isSelected = selectedMetric?.name === metric.name;

                    return (
                      <button
                        key={metric.name}
                        className={`metric-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => onMetricSelect(metric)}
                      >
                        {metric.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
