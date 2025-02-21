import "./globals.css";

import Chat from "./components/pages/chat";
import Login from './login'
import Register from "./components/pages/register";
import Chatbot from "./components/pages/teste";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="">
        <Register/>
      </body>
    </html>
  );
}
