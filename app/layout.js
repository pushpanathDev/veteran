// app/layout.js
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar/page";
import ClientLayout from "./components/ClientLayout"; // ✅ new Client Component!

export const metadata = {
  title: "Veteran App",
  description: "Secure app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
