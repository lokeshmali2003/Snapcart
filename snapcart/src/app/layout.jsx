import "./globals.css";
import { Provider } from "./Provider";

export const metadata = {
  title: "Snapcart",
  description: "Login System Working",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
