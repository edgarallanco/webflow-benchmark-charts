'use client';

import React, { useState } from 'react';
import BenchmarkSidebar from './BenchmarkSidebar';
import BenchmarkDataDisplay from './BenchmarkDataDisplay';
import BenchmarkFilters from './BenchmarkFilters';
import { BENCHMARK_CATEGORIES } from '../data/benchmarkMetrics';

export default function BenchmarkSurveyLayout({ className = '', children }) {
  const [activeCategory, setActiveCategory] = useState('overall-performance-metrics');
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [filters, setFilters] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
  };

  const handleMetricSelect = (metric) => {
    setSelectedMetric(metric);
  };

  // Get current category
  const currentCategory = BENCHMARK_CATEGORIES[activeCategory];

  // Set initial metric when component mounts
  React.useEffect(() => {
    if (!selectedMetric && currentCategory && currentCategory.metrics && currentCategory.metrics.length > 0) {
      setSelectedMetric(currentCategory.metrics[0]);
    }
  }, [activeCategory, selectedMetric, currentCategory]);

  // Close filters on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowFilters(false);
        setShowDownloadMenu(false);
      }
    };

    if (showFilters || showDownloadMenu) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [showFilters, showDownloadMenu]);

  return (
    <div className={`benchmark-survey-layout ${className}`}>
      {/* Main Container */}
      <div className="survey-container">
        {/* Top Bar with Choose Benchmark + Filters */}
        <div className="survey-header-bar">
          <h2 className="survey-section-title">Choose Your Benchmark</h2>
          <button
            className={`filters-button ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <span>Filters</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={showFilters ? 'rotated' : ''}>
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* Main Content Area */}
        <div className="survey-content">

        {/* Sidebar */}
        <div className={`survey-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          {isSidebarOpen && (
            <button
              className="mobile-sidebar-close"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
          <BenchmarkSidebar
            activeCategory={activeCategory}
            selectedMetric={selectedMetric}
            onCategoryChange={handleCategoryChange}
            onMetricSelect={handleMetricSelect}
          />
        </div>

        {/* Main Area */}
        <div className="survey-main-full">
          {/* Data Display Area */}
          <div className="survey-data-area-full">
            {/* Filters Overlay - Constrained to this area */}
            {showFilters && (
              <>
                <div className="filters-overlay-backdrop-constrained" onClick={() => setShowFilters(false)}></div>
                <div className="filters-overlay-panel-constrained">
                  <BenchmarkFilters
                    filters={filters}
                    onFiltersChange={(newFilters) => {
                      setFilters(newFilters);
                      setShowFilters(false);
                    }}
                  />
                </div>
              </>
            )}

            {/* Data Content */}
            <div className="survey-data-content">
              {selectedMetric ? (
                <BenchmarkDataDisplay
                  metricName={selectedMetric.name}
                  metricLabel={selectedMetric.label}
                  metricDescription={selectedMetric.description}
                  format={selectedMetric.format}
                  filters={filters}
                  showDownloadMenu={showDownloadMenu}
                  onDownloadMenuToggle={setShowDownloadMenu}
                />
              ) : (
                children || (
                  <div className="survey-placeholder">
                    <div className="placeholder-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3 3v18h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 16l4-4 3 3 5-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="placeholder-title">Select a benchmark to view data</h3>
                    <p className="placeholder-text">
                      Choose a metric from the sidebar to see benchmark data
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Download Button - Bottom Right */}
          <div className="survey-download-section-bottom">
            <button
              className="download-button"
              onClick={() => setShowDownloadMenu(!showDownloadMenu)}
            >
              <span>Download</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1V9M6 9L3 6M6 9L9 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      </div>
    </div>
  );
}
