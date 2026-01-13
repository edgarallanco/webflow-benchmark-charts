import GrowthChart from '../components/GrowthChart';

export const metadata = {
  title: 'Growth Metrics | Scale Benchmark Charts',
  description: 'Y/Y ARR Growth, iCAGR, NNARR, and Revenue Growth benchmarks',
};

export default function GrowthPage() {
  return (
    <div className="benchmark-charts">
      <div className="chart-section">
        <h1 style={{ marginBottom: '20px', color: '#234F41' }}>Growth Metrics</h1>
        <GrowthChart />
      </div>
    </div>
  );
}
