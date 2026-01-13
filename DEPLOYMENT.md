# Deployment Guide - Webflow Cloud

This guide covers deploying your Next.js benchmark charts app to Webflow Cloud.

## 🎯 Deployment Options

### Option 1: Webflow CLI (Manual Deploy)
**Best for:** Testing, one-off deployments
**Time:** ~5 minutes

### Option 2: GitHub Integration (Auto Deploy)
**Best for:** Production, team collaboration, continuous deployment
**Time:** ~10 minutes setup, then automatic

---

## Option 1: Webflow CLI Deployment

### Step 1: Install Webflow CLI

```bash
npm install -g @webflow/cli
```

### Step 2: Authenticate

```bash
webflow auth
```

This opens your browser to authenticate with your Webflow account.

### Step 3: Initialize Project

```bash
webflow init
```

You'll be prompted to:
- Select your Webflow workspace
- Name your Cloud app
- Confirm the framework (Next.js)

### Step 4: Build and Deploy

```bash
npm run build
webflow deploy
```

Your app will be deployed to: `https://your-app-name.webflow.io`

### Step 5: Test

Visit your deployed URL and verify all routes work:
- `/` - Home page
- `/all` - All charts
- `/growth`, `/burn`, `/churn`, `/efficiency` - Individual charts

---

## Option 2: GitHub Auto-Deploy (Recommended)

### Prerequisites
- GitHub account
- Git installed locally

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Scale Benchmark Charts"

# Create main branch
git branch -M main
```

### Step 2: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/scale-benchmark-charts.git

# Push to GitHub
git push -u origin main
```

### Step 3: Connect to Webflow Cloud

1. **Open Webflow Workspace**
   - Go to your Webflow workspace
   - Navigate to "Cloud Apps" section

2. **Create New Cloud App**
   - Click "New Cloud App"
   - Select "Connect Repository"

3. **Connect GitHub**
   - Authorize Webflow to access GitHub
   - Select your repository
   - Select `main` branch

4. **Configure Build Settings**
   - Framework: Next.js (auto-detected from `webflow.toml`)
   - Build command: `npm run build` (pre-configured)
   - Output directory: `.next` (pre-configured)

5. **Deploy**
   - Click "Deploy"
   - Wait for initial build (2-3 minutes)

### Step 4: Configure GitHub Actions (Optional but Recommended)

The project includes `.github/workflows/deploy.yml` for CI/CD.

1. **Add Webflow API Token to GitHub Secrets**
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `WEBFLOW_API_TOKEN`
   - Value: Get from Webflow workspace settings

2. **How it works:**
   - Every push to `main` triggers a build
   - GitHub Actions runs tests and builds the app
   - Automatically deploys to Webflow Cloud

### Step 5: Verify Auto-Deploy

Make a small change and push:

```bash
# Edit a file (e.g., app/page.js)
git add .
git commit -m "Test auto-deploy"
git push

# Watch the deploy in:
# - GitHub Actions tab
# - Webflow Cloud dashboard
```

---

## 🔗 Using Your Deployed App

### Get Your App URL

After deployment, your app will be available at:
```
https://your-app-name.webflow.io
```

Or a custom domain you configure in Webflow.

### Embed in Webflow Designer

**Method 1: Iframe (Easiest)**

Add an Embed element in Webflow Designer:

```html
<iframe
  src="https://your-app-name.webflow.io/all"
  width="100%"
  height="1200"
  frameborder="0"
  loading="lazy">
</iframe>
```

**Method 2: Custom Code Block**

For more control, use a custom code block:

```html
<div id="benchmark-charts-container"></div>

<script>
  // Load charts dynamically
  fetch('https://your-app-name.webflow.io/all')
    .then(response => response.text())
    .then(html => {
      document.getElementById('benchmark-charts-container').innerHTML = html;
    });
</script>
```

**Method 3: Direct Link**

Simply link to your Cloud app:

```html
<a href="https://your-app-name.webflow.io/all" target="_blank">
  View Benchmark Charts
</a>
```

---

## ⚙️ Configuration

### Environment Variables

Add environment variables in Webflow Cloud dashboard:

1. Go to your Cloud app settings
2. Navigate to "Environment Variables"
3. Add any needed variables

Example `.env.local` for local development:
```
NODE_ENV=development
```

### Custom Domains

To use a custom domain:

1. Go to Webflow Cloud app settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 🔄 Updating Your Deployment

### For CLI Deployment:
```bash
# Make changes
git add .
git commit -m "Update charts"

# Rebuild and redeploy
npm run build
webflow deploy
```

### For GitHub Auto-Deploy:
```bash
# Make changes
git add .
git commit -m "Update charts"

# Push to trigger auto-deploy
git push
```

Webflow will automatically rebuild and deploy.

---

## 📊 Monitoring

### View Deployment Logs

**Webflow Dashboard:**
- Cloud Apps → Your App → Deployments
- View build logs and errors

**GitHub Actions (if using):**
- Your repo → Actions tab
- Click on workflow run to see details

### Performance Monitoring

Webflow Cloud runs on Cloudflare Workers:
- Global edge network
- Automatic scaling
- Built-in DDoS protection
- Analytics in Webflow dashboard

---

## 🛠️ Troubleshooting

### Build Fails

**Check build logs** in Webflow dashboard or GitHub Actions

**Common issues:**
```bash
# Clear cache and rebuild locally first
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Deploy Succeeds but App Doesn't Load

1. **Check routes:** Ensure `/all` route exists
2. **Check console:** Browser dev tools for errors
3. **Verify build:** Run `npm run build` locally first

### ApexCharts Not Rendering

The components use dynamic imports to avoid SSR issues:
```javascript
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
```

This is already configured in `app/components/BenchmarkChart.jsx`.

### GitHub Actions Failing

1. Verify `WEBFLOW_API_TOKEN` secret is set
2. Check workflow file: `.github/workflows/deploy.yml`
3. View logs in Actions tab

---

## 📈 Next Steps

After deployment:

1. **Test all routes** on your deployed URL
2. **Embed in Webflow** site using iframe or custom code
3. **Set up custom domain** (optional)
4. **Monitor performance** in Webflow dashboard
5. **Update chart data** as needed in `app/data/chartData.js`

---

## 📚 Additional Resources

- [Webflow Cloud Documentation](https://developers.webflow.com/cloud)
- [Webflow CLI Reference](https://developers.webflow.com/cli)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions](https://docs.github.com/en/actions)

---

Need help? Check [README.md](./README.md) or [QUICKSTART.md](./QUICKSTART.md)
