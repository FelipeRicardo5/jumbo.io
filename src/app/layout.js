import "./globals.css";
import Chat from "./chat/page";
import Login from "./login/page";
import Register from "./register/page";
import Chatbot from "./teste/page";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="">
        <Login />
      </body>
    </html>
  );
}
