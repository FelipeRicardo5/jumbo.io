import "./globals.css";
import Login from './login'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Login/>
      </body>
    </html>
  );
}
