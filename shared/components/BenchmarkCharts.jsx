import React, { useState } from 'react';
import GrowthChart from './GrowthChart';
import BurnChart from './BurnChart';
import ChurnChart from './ChurnChart';
import EfficiencyChart from './EfficiencyChart';
import { REVENUE_LABELS } from '../data/chartData';

export default function BenchmarkCharts({
  initialRevenueSetup = 'all',
  initialRevenue = 0,
  showControls = true,
  className = ''
}) {
  const [revenueSetup, setRevenueSetup] = useState(initialRevenueSetup);
  const [revenue, setRevenue] = useState(initialRevenue);

  const [growthMetric, setGrowthMetric] = useState(null);
  const [burnMetric, setBurnMetric] = useState(null);
  const [churnMetric, setChurnMetric] = useState(null);
  const [efficiencyMetric, setEfficiencyMetric] = useState(null);

  return (
    <div className={`benchmark-charts ${className}`}>
      {showControls && (
        <div className="revenue-controls">
          <div className="control-group">
            <label>View Mode:</label>
            <div className="button-group">
              <button
                className={revenueSetup === 'range' ? 'active' : ''}
                onClick={() => setRevenueSetup('range')}
              >
                Range View
              </button>
              <button
                className={revenueSetup === 'all' ? 'active' : ''}
                onClick={() => setRevenueSetup('all')}
              >
                All Ranges
              </button>
            </div>
          </div>

          {revenueSetup === 'range' && (
            <div className="control-group">
              <label>Revenue Range: {REVENUE_LABELS[revenue]}</label>
              <input
                type="range"
                min="0"
                max={REVENUE_LABELS.length - 1}
                value={revenue}
                onChange={(e) => setRevenue(parseInt(e.target.value))}
                className="revenue-slider"
              />
            </div>
          )}
        </div>
      )}

      <div className="charts-grid">
        <div className="chart-section">
          <h3>Growth Metrics</h3>
          <GrowthChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            selectedMetric={growthMetric}
            onMetricChange={setGrowthMetric}
          />
        </div>

        <div className="chart-section">
          <h3>Burn Metrics</h3>
          <BurnChart
            revenueSetup={revenueSetup}
            revenue={revenue}
            selectedMetric={burnMetric}
            onMetricChange={setBurnMetric}
          />
        </div>

        <div className="chart-section">
          <h3>Churn Metrics</h3>
          <ChurnChart
            selectedMetric={churnMetric}
            onMetricChange={setChurnMetric}
          />
        </div>

        <div className="chart-section">
          <h3>Efficiency Metrics</h3>
          <EfficiencyChart
            selectedMetric={efficiencyMetric}
            onMetricChange={setEfficiencyMetric}
          />
        </div>
      </div>
    </div>
  );
}
