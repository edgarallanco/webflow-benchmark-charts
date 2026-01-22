import './globals.css';
import '../shared/styles/charts.css';

export const metadata = {
  title: 'Scale Benchmark Charts',
  description: 'Interactive benchmark charts powered by ApexCharts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
