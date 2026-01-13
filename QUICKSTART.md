# Quick Start - Choose Your Path

This project supports **3 deployment options**. Choose what works best for you:

---

## 🎯 Option 1: Try Locally First (2 minutes)

Test everything before deploying:

```bash
# 1. Install
npm install

# 2. Run dev server
npm run dev

# 3. Open browser → http://localhost:3000
```

You'll see all routes working locally!

---

## 🎨 Option 2: Code Components (5 minutes)

**Drag charts directly into Webflow Designer**

```bash
# 1. Install & build
npm install
npm run build:components

# 2. Authenticate
npm run webflow:auth

# 3. Deploy to Webflow
npm run webflow:sync
```

**Then in Webflow Designer:**
- Press `L` → Find "Scale Benchmark Charts"
- Drag components onto your pages
- Configure props in right panel

**Requirements:** CMS/Business plan or paid Workspace

---

## ☁️ Option 3: Next.js Cloud App (5 minutes)

**Full dashboard on Webflow Cloud**

```bash
# 1. Install & build
npm install
npm run build:nextjs

# 2. Deploy to Webflow Cloud
npm install -g @webflow/cli
webflow auth
webflow init
webflow deploy
```

Your app is live at `https://your-app.webflow.io`!

**Embed in Webflow:**
```html
<iframe src="https://your-app.webflow.io/all" width="100%" height="1200"></iframe>
```

---

## 🚀 Option 4: Both! (10 minutes)

**Maximum flexibility - deploy both**

```bash
# Install
npm install

# Build everything
npm run build

# Deploy Code Components
npm run webflow:auth
npm run webflow:sync

# Deploy Next.js (use CLI or GitHub)
# See DEPLOYMENT.md for details
```

**Now you can:**
- Drag charts in Designer
- Link to full dashboard
- Use whichever fits each page

---

## 🔗 Quick Reference

| Want to... | Use... | Command |
|------------|--------|---------|
| Test locally | Next.js dev server | `npm run dev` |
| Drag & drop in Designer | Code Components | `npm run components:deploy` |
| Standalone dashboard | Next.js Cloud App | Deploy to Webflow Cloud |
| Maximum flexibility | Both! | Build + deploy both |

---

## 📖 Next Steps

- **Full setup guide:** [HYBRID_SETUP.md](./HYBRID_SETUP.md)
- **Deployment details:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Complete docs:** [README.md](./README.md)

---

## 💡 Not Sure Which to Choose?

### Choose Code Components if:
- You want to drag charts into different pages
- Designers need visual configuration
- Each page needs different chart settings

### Choose Next.js Cloud App if:
- You want a full dashboard page
- You'll iframe embed or link to charts
- You prefer developer control

### Choose Both if:
- You want options!
- Different use cases across your site
- **Recommended for most users**

---

**Questions?** Check [HYBRID_SETUP.md](./HYBRID_SETUP.md) for detailed comparison.
