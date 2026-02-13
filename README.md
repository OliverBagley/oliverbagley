# Oliver Bagley Portfolio - SvelteKit Edition

Modern, professional portfolio built with **SvelteKit**, **Bun**, **Tailwind CSS**, and deployed on **Cloudflare Pages**.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

Visit http://localhost:5173 to see your site.

## 📁 Project Structure

```
/
├── src/
│   ├── app.html                 # HTML template with fonts
│   ├── app.css                  # Global styles + Tailwind
│   └── routes/
│       ├── +layout.svelte       # Shared nav + footer
│       ├── +page.svelte         # Homepage
│       ├── about/               # About page
│       ├── services/            # Services page
│       ├── privacy/             # Privacy policy
│       └── terms/               # Terms & conditions
├── static/
│   ├── _headers                 # Cloudflare security headers
│   ├── _redirects               # URL redirects
│   └── media/                   # Images and assets
├── svelte.config.js             # SvelteKit configuration
├── vite.config.ts               # Vite build config
├── tailwind.config.js           # Tailwind customization
└── package.json                 # Dependencies and scripts
```

## 🎨 Design System

- **Colors**: Terracotta (#d77a48) + Amber (#f4a261) on cream (#faf7f2)
- **Fonts**: Instrument Serif (headings) + Work Sans (body)
- **Layout**: Component-based with shared nav/footer
- **Animations**: Scroll reveals, hover effects, smooth transitions

## 🛠 Tech Stack

- **Framework**: SvelteKit 2.0
- **Runtime**: Bun 1.3.9
- **Styling**: Tailwind CSS 3.4
- **Hosting**: Cloudflare Pages (via @sveltejs/adapter-cloudflare)
- **Type Safety**: TypeScript

## 🚀 Deployment to Cloudflare Pages

### Via Git (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "SvelteKit migration complete"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project → Connect to Git
   - Select your repository
   - **Build settings**:
     - Framework preset: SvelteKit
     - Build command: `bun run build`
     - Build output directory: `.svelte-kit/cloudflare`
   - Click "Save and Deploy"

3. **Add Custom Domain** (Optional)
   - In project settings → Custom domains
   - Add `oliverbagley.com` and `www.oliverbagley.com`
   - Update your DNS records as instructed

### Direct Upload

```bash
# Build the project
bun run build

# Upload the .svelte-kit/cloudflare directory to Cloudflare Pages
```

## ✨ Features

### Pages
- **Homepage**: Hero, projects gallery, services overview, contact
- **About**: Professional story, experience, approach, skills
- **Services**: Service offerings, process, engagement models
- **Legal**: Privacy policy and terms & conditions
- **Case Studies**: (To be migrated - see MIGRATION_COMPLETE.md)

### Technical Features
- ✅ Component-based architecture
- ✅ Server-side rendering (SSR) ready
- ✅ Clean URL structure (`/about` vs `/about.html`)
- ✅ Automatic code splitting
- ✅ Fast HMR (Hot Module Replacement)
- ✅ TypeScript support
- ✅ SEO optimized with meta tags
- ✅ Responsive design
- ✅ Scroll reveal animations

## 📝 Development

### Available Scripts

```bash
# Development server with HMR
bun run dev

# Type checking
bun run check
bun run check:watch

# Production build
bun run build

# Preview production build locally  
bun run preview
```

### Adding New Pages

Create a new folder in `src/routes/`:

```bash
mkdir -p src/routes/new-page
```

Create `src/routes/new-page/+page.svelte`:

```svelte
<svelte:head>
	<title>Page Title — Oliver Bagley</title>
	<meta name="description" content="Page description" />
</svelte:head>

<section class="py-24 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<h1 class="text-5xl heading-serif mb-8">Page Content</h1>
		<!-- Your content -->
	</div>
</section>
```

The page will automatically include the nav and footer from `+layout.svelte`.

## 🔄 Migration from Static HTML

This project was migrated from static HTML to SvelteKit. See [MIGRATION_COMPLETE.md](MIGRATION_COMPLETE.md) for details on what changed and remaining tasks.

### Key Benefits of SvelteKit

1. **No Code Duplication**: Nav/footer defined once in layout
2. **Hot Module Replacement**: See changes instantly  
3. **Cleaner URLs**: `/about` instead of `/about.html`
4. **Better Performance**: Code splitting and lazy loading
5. **TypeScript**: Type safety out of the box
6. **Easy Deployment**: Single build command for Cloudflare Pages

## 📚 Documentation

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cloudflare Pages + SvelteKit](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/)

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as a template for your own projects!

## 📄 License

© 2026 Oliver Bagley. All rights reserved.

---

**Need help completing the migration?** Check [MIGRATION_COMPLETE.md](MIGRATION_COMPLETE.md) for next steps.
   bun install
   ```

2. **Run Development Mode (Watch Changes)**
   ```bash
   bun run dev
   ```

   Open: `http://localhost:3000`

3. **Build for Production**
   ```bash
   bun run build
   ```

### Option 1: Connect via Git (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio 2026"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Click "Workers & Pages" → "Create application" → "Pages"
   - Select "Connect to Git" → Choose your repository
   - **Build command**: `bun run build`
   - **Build output directory**: `/` (root)
   - Click "Save and Deploy"

3. **Add Custom Domain**
   - In your project, go to "Custom domains"
   - Add `oliverbagley.com` and `www.oliverbagley.com`
   - Update DNS if needed

### Option 2: Direct Upload

1. Go to Cloudflare Pages → "Create application" → "Direct Upload"
2. Upload all files (including the css and case-studies folders)
3. Add custom domain in settings

## ✨ What's Included

### Pages

- **Homepage (index.html)**: Hero section, featured projects, contact
- **About (about.html)**: Your story, experience, approach, skills
- **Services (services.html)**: Service offerings, process, engagement models
- **Case Studies**: 4 detailed project breakdowns
- **Privacy & Terms**: Legal pages for professionalism

### Design System

- **Colors**: Terracotta (#d77a48) + Amber (#f4a261) accents on cream background
- **Fonts**: Instrument Serif (headings) + Work Sans (body)
- **Layout**: Clean, modern, with generous whitespace
- **Animations**: Subtle fade-ins, hover effects, smooth transitions

### Technical Features

- ✅ Semantic HTML5 markup
- ✅ External CSS for easy maintenance
- ✅ Tailwind CSS compiled into `/css/main.css` (via Tailwind CLI)
- ✅ Fully responsive design
- ✅ Fast static site
- ✅ SEO optimized
- ✅ Accessible navigation

## 📝 Quick Customization

### Update Your Content

1. **Hero Stats** (index.html, lines 48-66)
   - Change years of experience
   - Update revenue figures
   - Modify achievement text

2. **Contact Email** (all pages, footer)
   - Find/replace `hello@oliverbagley.com` with your email

3. **About Page** (about.html)
   - Update your story (lines 45-59)
   - Modify experience highlights (lines 62-92)
   - Add/remove skills (lines 136-175)

4. **Brand Colors** (css/main.css, lines 17-23)
   ```css
   :root {
       --terracotta: #d77a48;  /* Change accent color */
       --amber: #f4a261;        /* Change secondary accent */
       --cream: #faf7f2;        /* Change background */
   }
   ```

### Replace Project Images

1. Create an `/images` folder in your root
2. Add your images (recommended: 1600x1000px, <800KB)
3. Replace the current image URLs with `/images/your-image.jpg`

### Update Case Studies

Each case study follows the same structure. Edit:
- Project details (client, timeline, year)
- Challenge description
- Your role and approach
- Results with metrics
- Key learnings

See CUSTOMIZATION.md for detailed editing instructions.

## 🎨 Design Philosophy

**Refined Brutalist with Warm Accents**

This design avoids generic portfolio aesthetics through:
- Distinctive serif headings (Instrument Serif)
- Unexpected warm color palette (terracotta/amber)
- Bold section numbers as design elements
- Generous whitespace and confident layouts
- Subtle animations that enhance, not distract

## 📱 Fully Responsive

Optimized breakpoints for:
- Desktop (1920px+)
- Laptop (1024px-1919px)
- Tablet (768px-1023px)
- Mobile (320px-767px)

## 🔧 Tech Stack

- **HTML5**: Semantic, accessible markup
- **CSS3**: Custom properties, flexbox, grid
- **Tailwind CSS**: Utility classes compiled into a single CSS file
- **Google Fonts**: Instrument Serif + Work Sans
- **JavaScript**: Small progressive enhancement for scroll reveal

## ⚡ Performance

- Static HTML + compiled CSS (easy to deploy and cache)
- Image performance depends on the images you choose to ship

## 🎯 SEO Optimization

Each page includes:
- Unique title tags
- Meta descriptions
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (add when you upload real images)

## 📊 Analytics Setup

### Google Analytics (Recommended)

Add to `<head>` of each page before `</head>`:

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

### Cloudflare Web Analytics (Free)

Enable in your Cloudflare Pages dashboard → Analytics

## 🔒 Security Headers (Cloudflare)

Add a `_headers` file to root:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## 📋 Pre-Launch Checklist

- [ ] Replace project/hero images with your own
- [ ] Update email address throughout site
- [ ] Customize About page with your story
- [ ] Update Services page with your offerings
- [ ] Review and customize all case studies
- [ ] Test all navigation links
- [ ] Check responsive design on multiple devices
- [ ] Add Google Analytics or Cloudflare Analytics
- [ ] Review Privacy Policy and Terms
- [ ] Test contact links (email, LinkedIn)
- [ ] Deploy to Cloudflare Pages
- [ ] Add custom domain
- [ ] Test live site thoroughly

## 🆘 Troubleshooting

**Styles not loading?**
- Check that `/css/main.css` path is correct
- Ensure CSS file is uploaded with the site

**Images not showing?**
- Check image paths are correct (e.g., `/images/project.jpg`)
- Confirm the images are included in your deploy output

**Navigation not working?**
- Check href attributes match actual file names
- Ensure all HTML files are in correct folders

## 💡 Future Enhancements

Consider adding:
- Blog section for thought leadership
- Client testimonials
- Project filtering by category
- Contact form (using Cloudflare Pages Functions or Formspree)
- Dark mode toggle
- Additional case studies

## 📞 Support

Questions? Check:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

Or review the CUSTOMIZATION.md file for quick editing help.

---

**Version**: 2.0 (February 2026)  
**Design**: Refined brutalist with warm accents  
**Maintained by**: Oliver Bagley

**License**: Personal use only. Do not redistribute or use as a template without permission.
