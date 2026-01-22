import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Scale Benchmark Charts</h1>
      <p>Interactive benchmark charts for SaaS metrics.</p>

      <h2>Available Charts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/benchmark-survey" style={{ fontSize: '18px', color: '#0D71A9' }}>
            📋 Benchmark Survey (New!)
          </Link>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            Interactive benchmark data from 175+ SaaS companies with filtering
          </p>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/all" style={{ fontSize: '18px', color: '#0D71A9' }}>
            📊 All Charts
          </Link>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            View all 4 benchmark charts with interactive controls
          </p>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/growth" style={{ fontSize: '18px', color: '#0D71A9' }}>
            📈 Growth Chart
          </Link>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            Y/Y ARR Growth, iCAGR, NNARR, Revenue Growth
          </p>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/burn" style={{ fontSize: '18px', color: '#0D71A9' }}>
            🔥 Burn Chart
          </Link>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            Burn Multiple, Rule of 40, Operating Margin
          </p>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/churn" style={{ fontSize: '18px', color: '#0D71A9' }}>
            📉 Churn Chart
          </Link>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            Annualized Gross Churn, Annualized Retention
          </p>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link href="/efficiency" style={{ fontSize: '18px', color: '#0D71A9' }}>
            ⚡ Efficiency Chart
          </Link>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>
            Net Sales Efficiency, Gross Sales Efficiency, Magic Number
          </p>
        </li>
      </ul>
    </div>
  );
}
