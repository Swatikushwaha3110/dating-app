import React, { useEffect, useState } from "react";

function NearbyUsers() {
  const [users, setUsers] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);

  const dummyUsers = [
    { id: 1, name: "Alice", age: 25, gender: "Female", location: "Indore", photo: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 2, name: "Bob", age: 28, gender: "Male", location: "Indore", photo: "https://randomuser.me/api/portraits/men/43.jpg" },
    { id: 3, name: "Clara", age: 22, gender: "Female", location: "Indore", photo: "https://randomuser.me/api/portraits/women/50.jpg" },
    { id: 4, name: "David", age: 30, gender: "Male", location: "Indore", photo: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 5, name: "Eva", age: 26, gender: "Female", location: "Indore", photo: "https://randomuser.me/api/portraits/women/33.jpg" },
    { id: 6, name: "Frank", age: 29, gender: "Male", location: "Indore", photo: "https://randomuser.me/api/portraits/men/55.jpg" },
    { id: 7, name: "Grace", age: 24, gender: "Female", location: "Indore", photo: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 8, name: "Henry", age: 27, gender: "Male", location: "Indore", photo: "https://randomuser.me/api/portraits/men/70.jpg" },
    { id: 9, name: "Ivy", age: 23, gender: "Female", location: "Indore", photo: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 10, name: "Jack", age: 31, gender: "Male", location: "Indore", photo: "https://randomuser.me/api/portraits/men/20.jpg" },
  ];

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      localStorage.setItem("users", JSON.stringify(dummyUsers));
      setUsers(dummyUsers);
    }

    const storedConnected = JSON.parse(localStorage.getItem("connectedUsers")) || [];
    setConnectedUsers(storedConnected);
  }, []);

  const handleConnect = (user) => {
    if (!connectedUsers.find((u) => u.id === user.id)) {
      const updated = [...connectedUsers, user];
      setConnectedUsers(updated);
      localStorage.setItem("connectedUsers", JSON.stringify(updated));
      alert(`${user.name} connected!`);
    } else {
      alert(`${user.name} is already connected.`);
    }
  };

  return (
    <main className="min-h-screen bg-rose-50 p-6">
      <h1 className="text-3xl font-bold text-center text-rose-500 mb-8">
        Nearby Users
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-rose-500"
            />
            <h2 className="text-lg font-semibold text-gray-700">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.age} yrs, {user.gender}</p>
            <p className="text-sm text-gray-400">{user.location}</p>
            <button
              onClick={() => handleConnect(user)}
              className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition w-full"
            >
              Connect
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default NearbyUsers;
