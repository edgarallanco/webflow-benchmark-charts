/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimize for production
  swcMinify: true,

  // Configure transpilation for ApexCharts
  transpilePackages: ['react-apexcharts', 'apexcharts'],

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Output configuration for static export (if needed)
  // Uncomment if you want to deploy as static HTML
  // output: 'export',
};

module.exports = nextConfig;
