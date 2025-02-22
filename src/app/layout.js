import "./globals.css";
import Chat from "./chat/page";
import Login from "./page";
import Register from "./register/page";
import Chatbot from "./teste/page";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="">
        {children}
      </body>
    </html>
  );
}
