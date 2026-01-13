# Hybrid Setup: Code Components + Next.js Cloud App

This project supports **BOTH** deployment methods simultaneously:

1. **Code Components** - Draggable components in Webflow Designer
2. **Next.js Cloud App** - Standalone dashboard deployed to Webflow Cloud

Both share the same React components and chart data!

---

## 📦 How It Works

### Shared Foundation
```
shared/
├── components/           # Core React components
│   ├── BenchmarkChartCore.jsx
│   ├── GrowthChart.jsx
│   ├── BurnChart.jsx
│   ├── ChurnChart.jsx
│   ├── EfficiencyChart.jsx
│   └── BenchmarkCharts.jsx
├── data/
│   └── chartData.js     # All chart data (single source of truth)
├── utils/
│   └── chartOptions.js  # ApexCharts configuration
└── styles/
    └── charts.css       # Shared styles
```

### Code Components (DevLink)
```
src/
├── webflow/              # Webflow-specific wrappers
│   ├── GrowthChartWebflow.jsx      # Uses declareComponent
│   ├── BurnChartWebflow.jsx
│   ├── ChurnChartWebflow.jsx
│   ├── EfficiencyChartWebflow.jsx
│   └── BenchmarkChartsWebflow.jsx
└── index.js             # Entry point for Code Components
```

### Next.js Cloud App
```
app/
├── components/          # Next.js wrappers (dynamic imports)
│   ├── GrowthChart.jsx
│   ├── BurnChart.jsx
│   ├── ChurnChart.jsx
│   ├── EfficiencyChart.jsx
│   └── BenchmarkCharts.jsx
├── all/page.js         # Routes
├── growth/page.js
├── burn/page.js
├── churn/page.js
└── efficiency/page.js
```

**Key:** Both `src/` and `app/` import from `shared/` - one source of truth!

---

## 🚀 Deployment

### Option 1: Deploy Both (Recommended)

```bash
# Install dependencies
npm install

# Build everything
npm run build

# Deploy Code Components
npm run webflow:auth
npm run webflow:sync

# Deploy Next.js app (see DEPLOYMENT.md for Webflow Cloud)
```

### Option 2: Code Components Only

```bash
npm install
npm run build:components
npm run webflow:auth
npm run webflow:sync
```

### Option 3: Next.js App Only

```bash
npm install
npm run build:nextjs
# Deploy to Webflow Cloud (see DEPLOYMENT.md)
```

---

## 🎯 When to Use Each

### Use Code Components When:
✅ Embedding a single chart in a blog post
✅ Adding charts to various marketing pages
✅ Giving designers visual control in Designer
✅ Need different chart configs on different pages
✅ Want to configure via Webflow's visual editor

**Example:** Drag a Growth Chart into your "Pricing" page, configure it to show only the $5M-$10M range.

### Use Next.js Cloud App When:
✅ You want a full dashboard page with all charts
✅ Need multiple routes (`/all`, `/growth`, etc.)
✅ Want a standalone charts page
✅ Need to link externally to charts
✅ Prefer iframe embedding

**Example:** Link to `https://charts.yoursite.io/all` from your main site.

### Use Both When:
✅ Maximum flexibility!
✅ Dashboard page + embedded individual charts
✅ Different use cases across your site

**Example:**
- Main nav links to Next.js app at `/charts` (all charts dashboard)
- Blog posts embed individual charts via Code Components
- Landing pages use Code Components for specific metrics

---

## 📝 How to Use

### Code Components in Webflow Designer

1. **Deploy Code Components:**
```bash
npm run components:deploy
```

2. **In Webflow Designer:**
   - Press `L` to open Libraries
   - Find "Scale Benchmark Charts"
   - Click "Install"
   - Drag components onto your page

3. **Configure in Designer:**
   - Select the component
   - Use the right panel to configure props:
     - Revenue Setup: all/range
     - Revenue Range: 0-6
     - Metric: Select from dropdown

### Next.js Cloud App

1. **Deploy to Webflow Cloud:**
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for full instructions
   - Use Webflow CLI or GitHub integration

2. **Use in Webflow:**
   - **Iframe embed:**
   ```html
   <iframe src="https://your-app.webflow.io/all" width="100%" height="1200"></iframe>
   ```
   - **Direct link:**
   ```html
   <a href="https://your-app.webflow.io/all">View Charts Dashboard</a>
   ```

---

## 🔄 Updating Chart Data

**The beauty:** Update once, affects both!

1. **Edit data:**
```javascript
// shared/data/chartData.js
export const GROWTH_CHART = {
  // Update values here
};
```

2. **Rebuild both:**
```bash
npm run build
```

3. **Redeploy:**
```bash
# Code Components
npm run webflow:sync

# Next.js app
# Push to GitHub (if using auto-deploy)
# OR use Webflow CLI
```

Both deployments now have the updated data!

---

## 🎨 Customizing Styles

Styles are shared in `shared/styles/charts.css`:

```css
/* shared/styles/charts.css */
.benchmark-chart {
  /* Your customizations */
}
```

After editing:
```bash
npm run build  # Rebuilds both
```

---

## 🏗️ Project Structure

```
scale-benchmark-charts/
│
├── shared/                      # ⭐ Shared by both
│   ├── components/              # Core React components
│   ├── data/chartData.js        # Single source of truth
│   ├── utils/chartOptions.js
│   └── styles/charts.css
│
├── src/                         # Code Components (DevLink)
│   ├── webflow/                 # Webflow wrappers
│   │   ├── GrowthChartWebflow.jsx
│   │   └── ...
│   └── index.js                 # Entry point
│
├── app/                         # Next.js Cloud App
│   ├── components/              # Next.js wrappers
│   ├── all/page.js
│   ├── growth/page.js
│   └── ...
│
├── package.json                 # Scripts for both
├── next.config.js               # Next.js config
├── vite.components.config.js    # Code Components build
├── webflow.json                 # Code Components config
└── webflow.toml                 # Next.js Cloud config
```

---

## 🛠️ Build Scripts Reference

| Script | Purpose |
|--------|---------|
| `npm run dev` | Next.js dev server (test locally) |
| `npm run build` | Build both Next.js app + Code Components |
| `npm run build:nextjs` | Build Next.js app only |
| `npm run build:components` | Build Code Components only |
| `npm run components:deploy` | Build + sync Code Components to Webflow |
| `npm run webflow:auth` | Authenticate Webflow CLI |
| `npm run webflow:sync` | Sync Code Components to Webflow |

---

## 📋 Deployment Checklist

### Initial Setup

- [ ] `npm install`
- [ ] `npm run webflow:auth` (for Code Components)
- [ ] Test locally: `npm run dev`

### Deploy Code Components

- [ ] `npm run build:components`
- [ ] `npm run webflow:sync`
- [ ] Verify in Webflow Designer (press `L`)

### Deploy Next.js App

- [ ] `npm run build:nextjs`
- [ ] Deploy to Webflow Cloud (see DEPLOYMENT.md)
- [ ] Test all routes

### Both Deployed!

- [ ] Test Code Components in Designer
- [ ] Test Next.js app routes
- [ ] Verify both use same data

---

## 💡 Example Workflows

### Workflow 1: Designer + Dashboard

1. Deploy Next.js app → `https://charts.yoursite.io`
2. Deploy Code Components to Webflow
3. Main site: Link to `/all` for full dashboard
4. Individual pages: Drag specific chart components

### Workflow 2: All Code Components

1. Only deploy Code Components
2. Use components throughout your Webflow site
3. No separate Next.js app needed

### Workflow 3: Next.js Only

1. Only deploy Next.js Cloud App
2. Embed via iframes in Webflow
3. Simpler, fewer dependencies

---

## 🔧 Troubleshooting

### Code Components Not Showing

1. Verify build: `npm run build:components`
2. Check sync: `npm run webflow:sync`
3. Refresh Webflow Designer
4. Press `L` → Check "Scale Benchmark Charts" is installed

### Next.js App SSR Issues

Already handled! Components use `dynamic` imports:
```javascript
const Chart = dynamic(() => import('...'), { ssr: false });
```

### Data Not Syncing

Ensure you:
1. Updated `shared/data/chartData.js`
2. Ran `npm run build` (both)
3. Redeployed both (sync + Cloud deploy)

---

## 📚 Additional Resources

- **Quick Start:** See [QUICKSTART.md](./QUICKSTART.md)
- **Full Deployment:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Next.js Details:** See [README.md](./README.md)
- **Code Components Docs:** [Webflow Code Components](https://developers.webflow.com/code-components)
- **Webflow Cloud Docs:** [Webflow Cloud](https://developers.webflow.com/cloud)

---

## ✨ Benefits of Hybrid Approach

✅ **Single source of truth** - Update data once
✅ **Maximum flexibility** - Choose best tool for each use case
✅ **Designer-friendly** - Drag and drop components
✅ **Developer-friendly** - Full Next.js app control
✅ **Reusable code** - Shared React components
✅ **Easy maintenance** - Update one codebase

---

**You have the best of both worlds! 🎉**
