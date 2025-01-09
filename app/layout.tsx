'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.potenzpillen.shop";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.potenzpillen.shop",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Nettoto : Situs Gacor Hari Ini Dan Slot Minimal Deposit 5000 Via Dana",
            "reviewBody": "Nettoto : Situs Gacor Hari Ini Dan Slot Minimal Deposit 5000 Via Dana, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Nettoto : Situs Gacor Hari Ini Dan Slot Minimal Deposit 5000 Via Dana</title>
        <meta name="description" content="Nettoto adalah situs gacor yang menawarkan pengalaman bermain slot online yang menyenangkan dan menguntungkan. Dengan berbagai pilihan permainan slot yang mengasyikkan, pemain dapat menikmati sensasi bermain dengan peluang menang yang lebih besar. Situs ini dikenal dengan tingkat kemenangan yang tinggi dan menyediakan banyak bonus menarik yang bisa meningkatkan peluang Anda untuk meraih kemenangan besar" />
        <meta name="keywords" content="Nettoto, Situs Gacor Hari Ini, Slot Minimal Deposit 5000 Via Dana, Slot Deposit 5000, Slot Online Terpercaya, Daftar Slot Via Dana Tanpa Rekening, Situs Slot Gacor Gampang Maxwin, Link Slot Gacor Terpercaya, Link Gacor Hari Ini" />
        <meta name="google-site-verification" content="jtFlwdaDnBKk_KOhMUO_NrGvdHvEC48NzJr2czjXFdE" />
        <meta name="application-name" content="nettoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="nettoto" />
        <meta name="publisher" content="nettoto" />
        <meta name="copyright" content="nettoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Nettoto : Situs Gacor Hari Ini Dan Slot Minimal Deposit 5000 Via Dana" />
        <meta property="og:description" content="Nettoto : Situs Gacor Hari Ini Dan Slot Minimal Deposit 5000 Via Dana, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="nettoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="nettoto" />
        <meta name="twitter:title" content="Nettoto : Situs Gacor Hari Ini Dan Slot Minimal Deposit 5000 Via Dana" />
        <meta name="twitter:description" content="Nettoto : Situs Gacor Hari Ini Dan Slot Minimal Deposit 5000 Via Dana, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
