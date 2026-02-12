# Cloudflare Pages Deployment Guide

This portfolio is ready to deploy to Cloudflare Pages. Follow these steps:

## Prerequisites

- A Cloudflare account (free tier works perfectly)
- Your code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Direct Upload (Fastest)

1. **Build the project locally:**
   ```bash
   bun install
   bun run build
   ```

2. **Go to Cloudflare Dashboard:**
   - Navigate to Pages > Create a project > Upload assets
   - Drag and drop your entire project folder (or zip it first)
   - Click "Deploy"

### Option 2: Git Integration (Recommended)

1. **Push your code to a Git repository** (GitHub/GitLab/Bitbucket)

2. **Connect to Cloudflare Pages:**
   - Go to Cloudflare Dashboard > Pages
   - Click "Create a project" > "Connect to Git"
   - Authorize Cloudflare to access your repository
   - Select your portfolio repository

3. **Configure build settings:**
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: /
   Root directory: /
   ```

4. **Environment variables (if needed):**
   - Add any environment variables in the "Environment variables" section
   - For this project, none are required

5. **Deploy:**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your site automatically

## Build Configuration

The project uses these build settings:

- **Build Command:** `npm run build` or `bun run build`
  - Compiles Tailwind CSS from `src/input.css` to `css/main.css`
  - Minifies the output for production

- **Output Directory:** `/` (root)
  - All HTML files are served from the project root
  - CSS is output to `/css/main.css`
  - Assets are in `/assets/`

- **Node Version:** 18+ recommended

## Custom Domain (Optional)

1. In Cloudflare Pages, go to your project > Custom domains
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `oliverbagley.com`)
4. Follow DNS configuration instructions
5. Cloudflare automatically provisions SSL certificates

## Automatic Deployments

When using Git integration:
- **Production:** Every push to `main` branch triggers a production deployment
- **Preview:** Pull requests create preview deployments with unique URLs
- **Rollback:** Easily rollback to any previous deployment from the dashboard

## Performance Features Included

✅ **Security Headers** - Defined in `_headers` file
✅ **Smart Redirects** - Defined in `_redirects` file  
✅ **Asset Caching** - Optimized cache headers for static assets
✅ **Minified CSS** - Tailwind CSS is minified during build
✅ **CDN Distribution** - Cloudflare's global edge network

## Post-Deployment

After deployment, your site will be available at:
- `https://your-project.pages.dev` (free subdomain)
- Your custom domain (if configured)

Visit your site and verify:
- All pages load correctly
- Images and assets display properly
- Navigation works as expected
- Case studies are accessible

## Troubleshooting

**Build fails:**
- Check that `package.json` has the correct build command
- Verify all dependencies are listed in `package.json`
- Check build logs in Cloudflare dashboard

**Assets not loading:**
- Verify paths are relative (not absolute)
- Check that `/assets/` directory is included in deployment
- Ensure `.css` file is generated during build

**404 errors:**
- Check `_redirects` file is in the root directory
- Verify file names match exactly (case-sensitive)
- Ensure all HTML files are in the correct location

## Local Development

To run locally:
```bash
# Install dependencies
bun install

# Start dev server with hot reload
bun run dev

# Or watch CSS changes only
bun run dev:css
```

Dev server runs on `http://localhost:8001`

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
