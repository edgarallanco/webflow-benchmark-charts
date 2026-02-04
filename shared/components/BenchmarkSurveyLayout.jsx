'use client';

import React, { useState } from 'react';
import BenchmarkSidebar from './BenchmarkSidebar';
import BenchmarkDataDisplay from './BenchmarkDataDisplay';
import BenchmarkFilters from './BenchmarkFilters';
import { BENCHMARK_CATEGORIES } from '../data/benchmarkMetrics';
import { getChartData } from '../data/benchmarkData';

export default function BenchmarkSurveyLayout({ className = '', children }) {
  const [activeCategory, setActiveCategory] = useState('overall-performance-metrics');
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [filters, setFilters] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const chartDisplayRef = React.useRef(null);

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
          <div className="filters-row-desktop">
            {/* Active Filter Pills - Desktop only (inline with Filters button) */}
            {Object.keys(filters).some(key => filters[key] && filters[key].length > 0) && (
              <div className="filter-pills-container filter-pills-header">
                {Object.entries(filters).map(([filterKey, values]) => {
                  if (!values || values.length === 0) return null;
                  return values.map((value, index) => (
                    <div key={`${filterKey}-${index}`} className="filter-pill">
                      <span className="filter-pill-text">{value}</span>
                      <button
                        className="filter-pill-remove"
                        onClick={() => {
                          const newValues = values.filter(v => v !== value);
                          setFilters({
                            ...filters,
                            [filterKey]: newValues.length > 0 ? newValues : undefined
                          });
                        }}
                        aria-label={`Remove ${value} filter`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M9 3L3 9M3 3L9 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  ));
                })}
              </div>
            )}
            <button
              className={`filters-button filters-button-desktop ${showFilters ? 'active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>Filters</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={showFilters ? 'rotated' : ''}>
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
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

        {/* Mobile Filters Button + Pills - Shows below sidebar on mobile */}
        <div className="filters-row-mobile">
          <button
            className={`filters-button filters-button-mobile ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <span>Filters</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={showFilters ? 'rotated' : ''}>
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Active Filter Pills - Mobile only */}
          {Object.keys(filters).some(key => filters[key] && filters[key].length > 0) && (
            <div className="filter-pills-container filter-pills-mobile">
              {Object.entries(filters).map(([filterKey, values]) => {
                if (!values || values.length === 0) return null;
                return values.map((value, index) => (
                  <div key={`${filterKey}-${index}`} className="filter-pill">
                    <span className="filter-pill-text">{value}</span>
                    <button
                      className="filter-pill-remove"
                      onClick={() => {
                        const newValues = values.filter(v => v !== value);
                        setFilters({
                          ...filters,
                          [filterKey]: newValues.length > 0 ? newValues : undefined
                        });
                      }}
                      aria-label={`Remove ${value} filter`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M9 3L3 9M3 3L9 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                ));
              })}
            </div>
          )}
        </div>

        {/* Main Area */}
        <div className="survey-main-full">
          {/* Data Display Area */}
          <div className="survey-data-area-full">
            {/* Inner wrapper for proper filter positioning */}
            <div className="survey-data-inner">
              {/* Filters Overlay - Constrained to this wrapper */}
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
                  ref={chartDisplayRef}
                  metricName={selectedMetric.name}
                  metricLabel={selectedMetric.label}
                  metricDescription={selectedMetric.description}
                  format={selectedMetric.format}
                  filters={filters}
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
          </div>

          {/* Download Button - Bottom Bar (only show when data is available) */}
          {selectedMetric && getChartData(selectedMetric.name, filters) && (
            <div className="survey-bottom-bar">
              {/* Download Button */}
              <div className="survey-download-section-bottom">
                <button
                  className="download-button"
                  onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                >
                  <span>Download</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2V10M6 10L3 7M6 10L9 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Download Menu */}
                {showDownloadMenu && (
                  <>
                    <div className="download-menu-backdrop" onClick={() => setShowDownloadMenu(false)}></div>
                    <div className="download-menu">
                      <div className="download-menu-header">File Format</div>
                      <button
                        className="download-menu-item"
                        onClick={() => {
                          chartDisplayRef.current?.download('SVG');
                          setShowDownloadMenu(false);
                        }}
                      >
                        SVG
                      </button>
                      <button
                        className="download-menu-item"
                        onClick={() => {
                          chartDisplayRef.current?.download('PNG');
                          setShowDownloadMenu(false);
                        }}
                      >
                        PNG
                      </button>
                      <button
                        className="download-menu-item"
                        onClick={() => {
                          chartDisplayRef.current?.download('CSV');
                          setShowDownloadMenu(false);
                        }}
                      >
                        CSV
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
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
