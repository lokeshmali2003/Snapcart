import "./globals.css";
import { Provider } from "./Provider";

export const metadata = {
  title: "Snapcart",
  description: "Login System Working",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-gradient-to-b from-green-50">
        <Provider>
          {children}
          </Provider>
      </body>
    </html>
  );
}



