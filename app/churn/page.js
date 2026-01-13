import ChurnChart from '../components/ChurnChart';

export const metadata = {
  title: 'Churn Metrics | Scale Benchmark Charts',
  description: 'Annualized Gross Churn and Retention benchmarks',
};

export default function ChurnPage() {
  return (
    <div className="benchmark-charts">
      <div className="chart-section">
        <h1 style={{ marginBottom: '20px', color: '#234F41' }}>Churn Metrics</h1>
        <ChurnChart />
      </div>
    </div>
  );
}
