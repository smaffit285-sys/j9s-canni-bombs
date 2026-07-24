# Wix + Square Commerce Handoff

## Current front-end behavior

The custom site now contains:

- Three mood-based collections
- Twenty curated scent listings
- Ritual ($11) and Immersion ($20) size selection
- A browser-side ritual bag
- A $54 Three-Mood Immersion Trio
- Product filtering, quick-view modals, FAQ content, responsive layouts, SEO metadata, and structured organization data
- A temporary email-order fallback while checkout is being connected

The browser-side bag does **not** currently synchronize inventory or line items into Wix. It is an interim selling and demonstration layer.

## Connect the first real checkout

1. Finish the Wix product listing for Purple Dream.
2. Publish the Wix store on a temporary Wix URL if the final domain is not ready.
3. Connect Square in **Getting Paid / Accept Payments**.
4. Complete a test transaction.
5. Copy the published Wix store or checkout URL.
6. In `app.js`, locate:

```js
const STORE={checkoutUrl:"",orderEmail:"TinkJenine1234@gmail.com"};
```

7. Put the published URL inside `checkoutUrl`.

Example:

```js
const STORE={checkoutUrl:"https://your-wix-store-url.example/shop",orderEmail:"TinkJenine1234@gmail.com"};
```

Until a URL is supplied, the checkout button opens an email containing the customer's selected products and subtotal.

## Recommended next integration

### Fast path

Link each custom-site product to its individual published Wix product page. Wix then handles variants, cart, payment, shipping, tax, discounts, and order emails.

### Advanced path

Use Wix Headless APIs or move the custom design into Wix Studio/Shopify so the visible cart and commerce database are fully synchronized. This should wait until demand justifies the implementation work.

## Catalog rules

- Every scent has one `Size` option.
- Choices: `Ritual` ($11) and `Immersion` ($20).
- Do not create Ritual and Immersion as separate options; they are choices under a single Size option.
- Keep Wix AI/demo products hidden or archived.
- Do not publish fake strikethrough pricing or unverified reviews.
- Creator codes should normally be unique and 10–15%.
- Local discretionary discounts can be applied in person without lowering the public reference price.