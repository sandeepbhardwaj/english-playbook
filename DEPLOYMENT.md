# Deployment Guide

Complete instructions for deploying Grammar Atlas to various platforms.

## Quick Deploy (GitHub Pages) ⭐ Recommended

**Steps:**

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Set `Source` to **GitHub Actions**
   - Click **Save**

3. **Done!**
   - The workflow in `.github/workflows/deploy-pages.yml` runs automatically
   - Your site is live at: `https://[username].github.io/[repo-name]` (or custom domain)
   - Updates deploy automatically on every push to `main`

> **Current Deployment:** Grammar Atlas is live at **https://english.scalemind.dev** using GitHub Actions with a custom domain configured in the repository settings.

**No build step required** — the site deploys from your repository root directly.

---

## Netlify ⚡

**One-click deployment:**

1. Click here: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](#netlify)
   
   OR
   
2. Manual setup:
   - Go to [netlify.com](https://netlify.com)
   - Click **Add new site** → **Import an existing project**
   - Connect your GitHub repository
   - Leave build settings empty (static site)
   - Click **Deploy**

**Your site is ready at:** `https://[project-name].netlify.app`

### Advanced Netlify Configuration

Create `netlify.toml` in repo root:

```toml
[build]
  command = "echo 'Static site ready'"
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production]
  command = "echo 'Production build'"
```

---

## Vercel

**Quick deploy:**

1. Go to [vercel.com](https://vercel.com)
2. Click **Import Project**
3. Import your GitHub repository
4. Leave settings as default (no build step)
5. Click **Deploy**

**Your site is ready at:** `https://[project-name].vercel.app`

### Custom Domain on Vercel
- In Vercel dashboard: **Settings** → **Domains**
- Add your custom domain
- Update DNS records (Vercel provides instructions)

---

## Self-Hosted (Your Server)

### Option 1: Traditional Web Server (Apache/Nginx)

**Copy all files to your web server:**

```bash
scp -r * user@host:/var/www/html/grammar-atlas/
```

**Apache** `.htaccess` redirect (for SPA routing):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx** configuration:
```nginx
server {
    listen 80;
    server_name grammar-atlas.example.com;
    root /var/www/grammar-atlas;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|jpg|png|gif|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Option 2: Docker Container

Create `Dockerfile`:

```dockerfile
FROM nginx:alpine

# Copy all files to nginx
COPY . /usr/share/nginx/html

# Configure nginx to serve SPA
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

Build and run:

```bash
docker build -t grammar-atlas .
docker run -p 80:80 grammar-atlas
```

### Option 3: Node.js Server

Create `server.js`:

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url);
  if (req.url === '/') filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else {
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
      };
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      res.end(data);
    }
  });
}).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

Run:
```bash
node server.js
```

---

## Custom Domain Setup

### For GitHub Pages

**Add a CNAME file:**

1. Create `CNAME` file in repo root with your domain:
   ```
   grammar-atlas.example.com
   ```

2. Push to GitHub

3. Update DNS at your domain registrar:
   ```
   CNAME grammar-atlas.example.com github.io
   OR
   A records pointing to GitHub's IPs
   ```

GitHub provides detailed instructions in **Settings** → **Pages**.

### For Netlify/Vercel

Both provide automatic DNS management. In their dashboards, add your domain and they'll generate DNS records for you to add to your registrar.

---

## SSL/HTTPS

### GitHub Pages
- ✅ Automatic HTTPS with `https://[...].github.io`
- ✅ Automatic for custom domains

### Netlify
- ✅ Free Let's Encrypt SSL included automatically

### Vercel
- ✅ Free Let's Encrypt SSL included automatically

### Self-hosted
Use **Let's Encrypt** with **Certbot**:

```bash
sudo apt install certbot
sudo certbot certonly --webroot -w /var/www/grammar-atlas -d grammar-atlas.example.com
# Renews automatically
```

---

## Performance Optimization

### Enable Caching

**GitHub Pages:**
- Static assets are globally cached by GitHub/CloudFlare
- Set cache headers in your app if self-hosting

**Nginx:**
```nginx
location ~* \.(js|css|png|jpg|gif)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

### Enable Gzip Compression

**Nginx:**
```nginx
gzip on;
gzip_types text/html text/plain text/css application/javascript;
gzip_min_length 1000;
```

**Apache:**
Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

---

## Monitoring & Analytics

### Add Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

### Monitor Errors

Add error tracking import (e.g., **Sentry**):

```javascript
<script src="https://browser.sentry-cdn.com/7.x/bundle.min.js"></script>
<script>
  Sentry.init({ dsn: "YOUR_DSN_HERE" });
</script>
```

---

## Troubleshooting

### Custom domain shows 404

**Solution:**
- Ensure CNAME file exists and is correct
- Wait 24 hours for DNS propagation
- Check DNS records are correctly configured

### Site shows blank page

**Solution:**
- Check browser console for JavaScript errors
- Verify all files uploaded correctly
- Try clearing browser cache

### Quiz data not persisting

**Solution:**
- Check localStorage is enabled in browser
- Try different browser or private window
- Check browser's storage quota isn't exceeded

### Slow performance

**Solution:**
- Enable gzip compression
- Enable browser caching
- Use CDN (Netlify/Vercel include this)
- Check for console errors

---

## Maintenance

### Regular Updates

```bash
# Pull latest changes
git pull origin main

# Test locally
python3 -m http.server 8000

# Push to deploy
git push origin main
```

### Backup Progress Data

Remind users to export their progress:
1. Click **Reset Progress** button
2. Choose **Export** (before resetting)
3. Download JSON file as backup

### Monitor Storage

Grammar Atlas uses minimal storage:
- Curriculum data: ~100KB (cached)
- Per user progress: ~10-50KB in localStorage

---

## Environment Variables (Advanced)

For self-hosted deployments, create `.env`:

```
SITE_URL=https://grammar-atlas.example.com
ANALYTICS_ID=UA-XXXXX-X
CONTACT_EMAIL=support@example.com
```

Access in JavaScript:
```javascript
const siteUrl = process.env.SITE_URL || 'http://localhost:8000';
```

---

## Questions?

- Check the main [README.md](README.md)
- See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup
- Review [API.md](API.md) for integration details
