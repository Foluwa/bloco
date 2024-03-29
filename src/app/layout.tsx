import type { Metadata } from "next";
import local from 'next/font/local';
import "./globals.css";

const apercu = local({
  src: [
    {
      path: '../../public/fonts/apercu_regular_italic_pro.otf',
      weight: '400',
    },    
    {
      path: '../../public/fonts/apercu_regular_pro.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/apercu_medium_italic_pro.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/apercu_medium_pro.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/apercu_bold_italic_pro.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/apercu_bold_pro.otf',
      weight: '700',
    },
  ],
  variable: '--font-apercu',
});


export const metadata: Metadata = {
  title: "Bloco. ",
  description: "Bloco. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={apercu.className}>{children}</body>
    </html>
  );
}
