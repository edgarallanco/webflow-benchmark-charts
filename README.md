# Scale Benchmark Charts - Hybrid Setup

Interactive benchmark charts for Webflow with **two deployment options**:

1. **Code Components** - Draggable components in Webflow Designer
2. **Next.js Cloud App** - Standalone dashboard on Webflow Cloud

**Both share the same React components and data!**

---

## 🎯 Choose Your Deployment

### Option 1: Code Components
**Drag charts directly into Webflow Designer**

✅ Visual configuration in Designer
✅ No iframe needed
✅ Perfect for embedding individual charts
✅ Designer-friendly

[See Code Components Guide](#code-components-setup)

### Option 2: Next.js Cloud App
**Full-stack dashboard deployed to Webflow Cloud**

✅ Multiple routes (`/all`, `/growth`, etc.)
✅ Standalone charts page
✅ Cloudflare Workers (fast, global)
✅ Developer-friendly

[See Next.js App Guide](#nextjs-cloud-app-setup)

### Option 3: Both! (Recommended)
**Get the best of both worlds**

✅ Dashboard page + embedded charts
✅ Maximum flexibility
✅ Single source of truth for data

[See Hybrid Setup Guide](./HYBRID_SETUP.md) ⭐

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Test locally
npm run dev
# Visit http://localhost:3000

# Build everything
npm run build
```

---

## 📊 What's Included

### 5 Chart Components/Routes

1. **All Charts** (`/all` or `BenchmarkCharts` component)
   - All 4 charts with interactive controls
   - Revenue range filtering
   - Most comprehensive view

2. **Growth Chart** (`/growth` or `GrowthChart` component)
   - Y/Y ARR Growth
   - iCAGR
   - NNARR Growth
   - Y/Y Revenue Growth

3. **Burn Chart** (`/burn` or `BurnChart` component)
   - Burn Multiple
   - Rule of 40
   - Operating Margin

4. **Churn Chart** (`/churn` or `ChurnChart` component)
   - Annualized Gross Churn
   - Annualized Retention

5. **Efficiency Chart** (`/efficiency` or `EfficiencyChart` component)
   - Net Sales Efficiency
   - Gross Sales Efficiency
   - Magic Number

---

## 📦 Code Components Setup

Deploy charts as draggable components in Webflow Designer.

### Steps

1. **Build and authenticate:**
```bash
npm run build:components
npm run webflow:auth
```

2. **Deploy to Webflow:**
```bash
npm run webflow:sync
```

3. **Use in Webflow Designer:**
   - Press `L` to open Libraries
   - Find "Scale Benchmark Charts"
   - Drag components onto your pages
   - Configure props in the right panel

### Component Props

**GrowthChart & BurnChart:**
- Revenue Setup: `all` or `range`
- Revenue Range: `0-6` (revenue bracket)
- Metric: Select from dropdown

**ChurnChart & EfficiencyChart:**
- Metric: Select from dropdown

**BenchmarkCharts (all 4 charts):**
- Initial Revenue Setup: `all` or `range`
- Initial Revenue: `0-6`
- Show Controls: `true` or `false`

**Requirements:**
- Webflow CMS or Business Site plan
- Paid Workspace plan

---

## ☁️ Next.js Cloud App Setup

Deploy as a full-stack app on Webflow Cloud.

### Quick Deploy

```bash
# Build the app
npm run build:nextjs

# Option A: Webflow CLI
npm install -g @webflow/cli
webflow auth
webflow init
webflow deploy

# Option B: GitHub Auto-Deploy
# Push to GitHub → Connect in Webflow Cloud dashboard
```

### Routes Available

- `/` - Home page with navigation
- `/all` - All 4 charts (recommended)
- `/growth` - Growth chart only
- `/burn` - Burn chart only
- `/churn` - Churn chart only
- `/efficiency` - Efficiency chart only

### Embedding in Webflow

Once deployed, embed via iframe:

```html
<iframe
  src="https://your-app.webflow.io/all"
  width="100%"
  height="1200">
</iframe>
```

Or link directly:
```html
<a href="https://your-app.webflow.io/all">View Charts</a>
```

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment guide.**

---

## 🏗️ Project Structure

```
scale-benchmark-charts/
│
├── shared/                      # ⭐ Shared by both deployments
│   ├── components/              # Core React components
│   ├── data/chartData.js        # Chart data (single source)
│   ├── utils/chartOptions.js    # ApexCharts config
│   └── styles/charts.css        # Shared styles
│
├── src/                         # Code Components
│   ├── webflow/                 # Webflow wrappers
│   └── index.js
│
├── app/                         # Next.js Cloud App
│   ├── components/              # Next.js wrappers
│   ├── [routes]/               # Page routes
│   └── globals.css
│
├── reference/                   # Original WordPress files
├── package.json                 # Build scripts
├── next.config.js               # Next.js config
├── vite.components.config.js    # Code Components build
├── webflow.json                 # Code Components config
└── webflow.toml                 # Webflow Cloud config
```

---

## 🔄 Updating Chart Data

**Update once, affects both deployments!**

1. Edit `shared/data/chartData.js`
2. Run `npm run build`
3. Redeploy:
   - Code Components: `npm run webflow:sync`
   - Next.js app: Push to GitHub or `webflow deploy`

---

## 🎨 Customization

### Update Styles
Edit `shared/styles/charts.css`

### Update Data
Edit `shared/data/chartData.js`

### Add New Charts
1. Add config to `shared/data/chartData.js`
2. Create component in `shared/components/`
3. Add Webflow wrapper in `src/webflow/` (for Code Components)
4. Add Next.js route in `app/` (for Cloud App)

---

## 🛠️ Build Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Build both deployments |
| `npm run build:nextjs` | Build Next.js app only |
| `npm run build:components` | Build Code Components only |
| `npm run components:deploy` | Build + deploy Code Components |
| `npm run webflow:auth` | Authenticate with Webflow |
| `npm run webflow:sync` | Sync Code Components |

---

## 📖 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Get up and running fast
- **[HYBRID_SETUP.md](./HYBRID_SETUP.md)** - Detailed hybrid setup guide ⭐
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Full deployment instructions
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - Migration from WordPress

---

## 🎯 When to Use Each Approach

### Use Code Components:
- Embedding charts in blog posts
- Different chart configs per page
- Giving designers visual control
- Need Webflow's visual editor

### Use Next.js Cloud App:
- Full dashboard page
- Multiple routes
- External linking
- Iframe embedding

### Use Both:
- **Maximum flexibility!**
- Dashboard + individual embeds
- Best of both worlds

**See [HYBRID_SETUP.md](./HYBRID_SETUP.md) for detailed comparison.**

---

## 🛠️ Troubleshooting

### Code Components

**Not showing in Designer:**
1. Run `npm run build:components`
2. Run `npm run webflow:sync`
3. Refresh Webflow Designer
4. Check Libraries panel (`L`)

**Props not working:**
- Verify `webflow.json` is configured correctly
- Check component props match `declareComponent` definition

### Next.js App

**Build errors:**
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build:nextjs
```

**Charts not rendering:**
- Components use dynamic imports (SSR disabled)
- Already configured in `app/components/`

### Both

**Data not syncing:**
1. Update `shared/data/chartData.js`
2. Run `npm run build`
3. Redeploy both

---

## 📊 Chart Data Reference

### Revenue Ranges (0-6)
- 0: $0M - $1M
- 1: $1M - $2.5M
- 2: $2.5M - $5M
- 3: $5M - $10M
- 4: $10M - $25M
- 5: $25M - $50M
- 6: $50M - $100M

### Performance Tiers
- **Good (50%ile)** - Teal (#234F41)
- **Better (75%ile)** - Blue (#0D71A9)
- **Best (90%ile)** - Gold (#E5A819)

---

## 📝 Migration Notes

**Migrated from:** WordPress + Alpine.js + ApexCharts
**To:** Next.js + React + Code Components

### What Changed:
✅ Alpine.js → React state management
✅ WordPress → Next.js + Webflow
✅ Single page → Multiple routes + draggable components

### What Stayed the Same:
✅ All chart data (identical values)
✅ All metrics and calculations
✅ Visual design and colors
✅ Chart interactions

Original WordPress files: `/reference` directory

---

## 📚 Additional Resources

- [Webflow Code Components Docs](https://developers.webflow.com/code-components)
- [Webflow Cloud Docs](https://developers.webflow.com/cloud)
- [Next.js Documentation](https://nextjs.org/docs)
- [ApexCharts Documentation](https://apexcharts.com/docs/)

---

## 📄 License

MIT

---

## 🚀 Get Started Now

1. **Quick local test:** [QUICKSTART.md](./QUICKSTART.md)
2. **Deploy both:** [HYBRID_SETUP.md](./HYBRID_SETUP.md)
3. **Deploy one:** Choose Code Components or Next.js above

**Questions?** Check the docs linked above!
