import React, { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaVideo, FaInfoCircle } from "react-icons/fa";
import Header from "@/components/Header";

export default function Messaging() {
  const [users, setUsers] = useState([
    { id: 1, name: "Frances Guerrero", avatar: "/13.jpg", lastMessage: "Sent a photo" },
    { id: 2, name: "Judy Nguyen", avatar: "/02.jpg", lastMessage: "Online" },
  ]);

  const [selectedChat, setSelectedChat] = useState({
    id: 2,
    name: "Judy Nguyen",
    avatar: "02.jpg",
    messages: [
      { from: "Judy Nguyen", text: "Applauded no discovery in newspaper allowance.", time: "6:15 AM" },
      { from: "You", text: "With pleasure", time: "6:20 AM" },
    ],
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChatClick = (user) => {
    setSelectedChat({
      ...user,
      messages: [
        { from: user.name, text: `This is the chat with ${user.name}`, time: "7:15 AM" },
        { from: "You", text: "Reply to the message", time: "7:20 AM" },
      ],
    });

    const userExists = users.some((existingUser) => existingUser.id === user.id);
    if (!userExists) {
      const newUser = { id: users.length + 1, name: `New User ${users.length + 1}`, avatar: "/10.jpg", lastMessage: "Just joined" };
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  };

  return (
    <div>
     
      <Header />

      
      <div className="md:hidden flex justify-between items-center bg-white px-4 py-2 border-b border-gray-300 ">
        <h2 className="text-lg font-semibold">Messaging</h2>
        <button
          className="text-xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Adjust layout with padding for content below header */}
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
                onClick={() => handleChatClick(user)}
              >
                <img
                  src={user.avatar}
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
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
            <div className="flex items-center">
              <img
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
                  <p
                    className={`${
                      message.from === "You" ? "bg-blue-500 text-white" : "bg-gray-100"
                    } p-2 rounded-lg inline-block`}
                  >
                    {message.text}
                  </p>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center p-4 bg-white border-t border-gray-300">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="p-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
