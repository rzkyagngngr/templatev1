# Static Site Generation (SSG) Guide

## Overview

Your React + Vite project now supports Static Site Generation (SSG), which pre-renders all routes to static HTML files during build time. This improves:

- **SEO**: Search engines can crawl pre-rendered HTML
- **Performance**: Faster initial page loads
- **Hosting**: Can be deployed to any static hosting (Netlify, Vercel, GitHub Pages, etc.)

## How It Works

The SSG process:
1. Builds your React app with `vite build`
2. Reads the generated `dist/index.html`
3. Creates a folder structure matching each route
4. Copies `index.html` to each route folder

Example output:
```
dist/
├── index.html
├── apps/
│   ├── crm/
│   │   ├── dashboard/
│   │   │   └── index.html
│   │   ├── contacts/
│   │   │   └── index.html
│   │   └── leads/
│   │       └── index.html
│   └── hospital/
│       ├── dashboard/
│       │   └── index.html
│       └── doctors/
│           └── index.html
```

## Usage

### 1. Basic SSG Build
```bash
npm run build:ssg
```

This will:
- Build your app with Vite
- Generate static HTML for all configured routes
- Output to `dist/` folder

### 2. SSG + Encryption (Licensed Build)
```bash
npm run build:ssg:secure
```

This will:
- Build your app
- Generate static HTML for all routes
- Encrypt the bundle with license protection

### 3. Preview SSG Build
```bash
npm run preview:ssg
```

Test your SSG build locally before deployment.

## Adding New Routes

Edit `scripts/ssg-build.js` and add routes to the `routes` array:

```javascript
const routes = [
  '/',
  '/apps/crm/dashboard',
  '/your/new/route',  // Add here
  // ... more routes
];
```

**Current routes configured**: ~30 routes
**Total routes available**: 100+ (add as needed)

## Configuration

### Customize Per-Route HTML

In `scripts/ssg-build.js`, you can customize the HTML for each route:

```javascript
// Update title
routeHtml = routeHtml.replace(
  /<title>.*?<\/title>/,
  `<title>Custom Title - ${route}</title>`
);

// Add meta tags
routeHtml = routeHtml.replace(
  '</head>',
  `<meta name="description" content="Custom description for ${route}">
   </head>`
);
```

### Exclude Routes

Some routes shouldn't be pre-rendered (e.g., auth pages, dynamic content). Simply don't add them to the `routes` array.

## Deployment

### Netlify / Vercel
1. Build command: `npm run build:ssg`
2. Publish directory: `dist`
3. Configure redirect rules for SPA routing:

**netlify.toml**:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**vercel.json**:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### GitHub Pages
```bash
npm run build:ssg
# Push dist/ folder to gh-pages branch
```

### Traditional Hosting
Upload the entire `dist/` folder to your web server.

## Limitations

1. **Client-side routing still works**: React Router handles navigation after initial load
2. **Dynamic data**: Data fetching still happens client-side (consider using `useSWR` or React Query for caching)
3. **Auth routes**: Consider excluding auth routes from SSG if they require authentication

## Advanced: True SSR with Data Fetching

For true server-side rendering with data fetching, consider:
- **Vite SSR**: Official Vite SSR support
- **Remix**: Full-stack React framework
- **Next.js**: If you decide to migrate later

## Troubleshooting

### Build fails
- Ensure `npm run build` works first
- Check for console errors
- Verify all route components exist

### Routes not generating
- Check routes array in `scripts/ssg-build.js`
- Ensure paths start with `/`
- Check file system permissions

### SEO not improved
- Verify HTML files are generated correctly
- Check that search engines can access your site
- Add proper meta tags and structured data

## License System Integration

The SSG works seamlessly with your license protection:
- **Development**: Normal dev server (`npm run dev`)
- **SSG Build**: Pre-rendered HTML (`npm run build:ssg`)
- **Encrypted SSG**: Pre-rendered + encrypted (`npm run build:ssg:secure`)

## Need Help?

- Check generated files in `dist/` folder
- Test with `npm run preview:ssg`
- Ensure your routes are defined in the configuration
