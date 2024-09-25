import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone, FaVideo, FaInfoCircle } from "react-icons/fa";
import Header from "@/components/Header";
import Image from "next/image";

export default function Messaging() {
  const [users, setUsers] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const fetchUsers = async () => {
    
    setUsers([
      {
        id: 1,
        name: "Alice Smith",
        avatar: "/13.jpg", 
        lastMessage: "Hey, how's it going?",
      },
      {
        id: 2,
        name: "Bob Johnson",
        avatar: "/10.jpg", 
        lastMessage: "Let's catch up!",
      },
    ]);
  };

  const fetchChatMessages = (user) => {
    const messages = [
      { from: user.name, text: "Hello!", time: "10:00 AM" },
      { from: "You", text: "Hi there!", time: "10:05 AM" },
    ];

    setSelectedChat({
      ...user,
      messages,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedChat) return;

    const newMessage = {
      from: "You",
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSelectedChat((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
    setMessageInput('');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <div className="md:hidden flex justify-between items-center bg-white px-4 py-2 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Messaging</h2>
        <button className="text-xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row h-screen pt-16">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-1/4 bg-white p-4 border-b md:border-r border-gray-300 absolute md:relative top-0 left-0 z-10 h-full md:h-auto`}
        >
          <h2 className="text-lg font-semibold mb-4">Active chats</h2>
          <input
            type="text"
            placeholder="Search for chats"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex flex-col space-y-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                onClick={() => fetchChatMessages(user)}
              >
                <Image
                  width={40}
                  height={40}
                  src={user?.avatar}
                  className="rounded-full w-10 h-10 mr-2"
                  alt="User avatar"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
                <div className="flex items-center">
                  <Image
                    height={40}
                    width={40}
                    src={selectedChat.avatar}
                    className="rounded-full w-10 h-10 mr-2"
                    alt="User avatar"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{selectedChat.name}</h3>
                    <p className="text-sm text-green-500">Online</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <FaPhone />
                  </button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <FaVideo />
                  </button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <FaInfoCircle />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                {selectedChat.messages.map((message, index) => (
                  <div key={index} className={`flex mb-4 ${message.from === "You" ? "justify-end" : ""}`}>
                    <div>
                      <p className={`${
                        message.from === "You" ? "bg-blue-500 text-white" : "bg-gray-100"
                      } p-2 rounded-lg inline-block`}>
                        {message.text}
                      </p>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex items-center p-4 bg-white border-t border-gray-300 w-full">
                <form onSubmit={sendMessage} className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Type a message"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button type="submit" className="p-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    ➤
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
