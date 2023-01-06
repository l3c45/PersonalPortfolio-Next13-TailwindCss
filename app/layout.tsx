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
        className={`container px-4 mx-auto ${exo.className} overflow-x-hidden bg-slate-900 text-white  `}
      >
        {children}
      </body>
    </html>
  );
}
