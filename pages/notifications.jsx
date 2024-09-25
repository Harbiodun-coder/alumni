import React from "react";
import Header from "@/components/Header";

const notifications = () => {
  const notificationData = [
    {
      user: "Judy Nguyen",
      message: "sent you a friend request",
      action: ["Accept", "Delete"],
      time: "Just now",
      image: "/02.jpg",
    },
    {
      user: "Wish Amanda Read",
      message: "Read a happy birthday",
      action: ["Say happy birthday"],
      time: "Just now",
      image: "/02.jpg",
    },
    {
      user: "Webastica",
      message: "has 15 likes and 1 new activity",
      action: [],
      time: "2 min",
      image: "/02.jpg",
    },
    {
      user: "Bootstrap in the news",
      message:
        "The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks",
      action: [],
      time: "8 min",
      image: "/02.jpg",
    },
    {
      user: "Samuel Bishop",
      message: "joined project Blogzine blog theme",
      action: [],
      time: "20 min",
      image: "/02.jpg",
    },
    {
      user: "Webastica LLC",
      message: "has sent you $1205 USD",
      action: [],
      time: "3 hrs",
      image: "/02.jpg",
    },
    {
      user: "Order #238565",
      message: "Order has been cancelled",
      action: ["Review order"],
      time: "5 hrs",
      image: "/02.jpg",
    },
  ];

  return (
    <div>
      <Header />
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-40">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-xl font-semibold mb-4">Notifications</h1>
        <ul>
          {notificationData.map((notification, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-4 border-b ${
                index === 0
                  ? "bg-blue-100"
                  : index === 1
                  ? "bg-red-100"
                  : "bg-white"
              }`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={notification.image}
                  alt={notification.user}
                  className="h-8 w-8 rounded-full"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">{notification.user}</span>{" "}
                    {notification.message}
                  </p>
                  {notification.action.length > 0 && (
                    <div className="space-x-2 mt-2">
                      {notification.action.map((action, idx) => (
                        <button
                          key={idx}
                          className="px-2 py-1 bg-blue-500 text-white text-xs rounded"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-center w-full">
          <button className="px-4 py-2 bg-blue-500 text-white rounded w-full">
            Load more notifications
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default notifications;
