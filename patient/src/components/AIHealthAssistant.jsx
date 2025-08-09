import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";

const AIHealthAssistant = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you with your health today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/ai/health-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, userId: "user-id-placeholder" }),
      });
      const data = await response.json();
      const botMessage = { role: "assistant", content: data.response || "Sorry, I couldn't understand that." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { role: "assistant", content: "Error connecting to AI assistant." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 w-80 h-96 flex flex-col bg-white rounded-lg shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="bg-blue-600 text-white p-3 rounded-t-lg flex items-center space-x-2">
        <Bot size={20} />
        <h3 className="font-semibold">Health Assistant</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs p-2 rounded-lg ${
              msg.role === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-100 text-gray-900"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your symptoms..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={isLoading}
          className="flex-1 px-3 py-2 border rounded-md"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="px-3 py-2 bg-blue-600 text-white rounded-md"
        >
          <Send size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default AIHealthAssistant;
