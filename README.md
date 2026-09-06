# hello.dev

This repo contains the source code and documentation powering [https://hello.dev/](https://hello.dev/).

## Getting started

### Prerequisites

1. Git
1. Node (~18), npm (~9)
1. A fork of the repo (for any contributions)
1. A clone of the [hello.dev repo](https://github.com/hellocoop/hello.dev) on your local machine

### Installation

1. `cd hello.dev` to go into the project root
1. `npm i` to install the npm dependencies

### Running locally

1. `npm run dev` to start the hot-reloading development server (powered by [Vite](https://vitejs.dev/))
1. `open http://localhost:8080` to open the site in your favorite browser
   
### Testing
1. `npm run test` will check all the links

## License

<a href="LICENSE">![CC0](https://cdn.hello.coop/images/cc-zero.svg)</a>
## Deployment

www.hello.dev is served from Cloudflare Workers as static assets (see `wrangler.toml`).

- `npm run build` writes the site to `dist/` (Next static export, then Pagefind index, sitemap, and markdown/llms.txt generation).
- Merging a PR into `main` requires the **Ready for merge** check (build + link check) and the **Cloudflare Workers** preview build to pass.
- Cloudflare Workers Builds watches `main` and deploys on merge. Nothing deploys from GitHub Actions.
- `public/_headers` sets the CSP; `public/_redirects` holds path redirects. Both are copied into `dist/` by the build.
- `npm run deploy` deploys by hand with your own Cloudflare login. Normally unnecessary.
