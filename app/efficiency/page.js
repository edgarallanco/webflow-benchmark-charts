import EfficiencyChart from '../components/EfficiencyChart';

export const metadata = {
  title: 'Efficiency Metrics | Scale Benchmark Charts',
  description: 'Net Sales Efficiency, Gross Sales Efficiency, and Magic Number benchmarks',
};

export default function EfficiencyPage() {
  return (
    <div className="benchmark-charts">
      <div className="chart-section">
        <h1 style={{ marginBottom: '20px', color: '#234F41' }}>Efficiency Metrics</h1>
        <EfficiencyChart />
      </div>
    </div>
  );
}
