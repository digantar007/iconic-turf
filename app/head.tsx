// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Iconic Turf | Sports Coaching & Infrastructure</title>
      <meta
        name="description"
        content="Iconic Turf offers high-quality sports infrastructure, coaching, and training for athletes of all ages. Build champions with us."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="author" content="Iconic Turf" />

      {/* Open Graph Meta for Social Sharing */}
      <meta property="og:title" content="Iconic Turf" />
      <meta
        property="og:description"
        content="Build champions with premium sports infrastructure and coaching."
      />
      <meta property="og:image" content="/logo.jpg" />
      <meta property="og:url" content="https://iconicturf.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Iconic Turf" />
      <meta
        name="twitter:description"
        content="Premium turf infrastructure and sports coaching."
      />
      <meta name="twitter:image" content="/logo.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}