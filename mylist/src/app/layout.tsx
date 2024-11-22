import Navbar from "@/component/navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            success: {
              duration: 4000,
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              duration: 5000,
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
