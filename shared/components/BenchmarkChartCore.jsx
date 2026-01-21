import React, { useState, useEffect, useMemo } from 'react';
import ClientChart from './ClientChart';
import { buildChartOptions, getMetricKeys, getMetricTitle, getMetricDescription } from '../utils/chartOptions';
import { REVENUE_LABELS } from '../data/chartData';

/**
 * BenchmarkChartCore - Pure React chart component (no Next.js dependencies)
 * Can be used by both Next.js app and Code Components
 */
export default function BenchmarkChartCore({
  chartConfig,
  chartType,
  revenueSetup: initialRevenueSetup = 'all',
  revenue: initialRevenue = 0,
  selectedMetric,
  onMetricChange,
  showRevenueControls = true,
  showExpandIcon = true,
  onExpand,
  className = ''
}) {
  const [currentMetric, setCurrentMetric] = useState(
    selectedMetric || chartConfig.default
  );

  // Internal state for revenue controls (only used when showRevenueControls is true in expanded view)
  const [internalRevenueSetup, setInternalRevenueSetup] = useState(initialRevenueSetup);
  const [internalRevenue, setInternalRevenue] = useState(initialRevenue);
  const [isExpanded, setIsExpanded] = useState(false);

  // Use internal state when revenue controls are shown and expanded, otherwise use props
  const activeRevenueSetup = (isExpanded && showRevenueControls) ? internalRevenueSetup : initialRevenueSetup;
  const activeRevenue = (isExpanded && showRevenueControls) ? internalRevenue : initialRevenue;

  // Update internal state when props change
  useEffect(() => {
    setInternalRevenueSetup(initialRevenueSetup);
    setInternalRevenue(initialRevenue);
  }, [initialRevenueSetup, initialRevenue]);

  useEffect(() => {
    if (selectedMetric && selectedMetric !== currentMetric) {
      setCurrentMetric(selectedMetric);
    }
  }, [selectedMetric, currentMetric]);

  // Rebuild chart options whenever metric or revenue settings change
  const options = useMemo(() => {
    return buildChartOptions(
      chartConfig,
      currentMetric,
      activeRevenueSetup,
      activeRevenue
    );
  }, [chartConfig, currentMetric, activeRevenueSetup, activeRevenue]);

  const metricKeys = getMetricKeys(chartConfig);

  const handleMetricChange = (newMetric) => {
    setCurrentMetric(newMetric);
    if (onMetricChange) {
      onMetricChange(newMetric);
    }
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    if (onExpand) {
      onExpand(!isExpanded);
    }
  };

  const description = getMetricDescription(chartConfig, currentMetric);

  // Only show revenue controls for charts that support it (categories === 3)
  const supportsRevenueControl = chartConfig.categories === 3;

  return (
    <div className={`benchmark-chart ${className} ${isExpanded ? 'expanded' : ''}`}>
      <div className="chart-card">
        {/* Revenue Range Controls - Only show in expanded view for supported charts */}
        {isExpanded && showRevenueControls && supportsRevenueControl && (
          <div className="revenue-range-controls">
            <div className="revenue-mode">
              <span className="control-label">REVENUE RANGE:</span>
              <label className="radio-label">
                <input
                  type="radio"
                  name={`revenue-mode-${chartType}`}
                  value="all"
                  checked={internalRevenueSetup === 'all'}
                  onChange={() => setInternalRevenueSetup('all')}
                />
                ALL
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name={`revenue-mode-${chartType}`}
                  value="range"
                  checked={internalRevenueSetup === 'range'}
                  onChange={() => setInternalRevenueSetup('range')}
                />
                CUSTOM RANGE
              </label>
            </div>

            {internalRevenueSetup === 'range' && (
              <div className="revenue-slider-container">
                <div className="slider-label">SELECT YOUR COMPANY REVENUE:</div>
                <div className="slider-labels">
                  {REVENUE_LABELS.map((label, index) => (
                    <span key={index} className="slider-tick-label">{label}</span>
                  ))}
                </div>
                <input
                  type="range"
                  min="0"
                  max={REVENUE_LABELS.length - 1}
                  value={internalRevenue}
                  onChange={(e) => setInternalRevenue(parseInt(e.target.value))}
                  className="revenue-slider"
                  step="1"
                />
              </div>
            )}
          </div>
        )}

        {/* Chart Header with Title and Expand Icon */}
        <div className="chart-header">
          <h3 className="chart-title">{chartConfig.title}</h3>

          {showExpandIcon && (
            <button
              className="expand-button"
              onClick={handleExpand}
              aria-label={isExpanded ? "Close chart" : "Expand chart"}
            >
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30.222" height="30.222" rx="6.04441" fill="#E6E1D6"></rect>
<path d="M6.42383 6.34765L12.74 12.6639" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round"></path>
<path d="M12.7402 6.34766H6.42404V12.6639" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M23.7988 6.3496L17.4826 12.6658" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round"></path>
<path d="M17.4824 6.34961H23.7986V12.6658" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M6.42383 23.875L12.74 17.5588" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round"></path>
<path d="M12.7402 23.875L6.42404 23.875L6.42404 17.5588" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M23.7988 23.875L17.4826 17.5588" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round"></path>
<path d="M17.4824 23.875L23.7986 23.875L23.7986 17.5588" stroke="#20211B" stroke-width="1.27607" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
            </button>
          )}
        </div>

        {/* Metric Selector Tabs - Only show in expanded view when multiple metrics */}
        {isExpanded && metricKeys.length > 1 && (
          <div className="metric-selector">
            {metricKeys.map(key => (
              <button
                key={key}
                className={`metric-button ${currentMetric === key ? 'active' : ''}`}
                onClick={() => handleMetricChange(key)}
              >
                {getMetricTitle(chartConfig, key)}
              </button>
            ))}
          </div>
        )}

        {/* Chart Description - Only show in expanded view */}
        {isExpanded && description && (
          <div
            className="chart-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <div className="chart-container">
          <ClientChart
            key={`${chartType}-${currentMetric}-${activeRevenueSetup}-${activeRevenue}-${isExpanded ? 'expanded' : 'normal'}`}
            options={options}
            series={options.series}
            type={chartConfig.type}
            height={isExpanded ? 500 : (typeof window !== 'undefined' && window.innerWidth <= 768 ? 300 : 400)}
          />
        </div>
      </div>
    </div>
  );
}
