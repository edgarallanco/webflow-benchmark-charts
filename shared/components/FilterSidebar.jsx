import React, { useState } from 'react';

const FILTER_SECTIONS = [
  {
    id: 'growthRate',
    title: 'Growth Rate',
    options: ['<=10%', '11-20%', '21-30%', '>30%']
  },
  {
    id: 'arr',
    title: 'ARR',
    options: ['<$1M', '$1M-$2.5M', '$2.5M-$5M', '$5M-$10M', '$10M-$25M', '$25M-$50M', '$50M-$100M', '>$100M']
  },
  {
    id: 'employees',
    title: 'Number of Employees',
    options: ['<10', '10-25', '26-50', '51-100', '101-250', '251-500', '501-1000', '>1000']
  },
  {
    id: 'acv',
    title: 'ACV Last 12 Months',
    options: ['<$5K', '$5K-$10K', '$10K-$25K', '$25K-$50K', '$50K-$100K', '$100K-$250K', '$250K-$500K', '$500K-$1M', '>$1M']
  },
  {
    id: 'pricingModel',
    title: 'Primary Pricing Model',
    options: ['Hybrid', 'Usage-based', 'Subscription']
  },
  {
    id: 'customerSegments',
    title: 'Customer Segments',
    options: ['Mid-Market', 'Commercial', 'Enterprise']
  },
  {
    id: 'solutionType',
    title: 'Primary Solution Type',
    options: ['Infrastructure', 'Developer Tools', 'Data & Analytics', 'Security', 'Collaboration', 'Industry Vertical']
  },
  {
    id: 'aiSolution',
    title: 'AI Solution',
    options: ['Yes', 'No']
  }
];

export default function FilterSidebar({ className = '', onFilterChange }) {
  const [expandedSections, setExpandedSections] = useState(
    FILTER_SECTIONS.reduce((acc, section) => ({ ...acc, [section.id]: true }), {})
  );
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleFilterChange = (sectionId, option) => {
    setSelectedFilters(prev => {
      const sectionFilters = prev[sectionId] || [];
      const newSectionFilters = sectionFilters.includes(option)
        ? sectionFilters.filter(f => f !== option)
        : [...sectionFilters, option];

      const newFilters = {
        ...prev,
        [sectionId]: newSectionFilters.length > 0 ? newSectionFilters : undefined
      };

      // Remove undefined entries
      Object.keys(newFilters).forEach(key => {
        if (newFilters[key] === undefined) {
          delete newFilters[key];
        }
      });

      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    onFilterChange?.({});
  };

  const hasActiveFilters = Object.keys(selectedFilters).length > 0;

  return (
    <div className={`filter-sidebar ${className}`}>
      <div className="filter-header">
        <h3 className="filter-title">Filters</h3>
        {hasActiveFilters && (
          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear all
          </button>
        )}
      </div>

      <div className="filter-sections">
        {FILTER_SECTIONS.map(section => (
          <div key={section.id} className="filter-section">
            <button
              className="filter-section-header"
              onClick={() => toggleSection(section.id)}
            >
              <span className="filter-section-title">{section.title}</span>
              <svg
                className={`filter-section-icon ${expandedSections[section.id] ? 'expanded' : ''}`}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {expandedSections[section.id] && (
              <div className="filter-options">
                {section.options.map(option => {
                  const isSelected = selectedFilters[section.id]?.includes(option);
                  return (
                    <label key={option} className="filter-option">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleFilterChange(section.id, option)}
                      />
                      <span className="filter-option-label">{option}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
