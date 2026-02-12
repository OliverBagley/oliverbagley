# Quick Customization Guide

## 🎯 Most Common Edits

### 1. Update Your Email Address (ALL PAGES)
Find and replace `hello@oliverbagley.com` with your email in:
- index.html (2 instances)
- about.html (2 instances)
- services.html (2 instances)
- All case study pages (4 files)
- privacy.html (2 instances)
- terms.html (1 instance)

**Tip**: Use your text editor's "Find in Files" feature to replace all at once.

### 2. Change Brand Colors
**Files**: `src/input.css` AND `tailwind.config.js`

To ensure colors are updated everywhere, you must update them in **two locations**:

1. **Update CSS Variables** in `src/input.css` (lines 17-23):
```css
:root {
    --charcoal: #1a1a1a;      /* Dark text/backgrounds */
    --warm-gray: #2d2d2d;     /* Secondary dark */
    --terracotta: #d77a48;    /* PRIMARY ACCENT - change this! */
    --amber: #f4a261;          /* SECONDARY ACCENT - change this! */
    --cream: #faf7f2;          /* Light background */
    --light-gray: #e8e4df;    /* Borders and subtle elements */
}
```

2. **Update Tailwind Config** in `tailwind.config.js` (lines 6-11):
```javascript
colors: {
    charcoal: "#1a1a1a",
    // Match these values to your CSS variables
    terracotta: "#d77a48", 
    // ...
},
```

> **Important**: After changing colors, you must run the build command (`bun run build`) or have the dev server running (`bun run dev`) to see changes.

### 3. Update Hero Stats (Homepage)
**File**: `index.html` (lines 48-66)
```html
<div class="text-5xl font-bold heading-serif mb-2" style="color: var(--terracotta);">8+</div>
<p class="text-gray-600">Years leading digital commerce</p>
```
Change the numbers and descriptions to match your experience.

### 4. Replace Project Images
**Current**: Project images are linked using external URLs.

**To replace**:
1. Create `/images` folder in root
2. Add your images (recommended: 1600x1000px, <800KB each)
3. Find/replace in:
   - `index.html`: 4 project images
   - Case study pages: Multiple images per page

**Example**:
```html
<!-- Before -->
<img src="https://www.oliverbagley.com/media/images/work_thumbs/dll_digital_catalog_thumb.jpg" alt="Project Name">

<!-- After -->
<img src="/images/project-name.jpg" alt="Project Name">
```

### 5. Customize Your Professional Title
**File**: `index.html` (line 35)
```html
<p class="text-sm font-semibold uppercase tracking-widest mb-6 fade-in" 
   style="color: var(--terracotta);">Digital Commerce Strategist</p>
```

**File**: Page title in `<head>` (line 6)
```html
<title>Oliver Bagley — Digital Commerce Strategist & Product Leader</title>
```

### 6. Update About Page Content
**File**: `about.html`

**Your Story** (lines 45-59):
```html
<p>
    I started my career at the intersection of design and technology...
</p>
```
Replace with your actual career story.

**Experience Highlights** (lines 62-92):
Update current and previous roles with your experience.

**Skills** (lines 136-175):
Add/remove skill tags to match your capabilities.

### 7. Modify Services Offerings
**File**: `services.html` (lines 45-124)

Each service card follows this structure:
```html
<div class="p-8 bg-cream">
    <div class="text-6xl heading-serif mb-4" style="color: var(--terracotta);">01</div>
    <h2 class="text-2xl font-bold mb-4 heading-serif">Service Name</h2>
    <p class="text-gray-600 mb-6 leading-relaxed">Description...</p>
    <ul class="space-y-3 text-gray-600">
        <li>• Bullet point</li>
    </ul>
</div>
```

## 📄 Page-Specific Edits

### Homepage (index.html)
- **Line 35**: Professional title
- **Lines 37-41**: Hero headline
- **Lines 42-46**: Hero description
- **Lines 48-66**: Stats box
- **Lines 93-217**: Project cards (4 projects)

### About Page (about.html)
- **Lines 32-36**: Page headline
- **Lines 45-59**: Your story
- **Lines 62-92**: Experience highlights
- **Lines 95-138**: Your approach (4 points)
- **Lines 145-175**: Skills and tools

### Services Page (services.html)
- **Lines 32-36**: Page headline
- **Lines 45-124**: Three service offerings
- **Lines 132-185**: How you work (process)
- **Lines 193-228**: Engagement options
- **Lines 236-275**: Who you work with

### Case Study Pages
Each case study has the same structure:

1. **Hero** (lines 28-43): Title and description
2. **Overview** (lines 48-61): Client, timeline, year
3. **Content** (lines 63-200+): The bulk of the case study
4. **Stats** (around line 120): 2-3 key metrics
5. **Quote** (around line 180): Client testimonial

**To customize**:
- Replace client names and details
- Update your role and approach
- Add real results and metrics
- Include actual client quotes (or remove quote block)

## 🎨 Design Tweaks

### Change Typography
**File**: `<head>` section of any page (lines 8-10)

Currently using:
- **Instrument Serif** (headings) - distinctive, elegant
- **Work Sans** (body) - clean, professional

To change, replace Google Fonts link and update `css/main.css`:
```css
body {
    font-family: 'YourFont', sans-serif;  /* Line 28 */
}

.heading-serif {
    font-family: 'YourHeadingFont', serif;  /* Line 32 */
}
```

### Adjust Spacing
In any HTML file, find classes like:
- `py-32` → Vertical padding (change to `py-20` for less, `py-40` for more)
- `px-6` → Horizontal padding
- `gap-8` → Space between elements
- `mb-12` → Margin bottom

### Modify Button Styles
**File**: `css/main.css` (lines 125-157)

The `.cta-button` class controls all call-to-action buttons.

## 🔧 Advanced Customizations

### Add a New Page

1. **Copy an existing page** (e.g., `about.html`)
2. **Rename it** (e.g., `blog.html`)
3. **Update navigation** in ALL pages:
```html
<nav>
    ...
    <a href="/blog.html" class="nav-link text-sm font-medium">Blog</a>
    ...
</nav>
```
4. **Update footer** in ALL pages if needed

### Add a Contact Form

Use a service like:
- **Formspree**: formspree.io
- **Netlify Forms**: If you switch to Netlify
- **Cloudflare Pages Functions**: For custom handling

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

### Add Google Analytics

Add before `</head>` in ALL pages:
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

## 🎯 Before You Deploy

### Essential Updates Checklist

- [ ] Replace ALL placeholder images
- [ ] Update email address site-wide
- [ ] Customize About page with your story
- [ ] Update Services with your offerings
- [ ] Review Privacy Policy details
- [ ] Update case studies with real projects
- [ ] Test all internal links
- [ ] Check mobile responsiveness
- [ ] Update page titles for SEO
- [ ] Add meta descriptions to all pages

### Image Optimization

Before uploading images:
1. **Resize**: 1600x1000px for project images
2. **Compress**: Use TinyPNG.com or similar
3. **Format**: Use .jpg for photos, .png for graphics
4. **File size**: Keep under 500KB per image

### SEO Optimization

Update these in each page's `<head>`:
```html
<title>Your Name — Your Title</title>
<meta name="description" content="Your unique description">
```

## 💡 Pro Tips

1. **Batch editing**: Use VS Code's multi-cursor (Cmd/Ctrl + D) to edit multiple instances
2. **Preview locally**: Just open any .html file in your browser - no server needed
3. **Keep backups**: Save versions before major edits
4. **Test cross-browser**: Check in Chrome, Firefox, and Safari
5. **Mobile first**: Always check mobile view when making changes

## 🆘 Common Issues

**Broken navigation links?**
- Check href paths match actual filenames
- Use `/page.html` not `page.html` for root-level pages

**CSS not loading?**
- Verify `/css/main.css` path is correct
- Check file was uploaded to `/css/` folder

**Images not showing?**
- Ensure image paths start with `/images/`
- Check images are in the correct folder
- Verify file extensions match (.jpg not .JPG)

**Layout looks broken?**
- Clear browser cache
- Check you didn't accidentally delete closing tags
- Validate HTML at validator.w3.org

## 📚 Further Reading

- **Tailwind CSS Docs**: tailwindcss.com/docs
- **HTML Best Practices**: web.dev/learn/html
- **Web Accessibility**: w3.org/WAI/tips/

---

**Need help?** Refer to README.md for deployment instructions and troubleshooting.
