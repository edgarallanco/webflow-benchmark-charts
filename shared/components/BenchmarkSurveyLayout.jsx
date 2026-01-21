import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import TabNavigation from './TabNavigation';

export default function BenchmarkSurveyLayout({ className = '', children }) {
  const [activeTab, setActiveTab] = useState('overall');
  const [filters, setFilters] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Filters changed:', newFilters);
  };

  return (
    <div className={`benchmark-survey-layout ${className}`}>
      {/* Header Section */}
      <div className="survey-header">
        <div className="survey-header-accent"></div>
        <h1 className="survey-title">Scale GTM Benchmarks</h1>
        <p className="survey-description">
          2025 benchmarks from 175 high-growth startups. Filter and compare key GTM metrics across different company segments.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="survey-content">
        {/* Mobile Filter Toggle */}
        <button
          className="mobile-filter-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.5 5.83333H17.5M5.83333 10H14.1667M8.33333 14.1667H11.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Filters
        </button>

        {/* Sidebar Filters */}
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
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>

        {/* Main Area */}
        <div className="survey-main">
          {/* Tab Navigation */}
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Data Display Area */}
          <div className="survey-data-area">
            {children || (
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
                  Choose from the tabs above and apply filters to see relevant benchmark data
                </p>
              </div>
            )}
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
  );
}
