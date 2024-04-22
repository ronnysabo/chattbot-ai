"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <div className="flex justify-center mt-4">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center align-center w-3/4"
        >
          <input
            value={input}
            placeholder="Enter your message"
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        <ul className="w-3/4 my-10">
          {messages.map((m, index) => (
            <div
              key={index}
              className={`flex items-start my-1 ${
                m.role === "user" ? "justify-start" : "justify-end"
              }`}
            >
              <span>
                {m.role === "user" ? "" : "🤖"}
                {/* Replace these emojis with your preferred icons */}
              </span>
              <li
                className={`rounded-lg p-2 ${
                  m.role === "user"
                    ? "order-1 bg-blue-600 mr-2 w-fit max-w-96"
                    : "order-2 bg-gray-600 ml-2 w-fit max-w-96"
                }`}
              >
                {m.content}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
