// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Iconic Turf Club | Sports Infrastructure & Coaching Excellence</title>
      <meta
        name="description"
        content="Iconic Turf Club specializes in building world-class sports infrastructure, offering certified coaching, and organizing sports and corporate events."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#22c55e" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Iconic Turf Club" />
      <meta
        property="og:description"
        content="We build professional sports infrastructure, empower youth through coaching, and host high-impact sports and corporate events."
      />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://www.iconicturfclub.com" />
      <meta property="og:type" content="business.business" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Iconic Turf Club" />
      <meta
        name="twitter:description"
        content="Sports infrastructure experts providing coaching, facility development, and event management."
      />
      <meta name="twitter:image" content="/og-image.jpg" />

      {/* Favicon and Canonical */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.iconicturfclub.com" />
      {/* Business Category Structured Data (JSON-LD) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          "name": "Iconic Turf Club",
          "url": "https://www.iconicturfclub.com",
          "logo": "https://www.iconicturfclub.com/logo.png",
          "description": "Iconic Turf Club builds and manages sports facilities, offers certified coaching, and organizes sporting events across India.",
          "address": {
            "@type": "PostalAddress",
              "streetAddress": "Sector 9",
              "addressLocality": "Rourkela",
              "addressRegion": "Odisha",
              "postalCode": "769009",
              "addressCountry": "IN",
          },
          "openingHours": "Mo-Su 06:00-22:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8908352996",
            "contactType": "Customer Service"
          }
         
        })
      }} />
    </>
  );
}
