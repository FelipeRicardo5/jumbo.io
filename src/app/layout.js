import "./globals.css";
import Chat from "./chat/page";
import Login from "./page";
import Register from "./register/page";
import Chatbot from "./teste/page";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Referência ao manifest.json */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5686E1" />
        {/* Outros meta tags ou links de favicons podem ser adicionados aqui */}
      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}
