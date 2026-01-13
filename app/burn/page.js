import BurnChart from '../components/BurnChart';

export const metadata = {
  title: 'Burn Metrics | Scale Benchmark Charts',
  description: 'Burn Multiple, Rule of 40, and Operating Margin benchmarks',
};

export default function BurnPage() {
  return (
    <div className="benchmark-charts">
      <div className="chart-section">
        <h1 style={{ marginBottom: '20px', color: '#234F41' }}>Burn Metrics</h1>
        <BurnChart />
      </div>
    </div>
  );
}
