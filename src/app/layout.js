import { Navigation } from "@/components/Navigation";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          <div className="py-16 bg-gray-50 overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
              <Navigation />
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
