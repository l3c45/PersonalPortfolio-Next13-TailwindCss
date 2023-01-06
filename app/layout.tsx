import { Exo_2 } from "@next/font/google";
import Head from "next/head";

const exo = Exo_2()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={` ${exo.className} container mx-auto px-4  bg-slate-900   `}
      >
        {children}
      </body>
    </html>
  );
}
