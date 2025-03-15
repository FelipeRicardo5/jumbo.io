import "./globals.css";
import Chat from "./chat/page";
import Login from "./page";
import Register from "./register/page";
import Avatar from "./avatar/page";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5686E1" />

      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}
