// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: " Uzair Graphic & Printing",
//   description: " Uzair Graphic & Printing",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {/* <Navbar /> Navbar should be rendered before children */}
//         <main>{children}</main> {/* Main content area for the children */}
//          {/* Footer should be at the bottom of the page */}
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uzair Graphic & Printing",
  description: "Uzair Graphic & Printing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* ✅ Google Ads - gtag.js script (must be inside body, not head) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16967997482"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            console.log("✅ GTAG script loaded!");
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16967997482');
          `}
        </Script>

        {/* <Navbar /> */}
        <main>{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
