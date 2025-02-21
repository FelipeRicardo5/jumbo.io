"use client";

import { useState } from "react";

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sender: "user", message: input }),
        });

        const data = await response.json();
        setMessages([...messages, userMessage, ...data.map(msg => ({ sender: "bot", text: msg.text }))]);
        setInput("");
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-200">
            <div className="w-[400px] h-[500px] bg-white shadow-lg rounded-lg p-4 flex flex-col">
                <div className="flex-grow overflow-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-2 m-1 rounded ${msg.sender === "user" ? "bg-blue-400 text-white self-end" : "bg-gray-300 self-start"}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="flex mt-2">
                    <input
                        type="text"
                        className="flex-grow p-2 border rounded"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Digite sua mensagem..."
                    />
                    <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded">Enviar</button>
                </div>
            </div>
        </div>
    );
}
