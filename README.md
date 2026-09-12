# Toronto Cupcake

Modern marketing + shop site for [Toronto Cupcake](https://www.torontocupcake.com/) — gourmet cupcakes baked fresh daily with signature pink-box delivery across Toronto & the GTA.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Local cart (React context + `localStorage`)
- Stubbed checkout (invoice-style flow)
- Netlify-ready (`netlify.toml`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Notes

- Checkout is intentionally stubbed — production payment can wire to the existing PayPal invoice process.
- Product imagery uses branded visual placeholders; swap files under a future `public/images/` path when bakery photos are ready.
