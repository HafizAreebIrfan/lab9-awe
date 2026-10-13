# Next.js Rendering Comparison: SSR vs SSG vs CSR

A small Next.js project that compares three rendering strategies, **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)** and **Client-Side Rendering (CSR)**, by measuring page load times with the Chrome DevTools Network tab.

## Objective

Compare how each rendering method affects page load time and identify which method suits which use case.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or yarn / pnpm)

### Installation

```bash
git clone <your-repo-url>
cd <your-project-folder>
npm install
```

### Run in development mode

```bash
npm run dev
```

### Run in production mode (recommended for accurate timing)

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Routes

| Route | Rendering method |
|---|---|
| `/ssr` | Server-Side Rendering |
| `/ssg` | Static Site Generation |
| `/csr` | Client-Side Rendering |

> Update the route names above to match your project.

## How to Measure

1. Open Chrome and go to the page you want to test.
2. Open DevTools (`F12`) and select the **Network** tab.
3. Check **Disable cache**.
4. Reload the page and read the load time from the bottom of the Network panel.
5. Repeat 5 to 10 times and average the results.

## Results

| Rendering method | Load time |
|---|---|
| SSR (Server-Side Rendering) | 809 ms |
| SSG (Static Site Generation) | 896 ms |
| CSR (Client-Side Rendering) | 978 ms |

## Findings

**SSR was fastest (809 ms).** The server builds the full HTML and sends it to the browser, so content is visible as soon as the document arrives.

**SSG came in the middle (896 ms).** In theory SSG should be the fastest, since pages are pre-built at build time and served as static files.

**CSR was slowest (978 ms).** The browser first receives a nearly empty HTML shell, then must download and run JavaScript and fetch data before showing content. This extra round trip explains the longer time.

## Summary of Performance Differences

| Aspect | SSR | SSG | CSR |
|---|---|---|---|
| **When HTML is generated** | On every request, on the server | Once, at build time | In the browser, after JS loads |
| **Measured load time** | 809 ms (fastest) | 896 ms | 978 ms (slowest) |
| **Typical production speed** | Medium (server work per request) | Fastest (static files, CDN-friendly) | Slow first load, fast afterwards |
| **Server load** | High | Very low | Low |
| **First content visible** | Quickly | Very quickly | Delayed (blank shell first) |
| **SEO** | Excellent | Excellent | Weak |
| **Data freshness** | Always up to date | Stale until rebuilt | Up to date (fetched live) |

## Best Use Case for Each Method

| Method | Best suited for | Examples |
|---|---|---|
| **SSR** | Content that changes per request or per user, where SEO also matters | Dashboards, news feeds, e-commerce product pages with live stock/prices, personalized pages |
| **SSG** | Content that rarely changes and is the same for everyone | Blogs, documentation, portfolios, marketing and landing pages |
| **CSR** | Highly interactive pages where SEO is not important | Admin panels, apps behind a login, chat apps, real-time widgets |

## Conclusion

In this test, SSR loaded fastest and CSR slowest, with SSG between them. The gaps are small, so the results are not conclusive. For a fair comparison, repeat the test in production mode with the cache disabled and average multiple runs. In production, SSG is expected to beat SSR, because static files can be served instantly, even from a CDN.

## Tech Stack

- [Next.js](https://nextjs.org/)
- React
- Chrome DevTools (Network tab) for measurements