import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Cotizador",
  description: "Crear cotizacion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
