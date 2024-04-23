"use client";

import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatParent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });
  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-g">
      <header>
        <h1 className="w-1/2 flex justify-center mt-4 m-auto">AI Chattbot</h1>
      </header>
      <section className="flex justify-center mt-4">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center align-center w-2/4 gap-2"
        >
          <input
            value={input}
            placeholder="Skriv in din fråga..."
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Skicka
          </button>
        </form>
      </section>
      <div className="flex justify-center ">
        <ul
          ref={chatParent}
          className="w-2/4 my-10 bg-black-900 max-h-[700px] overflow-y-auto rounded-lg scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100 "
        >
          {messages.map((m, index) => (
            <div
              key={index}
              className={`flex items-start my-1 p-3 ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <span className="font-xxl text-3xl">
                {m.role === "user" ? "" : "🤖"}
                {/* Replace these emojis with your preferred icons */}
              </span>
              <li
                className={`rounded-lg p-2 ${
                  m.role === "user"
                    ? " bg-blue-600 mr-2 w-fit max-w-96"
                    : " bg-gray-600 ml-2 w-fit max-w-96"
                }`}
              >
                {m.content}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
